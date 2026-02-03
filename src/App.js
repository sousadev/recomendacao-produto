import React, { useEffect, useState } from 'react';
import Form from './components/Form/Form';
import RecommendationList from './components/RecommendationList/RecommendationList';
import Rocket from "./assets/images/rocket.png";
import getProducts from './services/product.service';
import useRecommendations from './hooks/useRecommendations';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

function App() {
  const [products, setProducts] = useState([]);
  const { recommendations, getRecommendations, setRecommendations } = useRecommendations(products);
  const [searchedRecommendations, setSearchedRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchProducts() {
    const response = await getProducts();
    setProducts(response);
  }

  function handleSearchRecommendations(recommends) {
    setLoading(true);
    setTimeout(() => {
      console.log("> ", recommends);
      setSearchedRecommendations(recommends);
      setLoading(false);
    }, 2000);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12 gap-2">
      <div className="max-w-6xl w-full bg-white rounded-2xl p-8 md:p-12 justify-center items-center flex flex-col gap-2">
        <img src={Rocket} alt="Rocket" style={{ width: 300 }} />
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-3">
            Recomendador de Produtos
            <span className="text-indigo-600"> RD Station</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Descubra em segundos a solução RD Station feita para alavancar seu negócio.
          </p>
        </div>

        <div className="flex flex-col bg-white/70 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 p-6 md:p-8">
          {loading ? (
            <>
            <div className="flex justify-center items-center w-full">
                 <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
            </div>
            </>

          ) : (
            <>
              {searchedRecommendations.length > 0 ? (
                <div className="lg:col-span-3">
                  <div className="h-full bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <RecommendationList searchedRecommendations={searchedRecommendations} onClear={() => setSearchedRecommendations([])} />
                  </div>
                </div>

              ) : (
                <div className="lg:col-span-2">
                  <Form
                    onSubmit={handleSearchRecommendations}
                  />
                </div>

              )}
            </>
          )}

        </div>
      </div>
    </div>
  );
}

export default App;
