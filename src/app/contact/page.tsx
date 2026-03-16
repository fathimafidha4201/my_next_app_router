export default function ContactPage() {
  return (
    <div className="container my-5">
      <div className="row g-4">
        <div className="col-md-6">
          <div className="p-5 bg-white shadow-sm rounded-4 h-100">
            <h2 className="fw-semibold mb-4">Get in Touch</h2>

            <p className="text-muted">
              Have questions or need support? Reach out to us using
              the details below.
            </p>

            <hr />

            <div className="mt-4">
              <p>
                <strong>Email:</strong><br />
                support@myecommerce.com
              </p>

              <p>
                <strong>Phone:</strong><br />
                +91 1234567890
              </p>

              <p>
                <strong>Address:</strong><br />
                My Ecommerce Pvt Ltd <br />
                Kerala, India
              </p>
            </div>

            <p className="text-muted mt-4">
              Support available Monday – Saturday, 9 AM – 6 PM
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div
            className="p-5 rounded-4 text-white shadow"
            style={{
              background: "linear-gradient(to bottom, #111111, #000000)",
            }}
          >
            <h2 className="fw-semibold mb-4 text-center">
              Send Us a Message
            </h2>

            <form>
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-4">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  rows={4}
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-light px-5 py-2 fw-semibold"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}