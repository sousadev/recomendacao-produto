// Form.js

import React, { useEffect } from 'react';
import { Preferences, Features, RecommendationType } from './Fields';
import { SubmitButton } from './SubmitButton';
import useProducts from '../../hooks/useProducts';
import useForm from '../../hooks/useForm';
import useRecommendations from '../../hooks/useRecommendations';
import { message } from 'antd';

function Form({ onSubmit }) {
  const { preferences, features, products } = useProducts();
  const { formData, handleChange } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    searchedRecommendations: [],
    selectedRecommendationType: '',
  });

  const { getRecommendations, recommendations } = useRecommendations(products);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.selectedPreferences.length) return message.error("Selecione pelo menos uma preferência");
    if(!formData.selectedFeatures.length) return message.error("Selecione pelo menos uma funcionalidade");
    console.log(formData.selectedRecommendationType)
    if(!formData?.selectedRecommendationType) return message.error("Selecione o tipo de recomendação");

    const dataRecommendations = await getRecommendations(formData);
    if(!dataRecommendations.length) return message.error("Nenhuma recomendação encontrada");
    onSubmit(dataRecommendations);

  };

  return (
    <form
      className="flex w-full flex-row justify-between gap-3"
      onSubmit={handleSubmit}
    >
      <div className="w-full flex flex-col justify-between">

      <Preferences
        preferences={preferences}
        onPreferenceChange={(selected) =>
          handleChange('selectedPreferences', selected)
        }
      />
      <Features
        features={features}
        onFeatureChange={(selected) =>
          handleChange('selectedFeatures', selected)
        }
      />
      </div>
      <div className="w-full flex flex-col justify-between p-4">
      <RecommendationType
        selectedRecommendationType={formData.selectedRecommendationType}
        onRecommendationTypeChange={(selected) =>
          handleChange('selectedRecommendationType', selected)
        }
        />
        
      <SubmitButton text="Obter recomendação" onClick={handleSubmit} icon="rocket" />
        </div>
    </form>
  );
}

export default Form;
