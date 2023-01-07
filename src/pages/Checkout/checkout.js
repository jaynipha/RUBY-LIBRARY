import React from "react";
import {  useLocation } from "react-router-dom";
import visa from "../../assets/images/visa.png";
import paypal from "../../assets/images/paypal.png";
import bitcoin from "../../assets/images/bitcoin.png";
import address from "../../assets/svg/Address.svg";
import cards from "../../assets/svg/Bank Cards.svg";
import buy from "../../assets/svg/Buy.svg";
import order from "../../assets/svg/Purchase Order.svg";
import photo from "../../assets/images/Welcome.png";
import "./checkout.scss";
import { PaymentInputsWrapper, usePaymentInputs } from "react-payment-inputs";
import images from "react-payment-inputs/images";
import { FieldSet, InputField } from "fannypack";

const Checkout = () => {
  const location = useLocation()

  console.log(location)
  const {
    meta,
    getCardNumberProps,
    getExpiryDateProps,
    wrapperProps,
    getCardImageProps,
    getCVCProps,
  } = usePaymentInputs();
  const { erroredInputs, touchedInputs } = meta;

  return (
    <div className="checkout-container">
      <div className="left-section">
        <div className="ls-header">
          <div className="icon-box">
            <img src={buy} alt="" />
            <small className="active"> Shopping Cart</small>
          </div>
          <div className="line"></div>
          <div className="icon-box">
            <img src={address} alt="" />
            <small> Delivery Address</small>
          </div>
          <div className="line"></div>
          <div className="icon-box">
            <img src={cards} alt="" />
            <small> Payment Method</small>
          </div>
          <div className="line"></div>
          <div className="icon-box">
            <img src={order} alt="" />
            <small> Preview Order</small>
          </div>
        </div>

        <div className="py-method">
          <div className="py-types">
            <h5> Payment Method </h5>
            <img src={visa} alt="" />
            <img src={paypal} alt="" />
            <img src={bitcoin} alt="" />
          </div>

          <div className="py-form-card">
          <div className="py-template">
            <div className="card-svg">
              <InputField
                // Here is where React Payment Inputs injects itself into the input element.
                {...getCardNumberProps()}
                placeholder="0000 0000 0000 0000"
                label="Card number"
                inputRef={getCardNumberProps().ref}
                // You can retrieve error state by making use of the error & touched attributes in `meta`.
                state={
                  erroredInputs.cardNumber && touchedInputs.cardNumber
                    ? "danger"
                    : undefined
                }
                validationText={
                  touchedInputs.cardNumber && erroredInputs.cardNumber
                }
              />
              <svg {...getCardImageProps({ images })} />
            </div>

            <div className="isHorizontal">
              <InputField
                {...getExpiryDateProps()}
                label="Expiry date"
                inputRef={getExpiryDateProps().ref}
                state={
                  erroredInputs.expiryDate && touchedInputs.expiryDate
                    ? "danger"
                    : undefined
                }
                validationText={
                  touchedInputs.expiryDate && erroredInputs.expiryDate
                }
                width="45%"
              />
              <InputField
                {...getCVCProps()}
                placeholder="123"
                label="CVC"
                inputRef={getCVCProps().ref}
                state={
                  erroredInputs.cvc && touchedInputs.cvc ? "danger" : undefined
                }
                validationText={touchedInputs.cvc && erroredInputs.cvc}
                width="45%"
              />
            </div>
            <InputField
              placeholder="John Smith"
              label="Card Holder Name"
              // You can retrieve error state by making use of the error & touched attributes in `meta`.
              // state={
              //   erroredInputs.cardNumber && touchedInputs.cardNumber
              //     ? "danger"
              //     : undefined
              // }
              // validationText={
              //   touchedInputs.cardNumber && erroredInputs.cardNumber
              // }
            />
          </div>

          <button className="btn-submit"> Confirm Payment  </button>
          </div>
     
        </div>
      </div>

      <div className="right-section">
        <div className="purchase-book">
          <img src={location?.state?.extraLarge || location?.state?.thumbnail} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
