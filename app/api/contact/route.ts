import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// ============================================
// COMPANY CONFIGURATION - EDIT HERE ONLY
// ============================================
const COMPANY_CONFIG = {
  name: 'Aprosol Energy Limited',
  email: process.env.COMPANY_EMAIL || 'info@aprosolenergy.com',
  hrEmail:
    process.env.HR_EMAIL || process.env.COMPANY_EMAIL || 'hr@aprosolenergy.com',
  phone: '+234 XXX XXX XXXX',
  website: 'www.aprosolenergy.com',
  responseTime: '24-48 hours',
  brandColor: '#2563eb', // Blue color for branding
  industry: 'engineering services',
};
// ============================================

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get('content-type') || '';
    let formData: any = {};
    let files: { [key: string]: File } = {};

    // Handle both JSON and FormData
    if (contentType.includes('multipart/form-data')) {
      const formDataRequest = await request.formData();

      // Extract form fields and files
      for (const [key, value] of formDataRequest.entries()) {
        if (value instanceof File) {
          files[key] = value;
        } else {
          formData[key] = value;
        }
      }
    } else {
      formData = await request.json();
    }

    const { type } = formData;

    // Handle Contact Form
    if (!type || type === 'contact') {
      return handleContactForm(formData);
    }

    // Handle Career Form
    if (type === 'career') {
      return handleCareerForm(formData, files);
    }

    return NextResponse.json({ error: 'Invalid form type' }, { status: 400 });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Failed to process request. Please try again later.' },
      { status: 500 }
    );
  }
}

async function handleContactForm(formData: any) {
  const { name, email, phone, message } = formData;

  // Validate required fields
  if (!name || !email || !phone || !message) {
    return NextResponse.json(
      { error: 'All fields are required' },
      { status: 400 }
    );
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: 'Invalid email format' },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  // Email to company (notification)
  const companyMailOptions = {
    from: process.env.GMAIL_USER,
    to: COMPANY_CONFIG.email,
    subject: `New Contact Form Submission - ${COMPANY_CONFIG.name}`,
    html: generateContactEmailTemplate(name, email, phone, message),
  };

  // Auto-reply email to customer
  const customerMailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: `Thank you for contacting ${COMPANY_CONFIG.name}`,
    html: generateContactReplyTemplate(name, message),
  };

  await Promise.all([
    transporter.sendMail(companyMailOptions),
    transporter.sendMail(customerMailOptions),
  ]);

  return NextResponse.json(
    { success: true, message: 'Message sent successfully' },
    { status: 200 }
  );
}

async function handleCareerForm(formData: any, files: { [key: string]: File }) {
  const { firstName, lastName, email, phone, coverLetter } = formData;
  const resume = files.resume;

  // Validate required fields
  if (!firstName || !lastName || !email || !phone || !coverLetter) {
    return NextResponse.json(
      { error: 'All fields are required' },
      { status: 400 }
    );
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: 'Invalid email format' },
      { status: 400 }
    );
  }

  // Validate resume file
  if (!resume) {
    return NextResponse.json(
      { error: 'Resume file is required' },
      { status: 400 }
    );
  }

  // Check file size (5MB limit)
  if (resume.size > 5 * 1024 * 1024) {
    return NextResponse.json(
      { error: 'Resume file size must be less than 5MB' },
      { status: 400 }
    );
  }

  // Check file type
  const allowedTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ];

  if (!allowedTypes.includes(resume.type)) {
    return NextResponse.json(
      { error: 'Only PDF, DOC, and DOCX files are allowed' },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  // Convert file to buffer for attachment
  const resumeBuffer = await resume.arrayBuffer();
  const resumeAttachment = {
    filename: resume.name,
    content: Buffer.from(resumeBuffer),
  };

  const fullName = `${firstName} ${lastName}`;

  // Email to HR/company (notification)
  const hrMailOptions = {
    from: process.env.GMAIL_USER,
    to: COMPANY_CONFIG.hrEmail,
    subject: `New Job Application - ${COMPANY_CONFIG.name}`,
    html: generateCareerEmailTemplate(fullName, email, phone, coverLetter),
    attachments: [resumeAttachment],
  };

  // Auto-reply email to applicant
  const applicantMailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: `Application Received - ${COMPANY_CONFIG.name}`,
    html: generateCareerReplyTemplate(firstName),
  };

  await Promise.all([
    transporter.sendMail(hrMailOptions),
    transporter.sendMail(applicantMailOptions),
  ]);

  return NextResponse.json(
    { success: true, message: 'Application submitted successfully' },
    { status: 200 }
  );
}

// Contact form email templates
function generateContactEmailTemplate(
  name: string,
  email: string,
  phone: string,
  message: string
) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
      <div style="background-color: ${
        COMPANY_CONFIG.brandColor
      }; color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
        <h1 style="margin: 0; font-size: 24px;">${COMPANY_CONFIG.name}</h1>
        <p style="margin: 5px 0 0 0; font-size: 16px;">New Contact Form Submission</p>
      </div>
      
      <div style="padding: 30px; background-color: #f9fafb;">
        <div style="background-color: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h2 style="color: #1f2937; margin-top: 0; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Contact Details</h2>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #374151; display: inline-block; width: 80px;">Name:</strong>
            <span style="color: #6b7280;">${name}</span>
          </div>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #374151; display: inline-block; width: 80px;">Email:</strong>
            <a href="mailto:${email}" style="color: ${
    COMPANY_CONFIG.brandColor
  }; text-decoration: none;">${email}</a>
          </div>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #374151; display: inline-block; width: 80px;">Phone:</strong>
            <a href="tel:${phone}" style="color: ${
    COMPANY_CONFIG.brandColor
  }; text-decoration: none;">${phone}</a>
          </div>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #374151; display: block; margin-bottom: 8px;">Message:</strong>
            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px; border-left: 4px solid ${
              COMPANY_CONFIG.brandColor
            };">
              <p style="margin: 0; color: #4b5563; line-height: 1.6;">${message}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div style="background-color: #e5e7eb; padding: 15px; border-radius: 0 0 10px 10px; text-align: center;">
        <p style="margin: 0; color: #6b7280; font-size: 14px;">
          Received on ${new Date().toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZoneName: 'short',
          })}
        </p>
      </div>
    </div>
  `;
}

function generateContactReplyTemplate(name: string, message: string) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
      <div style="background-color: ${
        COMPANY_CONFIG.brandColor
      }; color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
        <h1 style="margin: 0; font-size: 24px;">${COMPANY_CONFIG.name}</h1>
        <p style="margin: 5px 0 0 0; font-size: 16px;">Thank You for Your Message</p>
      </div>
      
      <div style="padding: 30px; background-color: #f9fafb;">
        <div style="background-color: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h2 style="color: #1f2937; margin-top: 0;">Dear ${name},</h2>
          
          <p style="color: #4b5563; line-height: 1.6; margin-bottom: 20px;">
            Thank you for reaching out to <strong>${
              COMPANY_CONFIG.name
            }</strong>. We have received your message and appreciate your interest in our ${
    COMPANY_CONFIG.industry
  }.
          </p>
          
          <div style="background-color: #dbeafe; padding: 20px; border-radius: 6px; border-left: 4px solid ${
            COMPANY_CONFIG.brandColor
          }; margin-bottom: 20px;">
            <h3 style="color: #1e40af; margin-top: 0; margin-bottom: 10px;">Your Message Summary:</h3>
            <p style="color: #1e3a8a; margin: 0; font-style: italic;">"${message.substring(
              0,
              150
            )}${message.length > 150 ? '...' : ''}"</p>
          </div>
          
          <p style="color: #4b5563; line-height: 1.6; margin-bottom: 20px;">
            Our team will review your inquiry and get back to you within <strong>${
              COMPANY_CONFIG.responseTime
            }</strong>. We look forward to the opportunity to work with you and provide you with our top-quality engineering solutions.
          </p>
          
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
            <h4 style="color: #374151; margin-top: 0; margin-bottom: 10px;">Contact Information:</h4>
            <p style="color: #6b7280; margin: 5px 0;">
              <strong>Email:</strong> ${COMPANY_CONFIG.email}<br>
              <strong>Phone:</strong> ${COMPANY_CONFIG.phone}<br>
              <strong>Website:</strong> ${COMPANY_CONFIG.website}
            </p>
          </div>
          
          <p style="color: #4b5563; line-height: 1.6; margin-bottom: 0;">
            Best regards,<br>
            <strong style="color: ${COMPANY_CONFIG.brandColor};">The ${
    COMPANY_CONFIG.name
  } Team</strong>
          </p>
        </div>
      </div>
      
      <div style="background-color: #e5e7eb; padding: 15px; border-radius: 0 0 10px 10px; text-align: center;">
        <p style="margin: 0; color: #6b7280; font-size: 12px;">
          This is an automated response. Please do not reply to this email.
        </p>
      </div>
    </div>
  `;
}

// Career form email templates
function generateCareerEmailTemplate(
  fullName: string,
  email: string,
  phone: string,
  coverLetter: string
) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
      <div style="background-color: ${
        COMPANY_CONFIG.brandColor
      }; color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
        <h1 style="margin: 0; font-size: 24px;">${COMPANY_CONFIG.name}</h1>
        <p style="margin: 5px 0 0 0; font-size: 16px;">New Job Application</p>
      </div>
      
      <div style="padding: 30px; background-color: #f9fafb;">
        <div style="background-color: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h2 style="color: #1f2937; margin-top: 0; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Applicant Details</h2>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #374151; display: inline-block; width: 100px;">Full Name:</strong>
            <span style="color: #6b7280;">${fullName}</span>
          </div>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #374151; display: inline-block; width: 100px;">Email:</strong>
            <a href="mailto:${email}" style="color: ${
    COMPANY_CONFIG.brandColor
  }; text-decoration: none;">${email}</a>
          </div>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #374151; display: inline-block; width: 100px;">Phone:</strong>
            <a href="tel:${phone}" style="color: ${
    COMPANY_CONFIG.brandColor
  }; text-decoration: none;">${phone}</a>
          </div>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #374151; display: block; margin-bottom: 8px;">Cover Letter:</strong>
            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px; border-left: 4px solid ${
              COMPANY_CONFIG.brandColor
            };">
              <p style="margin: 0; color: #4b5563; line-height: 1.6;">${coverLetter}</p>
            </div>
          </div>
          
          <div style="background-color: #fef3c7; padding: 15px; border-radius: 6px; border-left: 4px solid #f59e0b;">
            <p style="margin: 0; color: #92400e; font-weight: 600;">📎 Resume attached to this email</p>
          </div>
        </div>
      </div>
      
      <div style="background-color: #e5e7eb; padding: 15px; border-radius: 0 0 10px 10px; text-align: center;">
        <p style="margin: 0; color: #6b7280; font-size: 14px;">
          Application received on ${new Date().toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZoneName: 'short',
          })}
        </p>
      </div>
    </div>
  `;
}

function generateCareerReplyTemplate(firstName: string) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
      <div style="background-color: ${COMPANY_CONFIG.brandColor}; color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
        <h1 style="margin: 0; font-size: 24px;">${COMPANY_CONFIG.name}</h1>
        <p style="margin: 5px 0 0 0; font-size: 16px;">Application Received</p>
      </div>
      
      <div style="padding: 30px; background-color: #f9fafb;">
        <div style="background-color: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h2 style="color: #1f2937; margin-top: 0;">Dear ${firstName},</h2>
          
          <p style="color: #4b5563; line-height: 1.6; margin-bottom: 20px;">
            Thank you for your interest in joining <strong>${COMPANY_CONFIG.name}</strong>! We have successfully received your job application and resume.
          </p>
          
          <div style="background-color: #d1fae5; padding: 20px; border-radius: 6px; border-left: 4px solid #10b981; margin-bottom: 20px;">
            <h3 style="color: #047857; margin-top: 0; margin-bottom: 10px;">✅ Application Status: Received</h3>
            <p style="color: #065f46; margin: 0;">Your application is now in our system and will be reviewed by our HR team.</p>
          </div>
          
          <p style="color: #4b5563; line-height: 1.6; margin-bottom: 20px;">
            Our hiring team will carefully review your application and resume. If your qualifications match our current openings, we will contact you within <strong>${COMPANY_CONFIG.responseTime}</strong> to discuss next steps.
          </p>
          
          <div style="background-color: #fef3c7; padding: 15px; border-radius: 6px; border-left: 4px solid #f59e0b; margin-bottom: 20px;">
            <h4 style="color: #92400e; margin-top: 0; margin-bottom: 10px;">What happens next?</h4>
            <ul style="color: #78350f; margin: 0; padding-left: 20px;">
              <li>Our HR team reviews your application</li>
              <li>We match your skills with available positions</li>
              <li>Qualified candidates will be contacted for interviews</li>
              <li>We'll keep your application on file for future opportunities</li>
            </ul>
          </div>
          
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
            <h4 style="color: #374151; margin-top: 0; margin-bottom: 10px;">Contact Information:</h4>
            <p style="color: #6b7280; margin: 5px 0;">
              <strong>HR Email:</strong> ${COMPANY_CONFIG.hrEmail}<br>
              <strong>Phone:</strong> ${COMPANY_CONFIG.phone}<br>
              <strong>Website:</strong> ${COMPANY_CONFIG.website}
            </p>
          </div>
          
          <p style="color: #4b5563; line-height: 1.6; margin-bottom: 0;">
            We appreciate your interest in ${COMPANY_CONFIG.name} and look forward to potentially welcoming you to our dynamic team!<br><br>
            Best regards,<br>
            <strong style="color: ${COMPANY_CONFIG.brandColor};">The ${COMPANY_CONFIG.name} HR Team</strong>
          </p>
        </div>
      </div>
      
      <div style="background-color: #e5e7eb; padding: 15px; border-radius: 0 0 10px 10px; text-align: center;">
        <p style="margin: 0; color: #6b7280; font-size: 12px;">
          This is an automated response. Please do not reply to this email.
        </p>
      </div>
    </div>
  `;
}
