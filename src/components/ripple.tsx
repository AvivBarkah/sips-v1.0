import React, { Children, cloneElement, isValidElement } from 'react';

interface RippleProps {
  children: React.ReactElement;
  duration?: number;
  color?: string;
}

// Definisikan tipe props yang kita harapkan ada pada komponen anak.
interface RippleWrappedComponentProps {
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const Ripple: React.FC<RippleProps> = ({ children, duration = 500, color = 'rgba(255, 255, 255, 0.7)' }) => {
    
    const handleRipple = (event: React.MouseEvent<HTMLElement>) => {
        const element = event.currentTarget;

        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
        ripple.style.backgroundColor = color;
        ripple.style.animationDuration = `${duration}ms`;

        element.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, duration);
    };

    const child = Children.only(children);

    if (!isValidElement<RippleWrappedComponentProps>(child)) {
        return children;
    }

    const originalOnClick = child.props.onClick;

    const newOnClick = (e: React.MouseEvent<HTMLElement>) => {
        handleRipple(e);
        if (originalOnClick) {
            originalOnClick(e);
        }
    };

    // Ganti `.nav-item` menjadi `.ripple-container`
    return cloneElement(child, {
        className: `${child.props.className || ''} ripple-container`,
        onClick: newOnClick,
    });
};

export default Ripple;
