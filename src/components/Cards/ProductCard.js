import SalesIcon from '../../assets/icons/sales.png';
import MarketingIcon from '../../assets/icons/marketing.png';
import OmnichannelIcon from '../../assets/icons/omnichannel.png';
import IaIcon from '../../assets/icons/ia.png';

function ProductCardHorizontal({ product, onClear }) {
    const { id, name, category, preferences, features } = product;
    const image = {
        'Vendas': <img src={SalesIcon} alt="Vendas" style={{ width: 80 }} />,
        'Marketing': <img src={MarketingIcon} alt="Marketing" style={{ width: 80 }} />,
        'Omnichannel': <img src={OmnichannelIcon} alt="Omnichannel" style={{ width: 80 }} />,
        'Uso de Inteligência Artificial': <img src={IaIcon} alt="ia" style={{ width: 80 }} />,
    }
    return (
        <aside key={id} className='product-card'>
            <div className="flex bg-white rounded-lg shadow-md p-4 max-w-4xl">
                <div className="flex-1 pr-4">
                    {image[category]}
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded mb-2">
                        {category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
                </div>

                <div className="flex-1 px-4 border-l border-gray-200">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Diferencial</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        {preferences.map((pref, idx) => (
                            <li key={idx}>{pref}</li>
                        ))}
                    </ul>
                </div>

                <div className="flex-1 pl-4 border-l border-gray-200">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Funcionalidades</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        {features.map((feat, idx) => (
                            <li key={idx}>{feat}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="flex justify-between">
                <button className="text-blue-500 px-4 py-2 rounded-md mt-4" onClick={onClear}>Buscar outra solução</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">Contratar agora!</button>
            </div>
        </aside>
    );
}

export default ProductCardHorizontal;