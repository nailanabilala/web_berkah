import React, { useEffect } from 'react';
import Catalog from '../components/sections/Catalog';

/**
 * CatalogPage component.
 *
 * Renders the full catalog page by using the Catalog component with `isPreview` set to false.
 * It also ensures the page scrolls to the top when mounted.
 *
 * @component
 * @returns {JSX.Element} The rendered CatalogPage component.
 */
const CatalogPage = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20">
            <Catalog isPreview={false} />
        </div>
    );
};

export default CatalogPage;
