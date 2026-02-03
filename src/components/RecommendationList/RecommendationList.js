import React from 'react';
import ProductCardHorizontal from '../Cards/ProductCard';

function RecommendationList({ searchedRecommendations, onClear }) {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Recomendações:</h2>

      {searchedRecommendations.length === 0 && <p>Nenhuma recomendação encontrada.</p>}
      <div>
        {searchedRecommendations.map((recommendation, index) => (   
          <div key={index} className="mb-2">
            <ProductCardHorizontal product={recommendation} onClear={onClear} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommendationList;
