import React from "react";
import "./CartItemCard.css";
import { Link } from "react-router-dom";
const VND = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
});

const CartItemCard = ({ item, deleteCartItems }) => {
  return (
    <div className="CartItemCard">
      <img src={item.image} alt="ssa" />
      <div>
        <Link to={`/product/${item.product}`}>{item.name}</Link>
        <span>{`Giá: ${VND.format(item.price)}`}</span>
        <p onClick={() => deleteCartItems(item.product)}>Xóa</p>
      </div>
    </div>
  );
};

export default CartItemCard;
