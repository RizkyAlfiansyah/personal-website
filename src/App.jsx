import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductCategories, getProducts } from './actions/actions';
import './App.css';

function App() {
  const { products, loading, errorMessage } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Products</h1>
      {loading ? (
        <div>Loading...</div>
      ) : errorMessage ? (
        <div>{errorMessage}</div>
      ) : (
        products?.products?.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
