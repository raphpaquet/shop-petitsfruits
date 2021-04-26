import React from 'react'

export default function CheckoutSteps(props) {
  return (
    <div className="checkout-steps">
      <div className={props.step1 ? 'active' : ''}>Connexion</div>
      <i className="fa fa-caret-right" />
      <div className={props.step2 ? 'active' : ''}>Livraison</div>
      <i className="fa fa-caret-right" />
      <div className={props.step3 ? 'active' : ''}>Paiement</div>
      <i className="fa fa-caret-right" />
      <div className={props.step4 ? 'active' : ''}>Placer la Commande</div>
    </div>
  );
}
