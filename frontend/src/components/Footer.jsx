import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container">
        {/* <!-- Footer --> */}
        <footer className="text-center text-lg-start bg-body-tertiary text-muted" >
          {/* <!-- Section: Links  -->  */}
          <section className="" style={{backgroundColor: "white"}}>
            <div className="container text-center text-md-start mt-5">
              {/* <!-- Grid row --> */}
              <div className="row mt-3">
                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* <!-- Content --> */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3"></i>100x Training
                  </h6>
                  <p>
                    100x Training is an institute which is helping students and professionals in upskilling. Our motto is not just get a job in any domian but to make sure our students achieve excellence. Get your slot booked now!
                  </p>
                </div>
                {/* <!-- Grid column -->

                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <i className="fas fa-home me-3"></i>
                    Pune, Maharashtra, India - 411039
                  </p>
                  <p>
                    <i className="fas fa-envelope me-3"></i>
                    shreyash@100xtraining.com
                  </p>
                  <p>
                    <i className="fas fa-phone me-3"></i> +918806516598
                  </p>
                </div>
                {/* <!-- Grid column --> */}
              </div>
              {/* <!-- Grid row --> */}
            </div>
          </section>
          {/* <!-- Section: Links  --> */}
        </footer>
        {/* <!-- Footer --> */}
      </div>
      {/* <!-- Copyright --> */}
      <div
        className="text-center p-4"
        //   style={"background-color: rgba(0, 0, 0, 0.05);"}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>© 2023 Copyright:</p>
        <p className="text-reset fw-bold mx-2" href="https://mdbootstrap.com/">
          100x Training
        </p>
      </div>
      {/* <!-- Copyright --> */}
    </>
  );
};

export default Footer;
