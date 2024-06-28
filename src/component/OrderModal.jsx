import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../styles/OrderModal.css";

const OrderModal = ({ show, handleClose, orderDetails }) => {
  if (!orderDetails) {
    return null; // Don't render anything if orderDetails is null or undefined
  }

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Order Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="orderLine">
            <span className="orderTitle">Order ID:</span>
            <span className="orderInfo">{orderDetails.id}</span>
          </div>
          <table>
            <thead className="orderHeader">
              <tr key={orderDetails.id}>
                <th className>ID</th>
                <th className>Item</th>
                <th className>Quantity</th>
                <th className>Price</th>
              </tr>
            </thead>
            <tbody>
              {orderDetails.items.map((item, index) => (
                <tr key={item.id} className="orderItem">
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="orderPrice">
            <span className="orderTitle">Total Price:</span>
            <span className="orderInfo">${orderDetails.totalPrice}</span>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default OrderModal;
