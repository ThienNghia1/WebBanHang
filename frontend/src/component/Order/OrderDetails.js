import React, { Fragment, useEffect } from "react";
import "./orderDetails.css";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { getOrderDetails, clearErrors } from "../../actions/orderAction";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
const VND = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
});
const OrderDetails = ({ match }) => {
  const { order, error, loading } = useSelector((state) => state.orderDetails);

  const dispatch = useDispatch();
  const alert = useAlert();

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getOrderDetails(match.params.id));
  }, [dispatch, alert, error, match.params.id]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Order Details" />
          <div className="orderDetailsPage">
            <div className="orderDetailsContainer">
              <Typography>Thông tin vận chuyển</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p>Tên:</p>
                  <span>{order.user && order.user.name}</span>
                </div>
                <div>
                  <p>Điện thoại:</p>
                  <span>
                    {order.shippingInfo && order.shippingInfo.phoneNo}
                  </span>
                </div>
                <div>
                  <p>Địa chỉ:</p>
                  <span>
                    {order.shippingInfo &&
                      `${order.shippingInfo.address}, ${order.shippingInfo.city},${order.shippingInfo.state}, ${order.shippingInfo.country}`}
                  </span>
                </div>
              </div>
              <div class="JNf2c8">
                <div class="r3nkAD"></div>
              </div>
              <Typography>Thông tin đơn hàng</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p
                    className={
                      order.paymentInfo &&
                      order.paymentInfo.status === "succeeded"
                        ? "greenColor"
                        : "redColor"
                    }
                  >
                    {order.paymentInfo &&
                    order.paymentInfo.status === "succeeded"
                      ? "Đã thanh toán"
                      : "Chưa thanh toán"}
                  </p>
                </div>
                <p>Id đơn hàng : #{order && order._id}</p>
                <p>Ngày đặt đơn : {String(order.createdAt).substr(0, 10)}</p>
                <p>Trạng thái đơn hàng : </p>
                  <p
                    className={
                      order.orderStatus && order.orderStatus === "Delivered"
                        ? "greenColor"
                        : "redColor"
                    }
                  >
                    {order.orderStatus && order.orderStatus}
                  </p>
             
         
              </div>
              <div class="JNf2c8">
                <div class="r3nkAD"></div>
              </div>
             
            </div>

            <div className="orderDetailsCartItems">
              <Typography>Sản phẩm đã đặt:</Typography>
              <div className="orderDetailsCartItemsContainer">
                {order.orderItems &&
                  order.orderItems.map((item) => (
                    <div key={item.product}>
                      <img src={item.image} alt="Product" />
                      <Link to={`/product/${item.product}`}>
                        {item.name}
                      </Link>{" "}
                      <span>
                        {item.quantity} X {VND.format(item.price)} ={" "}
                        <b>{VND.format(item.price * item.quantity)}</b>
                      </span>
                    </div>
                  ))}
              </div>
              <div class="Payment">
                <div class="QZ4vFF">
                  <div class="MqHNeD">
                    <div class="vXeTuK">
                      <span>Tổng tiền hàng</span>
                    </div>
                    <div class="_30Hj4X">
                      <div>{VND.format(order.itemsPrice && order.itemsPrice)}</div>
                    </div>
                  </div>
                  <div class="MqHNeD">
                    <div class="vXeTuK">
                      <span>Phí vận chuyển</span>
                    </div>
                    <div class="_30Hj4X">
                      <div>{VND.format(order.shippingPrice && order.shippingPrice)}</div>
                    </div>
                  </div>
                  <div class="MqHNeD fF6WqS">
                    <div class="vXeTuK _4I0y7U">
                      <span>Thành tiền</span>
                    </div>
                    <div class="_30Hj4X">
                      <div class="fqySNq">
                        {VND.format(order.totalPrice && order.totalPrice)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default OrderDetails;
