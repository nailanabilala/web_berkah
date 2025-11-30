import React from 'react';

/**
 * Badge component for displaying small status indicators, labels, or tags.
 *
 * It renders a rounded span with border and text styling.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content to display inside the badge.
 * @param {string} [props.className=""] - Additional CSS classes to apply to the badge.
 * @returns {JSX.Element} The rendered Badge component.
 */
const Badge = ({ children, className = "" }) => (
    <span className={`inline-flex items-center rounded-full border border-zinc-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 ${className}`}>
        {children}
    </span>
);

export default Badge;
