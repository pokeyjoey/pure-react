import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

function CreditCardGood({ card }) {
  var {name, cardNumber, expirationDate, bankName} = card;
  return(
    <div className="credit-card">
      <div className="bank-name">{bankName}</div>
      <div className="card-number">{cardNumber}</div>
      <div className="first-four-digits">{cardNumber.substring(0, 4)}</div>
      <div className="expiration">
        <span className="valid-thru">Valid Thru</span> {expirationDate}
      </div>
      <div className="name">{name}</div>
    </div>
  );
}

function CreditCard({ card }) {
  var {name, cardNumber, expirationDate, bankName} = card;
  return(
    <div>
      <div>{bankName}</div>
      <div>{cardNumber}</div>
      <div> valid thru {expirationDate}</div>
      <div>{name}</div>
    </div>
  );
}

CreditCard.propTypes = {
  card: PropTypes.shape({
    bankName: PropTypes.string.isRequired,
    cardNumber: PropTypes.string.isRequired,
    expirationDate: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

var cardInfo = {
  bankName: "Big Bank, Inc.",
  cardNumber: "1234 5678 8765 4321",
  expirationDate: "08/19",
  name: "Cardholder Name"
};

ReactDOM.render(
  <CreditCard card={cardInfo}/>,
  document.getElementById('root')
);
