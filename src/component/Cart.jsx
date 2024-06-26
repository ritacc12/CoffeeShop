import "../styles/Cart.css";
export default function Cart({ items, onUpdateItemQuantity }) {
  //const { items, updateItemQuantity } = useContext(CartContext);

  //   const totalPrice = items.reduce(
  //     (acc, item) => acc + item.price * item.quantity,
  //     0
  //   );
  // 1. 使用map生成每個商品的總價數組

  const itemTotals = items.map((item) => item.price * item.quantity);

  // 2. 使用reduce計算總和
  const totalPrice = itemTotals.reduce((acc, itemTotal) => acc + itemTotal, 0);

  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div id="cart">
      {items.length === 0 && <p className="cartList">No items in cart!</p>}
      {items.length > 0 && (
        <ul className="cart-items">
          {items.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id} className="cartList">
                <div>
                  <span className="ItemTitle">{item.title}</span>
                  <span className="ItemPrice"> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button
                    className="CartBtn"
                    onClick={() => onUpdateItemQuantity(item.id, -1)}
                  >
                    -
                  </button>
                  <span className="ItemQuantity">{item.quantity}</span>
                  <button
                    className="CartBtn"
                    onClick={() => onUpdateItemQuantity(item.id, 1)}
                  >
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p className="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
