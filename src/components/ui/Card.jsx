import React from 'react';

/**
 * Card component for displaying content in a contained container.
 *
 * Renders a div with a border, rounded corners, background color, and shadow.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content to display inside the card.
 * @param {string} [props.className=""] - Additional CSS classes to apply to the card.
 * @returns {JSX.Element} The rendered Card component.
 */
const Card = ({ children, className = "" }) => (
    <div className={`rounded-xl border border-zinc-200 bg-white text-zinc-950 shadow-sm ${className}`}>
        {children}
    </div>
);

export default Card;
