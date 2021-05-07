import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';


export default function ShippingAddressScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);

  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

//SIGN IN
  if (!userInfo) {
    props.history.push('/signin');
  }

  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [courriel, setCourriel] = useState(shippingAddress.courriel);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const [province, setProvince] = useState(shippingAddress.province);
  

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    let moveOn = true;
    if (moveOn) {
      dispatch(
        saveShippingAddress({
          fullName,
          courriel,
          address,
          city,
          postalCode,
          province,
          country,
        })
      );
      props.history.push('/payment');
    }
  };

  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Contact</h1>
        </div>
        <div>
          <label htmlFor="fullName"></label>
          <input
            type="text"
            id="fullName"
            placeholder="Nom Complet"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            ></input>
        </div>
        <div>
          <label htmlFor="courriel"></label>
          <input
            type="email"
            id="courriel"
            placeholder="Adresse Courriel"
            value={courriel}
            onChange={(e) => setCourriel(e.target.value)}
            required
            ></input>
        </div>
            <div>
              <h1>Adresse De Livraison</h1>
            </div>
        <div>
          <label htmlFor="address"></label>
          <input
            type="text"
            id="address"
            placeholder="Adresse"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="city"></label>
          <input
            type="text"
            id="city"
            placeholder="Ville"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="postalCode"></label>
          <input
            type="text"
            id="postalCode"
            placeholder="Code Postal"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="province"></label>
          <select id="province" 
            required
            onChange={(e) => setProvince(e.target.value)}>
              <option value="" disabled selected >Province</option>
              <option>AB</option>
              <option>BC</option>
              <option>PE</option>
              <option>MB</option>
              <option>NB</option>
              <option>NS</option>
              <option>ON</option>
              <option>QC</option>
              <option>SK</option>
              <option>NL</option>
              <option>YT</option>
              <option>NT</option>
              <option>NU</option>
                </select>
        </div>
        <div>
          <label htmlFor="country"></label>
          <select id="country" 
            required
            onChange={(e) => setCountry(e.target.value)}>
              <option value="" disabled selected >Pays</option>
              <option>Canada</option>
          </select>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}