import React from 'react';

/**
 * Button component with support for multiple variants.
 *
 * Renders a button element with standardized styling and behavior.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be displayed inside the button.
 * @param {'primary' | 'secondary' | 'outline' | 'ghost' | 'link'} [props.variant='primary'] - The visual style variant of the button.
 * @param {string} [props.className=''] - Additional CSS classes to apply.
 * @param {function} [props.onClick] - Click handler function.
 * @param {...Object} [props.props] - Other props passed down to the HTML button element.
 * @returns {JSX.Element} The rendered Button component.
 */
const Button = ({ children, variant = 'primary', className = '', onClick, ...props }) => {
    const baseStyle = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2";

    const variants = {
        primary: "bg-zinc-900 text-zinc-50 hover:bg-zinc-900/90 shadow-sm",
        secondary: "bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80",
        outline: "border border-zinc-200 bg-white shadow-sm hover:bg-zinc-100 hover:text-zinc-900",
        ghost: "hover:bg-zinc-100 hover:text-zinc-900",
        link: "text-zinc-900 underline-offset-4 hover:underline",
    };

    return (
        <button
            className={`${baseStyle} ${variants[variant]} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
