import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterLab = () => {
  // Kullanıcının girdiği bilgileri tutmak için state'leri tanımlayalım
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [fullName, setFullName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  // Form gönderildiğinde yapılacak işlemleri belirleyen fonksiyon
  const handleSubmit = (e) => {
    e.preventDefault();
    // Burada kayıt işlemlerini yapabilirsiniz
    console.log('Name:', name);
    console.log('Surname:', surname);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Date of Birth:', dateOfBirth);
    console.log('Gender:', gender);
    console.log('Payment Method:', paymentMethod);
    if (paymentMethod === 'online') {
      console.log('Card Number:', cardNumber);
      console.log('Expiry Date:', expiryDate);
      console.log('CVV:', cvv);
      console.log('Full Name:', fullName);
      console.log('Payment of 4000 TL has been made to the following IBAN:');
      console.log('TRXXXXXXXXXXXXXXXXXXXXXXX'); // Burada IBAN bilgisi olmalı
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>Register to Lab</h2>
          <form onSubmit={handleSubmit}>
            <div className="my-2">
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <div className="my-2">
              <label>Surname:</label>
              <input
                type="text"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <div className="my-2">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <div className="my-2">
              <label>Phone:</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <div className="my-2">
              <label>Date of Birth:</label>
              <input
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <div className="my-2">
              <label>Gender:</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="form-control"
                required
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="my-2">
              <label>Choose Payment:</label>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="form-control"
                required
              >
                <option value="">Select payment method</option>
                <option value="faceToFace">Face to Face</option>
                <option value="online">Online</option>
              </select>
            </div>
            {paymentMethod === 'online' && (
              <div>
                <div className="my-2">
                  <label>Full Name:</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="my-2">
                  <label>Card Number:</label>
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="my-2">
                  <label>Expiry Date:</label>
                  <input
                    type="text"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="my-2">
                  <label>CVV:</label>
                  <input
                    type="text"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
              </div>
            )}
            <button type="submit" className="btn btn-primary my-2">Register</button>
          </form>
        </div>
        <div className="col-md-6">
          <img src="codingcareer.png" alt="" className="img-fluid rounded" />
        </div>
      </div>
    </div>
  );
};

export default RegisterLab;
