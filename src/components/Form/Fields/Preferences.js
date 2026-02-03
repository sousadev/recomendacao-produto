// Preferences.js
import React, { useState } from 'react';
import { Selector } from '../../selector';

function Preferences({
  preferences,
  selectedPreferences = [],
  onPreferenceChange,
}) {
  const handlePreferenceChange = (preference) => {
    onPreferenceChange(preference);
  };

  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">Preferências:</h2>
      <ul>
          <Selector
            key={"preference"}
            items={preferences}
            label={"Selecione uma preferência"}
            onSelect={handlePreferenceChange}
            selected={selectedPreferences}
          />
      </ul>
    </div>
  );
}

export default Preferences;
