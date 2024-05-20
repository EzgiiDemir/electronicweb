import React from 'react';
import { Link } from 'react-router-dom';

const InfoPage = () => {
  return (
    <div className='container-fluid px-5 col-md-10 '>
      <h1 className='my-4 text-primary'>Coding Lab</h1>
      <p>
        Welcome to Alemdar Teknik LAB located in North Cyprus, where innovation meets execution. At Alemdar Teknik LAB, we are pioneers in the realm of technology, dedicated to pushing the boundaries of what's possible and transforming ideas into reality. Our lab serves as a good place for creativity, bringing together diverse minds from various disciplines to collaborate, teach, experiment, and create solutions to some of the world's most pressing challenges. From artificial intelligence to biotechnology, Iot to renewable energy, our multidisciplinary approach allows us to explore the intersections of different fields, unlocking new opportunities and driving meaningful change.
      </p>
      <p>
        Driven by a passion for discovery and a commitment to excellence, our team of researchers, engineers, designers, and visionaries is at the forefront of technological innovation. We thrive on curiosity, embracing the unknown and turning it into opportunity. Through experimentation and iteration, we strive not only to solve problems but to anticipate them, shaping the future of technology and leaving a lasting impact on society.
      </p>
      <p>
        But innovation is only part of our story. At Alemdar Teknik LAB, we believe in the power of collaboration and community. We actively engage with academic institutions and startups to boost an ecosystem of innovation, where ideas can flourish and partnerships can thrive. Together, we are stronger, and together, we can achieve more than we ever thought possible.
      </p>
      <p>
        Whether you're a student or a seasoned expert or a curious newcomer, we invite you to join us on this journey of discovery. Together, let's explore the possibilities, challenge the status quo, and build a future that's brighter, smarter, and more inclusive for all.
      </p>
      <p>
        Welcome to Alemdar Teknik LAB, where the future begins today.
      </p>



      <h2>Material Available in Lab</h2>
      <ul>
        <li>Computers</li>
        <li>Function generator</li>
        <li>AC voltage supply</li>
        <li>DC voltage supply</li>
        <li>3D printers</li>
        <li>CNC machine</li>
        <li>Robots (Drones, RC car, …)</li>
        <li>Microcontroller and microprocessor</li>
        <li>Work stations</li>
      </ul>

      <h2>Lab Usage Cost</h2>
      <ul>
        <li>For a project that needs assistance, we charge 10 USD per hour.</li>
        <li>For a project that has to be done by one of our engineers, the price will depend on the task that has to be done.</li>
        <li>For 3D printing, the cost is 5 USD per hour for a print that will take less than 8 hours, 4 USD between 9 and 20 hours, and 2 USD for more than 20 hours.</li>
        <li>
For school, the student should pay 4000 TL for a month of learning (electronic and embedded system programming). This cost can change if the student comes in a group. You can join this text whenever you want, you choose the date and time. Your weekly limit is two lessons, and you pay 4000 TL per month for electronic and programming. We also provide support for graduation projects or incomplete projects, except for robotic lab.</li>
      </ul>
      <div className='my-3 text-center'><a href="/register" target="_blank" rel="noopener noreferrer">
        <button className='btn btn-primary text-uppercase'>Register to lab</button>
      </a></div>
      <div className='row my-5'>
        <div className='col-md-6'>

          <p>Address: Polis Sk, Lefkoşa, TRNC</p>
          <p>Phone: +90 542 877 20 05</p>
          <p>WhatsApp: +90 542 877 20 05</p>
          <p>Email: ziya@alemdarteknik.com</p>
        </div>
        <div className='col-md-6'>
          <div className='map'>
            <iframe
              title='Alemdar Teknik LAB Location'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10730.842103917715!2d33.36582045060694!3d35.18206636743111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6c1a04df273e5d08!2sAlemdar%20Teknik%20LAB!5e0!3m2!1sen!2str!4v1620670159722!5m2!1sen!2str'
              width='100%'
              height='250'
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoPage;
