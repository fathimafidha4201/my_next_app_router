export default function AboutPage() {
  return (
    <div>
      <div
        className="text-center text-white py-5"
        style={{
          background: "linear-gradient(to right, #000000, #1f2937)",
        }}
      >
        <h1 className="fw-bold">About Us</h1>
        <p className="mb-0">
          Learn more about who we are and what we offer
        </p>
      </div>

      <div className="container my-5">
        <div className="row align-items-center mb-5">

          <div className="col-md-6">
            <h2 className="fw-semibold mb-3">Who We Are</h2>
            <p className="text-muted">
              My Ecommerce is an online shopping platform committed to bringing
              quality products at affordable prices. We carefully select items
              across multiple categories to ensure value, reliability, and
              customer satisfaction.
            </p>
            <p className="text-muted">
              Our goal is to make online shopping simple, secure, and enjoyable
              for everyone.
            </p>
          </div>

          <div className="col-md-6 text-center">
            <img
              src="/about_us.jpg"
              alt="About"
              className="img-fluid rounded shadow-sm"
            />
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-6 mb-4">
            <div className="p-4 bg-white shadow-sm rounded">
              <h4 className="fw-semibold">Our Mission</h4>
              <p className="text-muted mb-0">
                To provide customers with high-quality products, competitive
                prices, and a seamless online shopping experience.
              </p>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="p-4 bg-white shadow-sm rounded">
              <h4 className="fw-semibold">Our Vision</h4>
              <p className="text-muted mb-0">
                To become a trusted e-commerce destination known for reliability,
                innovation, and excellent customer service.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mb-4">
          <h2 className="fw-semibold">Why Choose Us</h2>
        </div>

        <div className="row">

          <div className="col-md-4 mb-4">
            <div
              className="p-4 text-center text-white rounded shadow-sm"
              style={{
                background: "linear-gradient(to right, #2d3748, #1a202c)",
              }}
            >
              <h5 className="fw-bold">Quality Products</h5>
              <p className="mb-0">
                We source products that meet quality standards and customer expectations.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div
              className="p-4 text-center text-white rounded shadow-sm"
              style={{
                background: "linear-gradient(to right, #2d3748, #1a202c)",
              }}
            >
              <h5 className="fw-bold">Secure Payments</h5>
              <p className="mb-0">
                Your transactions are protected with trusted and secure payment methods.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div
              className="p-4 text-center text-white rounded shadow-sm"
              style={{
                background: "linear-gradient(to right, #2d3748, #1a202c)",
              }}
            >
              <h5 className="fw-bold">Customer Support</h5>
              <p className="mb-0">
                Our support team is always ready to assist you with queries and concerns.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}