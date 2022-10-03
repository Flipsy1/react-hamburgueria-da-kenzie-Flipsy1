import CartProduct from "../CartProduct";
import styles from "./style.module.css";

const Cart = ({ currentSale, removeCart, removeAll, total }) => {
  console.log(currentSale);
  console.log(total);

  if (currentSale.length) {
    return (
      <section className={styles.mainAside}>
        <div className={styles.mainAsideDiv}>
          <h2>Carrinho de compras</h2>
        </div>
        <ul>
          {currentSale.map((product) => (
            <CartProduct
              key={product.id}
              product={product}
              removeCart={removeCart}
            />
          ))}
        </ul>
        <div className={styles.totalPrice}>
          <h3>Total</h3>
          <span>R$: {total.reduce((prev, atual) => atual + prev, 0)}</span>
        </div>
        <button className={styles.removeAll} type="button" onClick={removeAll}>
          Remover todos
        </button>
      </section>
    );
  } else {
    return (
      <section className={styles.mainAside}>
        <div className={styles.mainAsideDiv}>
          <h2>Carrinho de compras</h2>
        </div>
        <h3>Sua sacola está vazia</h3>
        <span>Adicione itens</span>
      </section>
    );
  }
};

export default Cart;
