export default function OffersSection() {
  return (
    <div className="container my-5">
      <h2 className="mb-4 fw-semibold text-light">Today's Offers</h2>

      <div className="row">
  
        <div className="col-md-4 mb-4">
          <div
            className="p-4 text-center h-100 text-primary"
            style={{
              borderRadius: "12px",
              backgroundColor: "#f8f9fa",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            <h4 className="fw-bold mb-3">Special Discount</h4>
            <p className="mb-0">
              Get 20% off on your first purchase!
            </p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div
            className="p-4 text-center h-100 text-success"
            style={{
              borderRadius: "12px",
              backgroundColor: "#f8f9fa",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            <h4 className="fw-bold mb-3">Free Shipping</h4>
            <p className="mb-0">
              Enjoy free shipping on orders over $50.
            </p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div
            className="p-4 text-center h-100 text-danger"
            style={{
              borderRadius: "12px",
              backgroundColor: "#f8f9fa",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            <h4 className="fw-bold mb-3">Buy One Get One</h4>
            <p className="mb-0">
              Buy one item and get another one for free!
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}