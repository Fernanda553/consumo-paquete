import './App.css';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'my-new-product-card'


const product = {
  id: '1',
  title: 'Coffe Mug - Card',
  img: '../img/coffee-mug.png'
}

function App() {
  return (
    <div className="App App-header">
          <ProductCard
      product={product}
      initialValues={{
        count: 4,
        maxCount:10
      }}
       >
      {({reset, count, maxCountReached, increaseBy}) => (
        <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
        </>
      )}
    </ProductCard>
    </div>
  );
}

export default App;
