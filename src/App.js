import logo from './logo.svg';
import './App.css';
import Category from './Category';
import ProductItems from './ProductItems';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  let [finalCategory, setFinalCategory] = useState([]);
  let getCategory = () => {
    axios.get('https://dummyjson.com/products/categories')
      .then((categoryResponse) => categoryResponse.data)
      .then((finalres) => {
        setFinalCategory(finalres);
      })
  }


  let [finalProduct, setFinalProduct] = useState([]);
  let getProduct = () => {
    axios.get('https://dummyjson.com/products')
      .then((productResponse) => productResponse.data)
      .then((finalres) => {
        setFinalProduct(finalres.products);
      })
  }


  let [categoryName, setCategoryName] = useState('');
  useEffect(() => {
    if (categoryName !== "") {
      axios.get(`https://dummyjson.com/products/category/${categoryName}`)
        .then((categoryNameResponse) => categoryNameResponse.data)
        .then((finalres) => {
          setFinalProduct(finalres.products);
        })
    }
  }, [categoryName])


  useEffect(() => {
    getCategory();
    getProduct();
  }, []);

  return (
    <>
      <div className="py-[40px]">
        <div className='max-w-[1320px] mx-auto text-center '>
          <h1 className='text-center font-bold font-serif text-[40px] mb-[30px]'>Our Products</h1>
          <div className='grid grid-cols-[30%_auto] gap-[30px]'>
            <div className=''>
              <Category finalCategory={finalCategory} setCategoryName={setCategoryName} />
            </div>
            <div>
              <div className='grid grid-cols-2 lg:grid-cols-3 gap-[16px]'>
                <ProductItems productData={finalProduct} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
