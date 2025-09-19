import logo from './logo.svg';
import './App.css';
import Category from './Category';
import ProductItems from './ProductItems';

function App() {
  return (
    <>
      <div className="py-[40px]">
        <div className='max-w-[1320px] mx-auto text-center '>
          <h1 className='text-center font-bold font-serif text-[40px] mb-[30px]'>Our Products</h1>
          <div className='grid grid-cols-[30%_auto]'>
           <div className=''>
             <Category />
           </div>
           <div>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-[16px]'>
              <ProductItems/>
            </div>
           </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
