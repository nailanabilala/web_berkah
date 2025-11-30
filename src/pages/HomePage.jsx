import React from 'react';
import Hero from '../components/sections/Hero';
import Gallery from '../components/sections/Gallery';
import Catalog from '../components/sections/Catalog';
import Process from '../components/sections/Process';

/**
 * HomePage component.
 *
 * Renders the landing page, aggregating several section components:
 * Hero, Gallery, Catalog (in preview mode), and Process.
 *
 * @component
 * @returns {JSX.Element} The rendered HomePage component.
 */
const HomePage = () => {
    return (
        <>
            <Hero />
            <Gallery />
            <Catalog isPreview={true} />
            <Process />
        </>
    );
};

export default HomePage;
