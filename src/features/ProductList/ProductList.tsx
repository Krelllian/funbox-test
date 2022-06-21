import { useAppSelector } from '../../app/hooks';
import './ProductList.scss'
import ProductCard from '../../components/ProductCard/ProductCard';

export function ProductList() {
  const products = useAppSelector(state => state.productList)

  return (
    <div className='cards-container container'>
      <p className='cards__title'>Ты сегодня покормил кота?</p>
      <div className='cardsList'>
        {products.map(card => {
          return (
            <ProductCard card={card} key={card.id} />
          )
        }
        )}
      </div>
    </div >
  );
}
