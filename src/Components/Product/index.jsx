import styles from "./style.module.css";

const Product = ({ product, handleClick }) => {
  return (
    <li className={styles.mainProduct}>
      <img src={product.img} alt={product.name} />
      <div>
        <h3>{product.name}</h3>
        <p>{product.category}</p>
        <span>R$: {product.price.toFixed([2])}</span>
        <button onClick={() => handleClick(product)} type="button">
          Adicionar
        </button>
      </div>
    </li>
  );
};

export default Product;
