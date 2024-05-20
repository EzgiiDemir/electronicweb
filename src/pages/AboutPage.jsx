import React, { useEffect } from "react";

function AboutPage() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="py-2 mb-2 ">
        <div className="container ">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="page-title pt-5">About Us</h1>
            </div>

          </div>
        </div>
      </section>
      <section className="company-detail py-4 ">
        <div className="container ">
          <div className="row">
            <div className="col-md-6">
              {/* <blockquote>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                cursus leo vel orci malesuada, id sodales em volutpat.
              </blockquote> */}
              <p>
              Welcome to Alemdar Teknik, your ultimate destination in Northern Cyprus for electronic, robotic, and technical solutions. From computer hardware and software to solar power systems, Arduino, Raspberry Pi, and advanced transistors, we provide a wide range of innovative technologies. Additionally, we offer solar panels, batteries, and other components for your renewable energy projects.

Whether you're an investor, a coding enthusiast, or in need of assistance with your lab projects or graduation thesis, Alemdar Teknik is here to support you every step of the way. We also provide shipping options to Cyprus, Turkey, and other countries, ensuring our products and expertise are accessible to all.
              </p>
              {/* <p>
                Praesent nec nisl euismod, lacinia tellus eget, bibendum ex.
                Maecenas imperdiet gravida pulvinar. aecenas feugiat id tellus
                sed sodales. Praesent maximus ultricies elit eget accumsan.
                Proin tortor ante, ltrices a aliquet a, facilisis quis sapien.
                Donec eu turpis at velit scelerisque faucibus id eget dolor.
                tiam lobortis ante ipsum, sed venenatis ligula facilisis quis.
                Fusce blandit commodo mauris, sed fringilla isi congue et. Nunc
                eu eros ex.
              </p> */}
            </div>
            <div className="col-md-6">
              <img
                src="/shutterstock_1401156971.jpg"
                alt=""
                className="img-fluid rounded"
              />
            </div>
          </div>
          <h2 className="mt-3 pt-5">Alemdar Teknik's Team </h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm mb-4">
                {/* <img
                  src="images/post-thumb-3.jpg"
                  alt="post"
                  className="card-img-top"
                /> */}
                <div className="card-body">
                  <h5 className="card-title">Ziya Alemdar</h5>
                  <p className="card-text">
                    Aeronautical Engineer <br /> CEO - Founder
                  </p>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquet eleifend viverra enim tincidunt donec quam. A in
                    arcu, hendrerit neque dolor morbi...
                  </p> */}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm mb-4">
                {/* <img
                  src="images/post-thumb-3.jpg"
                  alt="post"
                  className="card-img-top"
                /> */}
                <div className="card-body">
                  <h5 className="card-title">Tezcan Bereketbulur</h5>
                  <p className="card-text">
                    Electronic Engineer <br /> -
                  </p>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquet eleifend viverra enim tincidunt donec quam. A in
                    arcu, hendrerit neque dolor morbi...
                  </p> */}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm mb-4">
                {/* <img
                  src="images/post-thumb-3.jpg"
                  alt="post"
                  className="card-img-top"
                /> */}
                <div className="card-body">
                  <h5 className="card-title">Ezgi Demir</h5>
                  <p className="card-text">
                    Software Developer & Marketing <br /> -
                  </p>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquet eleifend viverra enim tincidunt donec quam. A in
                    arcu, hendrerit neque dolor morbi...
                  </p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm mb-4">
                {/* <img
                  src="images/post-thumb-3.jpg"
                  alt="post"
                  className="card-img-top"
                /> */}
                <div className="card-body">
                  <h5 className="card-title">Stive Gabin Ntepi</h5>
                  <p className="card-text">
                    Electronic Engineer<br /> -
                  </p>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquet eleifend viverra enim tincidunt donec quam. A in
                    arcu, hendrerit neque dolor morbi...
                  </p> */}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm mb-4">
                {/* <img
                  src="images/post-thumb-3.jpg"
                  alt="post"
                  className="card-img-top"
                /> */}
                <div className="card-body">
                  <h5 className="card-title">Josephine Kayiba</h5>
                  <p className="card-text">
                    Financial Accountant <br /> -
                  </p>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquet eleifend viverra enim tincidunt donec quam. A in
                    arcu, hendrerit neque dolor morbi...
                  </p> */}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm mb-4">
                {/* <img
                  src="images/post-thumb-3.jpg"
                  alt="post"
                  className="card-img-top"
                /> */}
                <div className="card-body">
                  <h5 className="card-title">Kevin Mbaz Mwen</h5>
                  <p className="card-text">
                    Electronic Engineer<br /> -
                  </p>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquet eleifend viverra enim tincidunt donec quam. A in
                    arcu, hendrerit neque dolor morbi...
                  </p> */}
                </div>
              </div>
            </div>
            {/* <div className="col-md-4">
              <div className="card border-0 shadow-sm mb-4">
                <img
                  src="images/post-thumb-3.jpg"
                  alt="post"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Ezgi Demir</h5>
                  <p className="card-text">
                    Software Developer <br /> CTO
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquet eleifend viverra enim tincidunt donec quam. A in
                    arcu, hendrerit neque dolor morbi...
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>

      </section>
      <section className="py-5 my-5 d-none">
        <div className="container">
          <div className="bg-warning py-5 rounded-5">
            <div className="row">
              {/* <div className="col-md-4">
                <img
                  src="images/phone.png"
                  alt="phone"
                  className="image-float img-fluid"
                />
              </div> */}
              <div className="col-md-8">
                <h2 className="my-5">Shop faster with foodmart App</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sagittis sed ptibus liberolectus nonet psryroin. Amet sed
                  lorem posuere sit iaculis amet, ac urna. Adipiscing fames
                  semper erat ac in suspendisse iaculis. Amet blandit tortor
                  praesent ante vitae. A, enim pretiummi senectus magna.
                  Sagittis sed ptibus liberolectus non et psryroin.
                </p>
                <div className="d-flex gap-2 flex-wrap">
                  <img src="images/app-store.jpg" alt="app-store" />
                  <img src="images/google-play.jpg" alt="google-play" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
