import React from 'react';
import { SectionTitle } from '../Shared/SectionTitle.jsx';
import FeatureJobCard from './FeatureJobCard.jsx';

const FeaturedJob = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-12 p-2">
      <SectionTitle
        title="Featured Job"
        nextpage="Explore More"
        nextpageLink="/alljobs" // <- Add the route here
      />

      <div>
        <FeatureJobCard />
      </div>
    </div>
  );
};

export default FeaturedJob;