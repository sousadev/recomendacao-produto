import React, { useState } from 'react';
import { Selector } from '../../selector';

function Features({ features, selectedFeatures = [], onFeatureChange }) {
  const [featuresData, setFeaturesData] = useState(selectedFeatures);

  const handleFeatureChange = (feature) => {
    onFeatureChange(feature);
  };

  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2 w-full">Funcionalidades:</h2>
        <Selector
          key={"feature"}
          items={features}
          label={"Selecione uma funcionalidade"}
          onSelect={handleFeatureChange}
          selected={featuresData}
        />
    </div>
  );
}

export default Features;
