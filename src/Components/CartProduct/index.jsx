import styles from "./style.module.css";

const CartProduct = ({ product, removeCart }) => {
  return (
    <li className={styles.cartLi}>
      <img src={product.img} alt={product.name} />
      <div>
        <h3>{product.name}</h3>
        <span>{product.category}</span>
      </div>
      <div className={styles.removeProductCart}>
        <button onClick={() => removeCart(product)}>Remover</button>
        <span>{product.value}</span>
      </div>
    </li>
  );
};

export default CartProduct;
