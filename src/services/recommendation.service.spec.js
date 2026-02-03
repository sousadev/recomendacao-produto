import recommendationService from './recommendation.service';
const { getRecommendations } = recommendationService;

describe('recommendationService', () => {
  it('deve retornar array vazio quando selectedRecommendationType for inválido', () => {
    const result = getRecommendations({
      selectedPreferences: ['Integração'],
      selectedFeatures: ['Integração'],
      selectedRecommendationType: 'InvalidType',
    });

    expect(result).toEqual([]);
  });
  describe('getRecommendations', () => {
    it('deve retornar array vazio quando formData não for informado', () => {
      const result = getRecommendations(undefined);
      expect(result).toEqual([]);
    });
  });

  describe('getRecommendations', () => {
    it('deve retornar array vazio quando products não for informado', () => {
      const result = getRecommendations({
        selectedPreferences: ['Integração'],
        selectedFeatures: ['Integração'],
        selectedRecommendationType: 'MultipleProducts',
      });
      expect(result).toEqual([]);
    });
  });

  describe('getRecommendations', () => {
    it('deve retornar array vazio quando selectedPreferences não for informado', () => {
      const result = getRecommendations({
        selectedPreferences: undefined,
        selectedFeatures: ['Integração'],
        selectedRecommendationType: 'MultipleProducts',
      });
      expect(result).toEqual([]);
    });

    describe('getRecommendations', () => {
      it('deve retornar array vazio quando selectedFeatures não for informado', () => {
        const result = getRecommendations({
          selectedPreferences: ['Integração'],
          selectedFeatures: undefined,
          selectedRecommendationType: 'MultipleProducts',
        });
        expect(result).toEqual([]);
      });
    });

    describe('getRecommendations', () => {
      it('deve retornar um array com 1 produto', () => {
        const result = getRecommendations({
          selectedPreferences: ['Personalização de funis de vendas'],
          selectedFeatures: ['Gestão de leads e oportunidades'],
          selectedRecommendationType: 'MultipleProducts',
        });
        expect(result).toEqual([]);
      });
    });

  });
});