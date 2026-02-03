import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductCard from './ProductCard';

describe('ProductCard', () => {
  const mockProduct = {
    id: 1,
    name: 'RD Station CRM',
    category: 'Vendas',
    preferences: [
      'Integração fácil com ferramentas de e-mail',
      'Personalização de funis de vendas',
      'Relatórios avançados de desempenho de vendas',
    ],
    features: [
      'Gestão de leads e oportunidades',
      'Automação de fluxos de trabalho de vendas',
      'Rastreamento de interações com clientes',
    ],
  };

  it('deve renderizar o nome do produto', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText('RD Station CRM')).toBeInTheDocument();
  });

  it('deve renderizar a categoria do produto', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText('Vendas')).toBeInTheDocument();
  });

  it('deve renderizar as preferências do produto', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText('Integração fácil com ferramentas de e-mail')).toBeInTheDocument();
    expect(screen.getByText('Personalização de funis de vendas')).toBeInTheDocument();
    expect(screen.getByText('Relatórios avançados de desempenho de vendas')).toBeInTheDocument();
  });

  it('deve renderizar as features do produto', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText('Gestão de leads e oportunidades')).toBeInTheDocument();
    expect(screen.getByText('Automação de fluxos de trabalho de vendas')).toBeInTheDocument();
    expect(screen.getByText('Rastreamento de interações com clientes')).toBeInTheDocument();
  });

  it('deve aplicar a classe CSS correta', () => {
    const { container } = render(<ProductCard product={mockProduct} />);
    expect(container.firstChild).toHaveClass('product-card');
  });
});
