import "./App.css";
import "./Css/Reset.css";
import "./Css/Button.css";

import { useState, useEffect } from "react";
import { api } from "./Libs/Axios";
import ProductsList from "./Components/ProductsList";
import Cart from "./Components/Cart";

function App() {
  const [products, setProducts] = useState([]);

  const [currentSale, setCurrentSale] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState("");

  const showProducts = products.filter((product) =>
    filteredProducts === "" ? true : product.category === filteredProducts
  );

  const total = currentSale.map((product) => {
    if (product.value > 1) {
      return product.price * product.value;
    } else {
      return product.value;
    }
  });

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await api.get();
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  const handleClick = (productId) => {
    const car = currentSale.find(({ id }) => id === productId.id);
    console.log(car);
    if (car !== undefined) {
      currentSale.map((product) => {
        if (product.id === productId.id) {
          //return console.log({ ...product /*, novo: product + 1 */ });
          product.value = product.value + 1;

          return currentSale;
        } else {
          return product;
        }
      });
    } else {
      return setCurrentSale([...currentSale, productId]);
    }
    //return currentSale;
  };

  function removeCart(remove) {
    if (remove.value === 1) {
      const newCart = currentSale.filter(
        (product) => product.name !== remove.name
      );
      setCurrentSale(newCart);
    } else {
      currentSale.map((product) => {
        if (product.id === remove.id) {
          //return console.log({ ...product /*, novo: product + 1 */ });
          return (product.value = product.value - 1);
        } else {
          return product;
        }
      });
      //setCurrentSale(newcart2);
    }
  }

  function removeAll() {
    setCurrentSale([]);
  }

  //function total() {}
  console.log(currentSale);

  return (
    <div className="App">
      <ProductsList
        products={showProducts}
        setFilteredProducts={setFilteredProducts}
        handleClick={handleClick}
      />
      <Cart
        currentSale={currentSale}
        removeCart={removeCart}
        removeAll={removeAll}
        total={total}
      />
    </div>
  );
}

export default App;
