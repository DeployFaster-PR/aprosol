import React from 'react';

interface TitleBoxProps {
  title: string;
  header: string;
  titleColor?: string;
  headerColor?: string;
  className?: string;
  centered?: boolean;
  animate?: boolean;
  onClick?: () => void;
}

const TitleBox: React.FC<TitleBoxProps> = ({
  title,
  header,
  titleColor = 'text-blue-600',
  headerColor = 'text-gray-900',
  className = '',
  centered = true,
  animate = true,
  onClick,
}) => {
  return (
    <div
      className={`
        ${
          centered
            ? 'flex flex-col items-center justify-center text-center'
            : 'flex flex-col'
        }
        space-y-2 py-8 md:py-12
        ${animate ? 'animate-fade-in group' : ''}
        ${
          onClick
            ? 'cursor-pointer transition-all duration-300 ease-in-out hover:transform hover:scale-[1.02] hover:shadow-lg rounded-lg p-2'
            : ''
        }
        ${className}
      `}
      onClick={onClick}
    >
      {/* Title Text (Smaller, colored) */}
      <div
        className={`
          text-sm font-semibold tracking-wide
          ${titleColor}
          ${
            animate
              ? 'transition-all duration-300 group-hover:scale-105 animate-slide-up'
              : ''
          }
        `}
      >
        {title}
      </div>

      {/* Header Text (Larger, prominent) */}
      <h2
        className={`
          text-2xl md:text-3xl font-bold leading-tight
          ${headerColor}
          ${
            animate
              ? 'transition-all duration-300 group-hover:scale-[1.02] animate-slide-up'
              : ''
          }
        `}
        style={animate ? { animationDelay: '0.1s' } : {}}
      >
        {header}
      </h2>
    </div>
  );
};

export default TitleBox;
