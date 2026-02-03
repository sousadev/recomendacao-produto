const getRecommendations = (
  formData = { selectedPreferences: [], selectedFeatures: [], selectedRecommendationType: "" },
  products = []
) => {
  const { selectedPreferences, selectedFeatures, selectedRecommendationType } = formData;
  const filteredProducts = products.filter((product) => {
    const { preferences = [], features = [] } = product;

    
    const hasAllPreferences = preferences.filter(p => p.includes(selectedPreferences));

    const hasAllFeatures = features.filter(f => f.includes(selectedFeatures));


    return hasAllPreferences.length > 0 && hasAllFeatures.length > 0;
  });
  if(filteredProducts.length > 0) {
    if(selectedRecommendationType === "SingleProduct") {
      return [filteredProducts[filteredProducts.length - 1]];
    } else if(selectedRecommendationType === "MultipleProducts") {
      return filteredProducts;
    } else {
      return [];
    }
  } else {
    return [];
  }
};

export default { getRecommendations };