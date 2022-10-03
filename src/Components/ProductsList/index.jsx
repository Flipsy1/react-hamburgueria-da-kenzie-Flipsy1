import { useState } from "react";
import Product from "../Product";
import Titulo from "../../Assets/Img/Mask-Group.png";
import styles from "./style.module.css";

const ProductsList = ({ products, setFilteredProducts, handleClick }) => {
  const [search, setSearch] = useState("");

  console.log(products);

  function handleSearch(event) {
    event.preventDefault();
    setFilteredProducts(search);
  }

  const newProducts = products.map((product) => ({ ...product, value: 1 }));
  //console.log(newProducts);

  return (
    <>
      <div className={styles.header}>
        <img src={Titulo} alt="Burguer-Kenzie" />

        <form onSubmit={handleSearch}>
          <input
            type="text"
            onChange={(event) => setSearch(event.target.value)}
          />
          <button type="submit">Pesquisar</button>
        </form>
      </div>
      <main className={styles.mainProducts}>
        <ul>
          {newProducts.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleClick={handleClick}
            />
          ))}
        </ul>
      </main>
    </>
  );
};

export default ProductsList;
