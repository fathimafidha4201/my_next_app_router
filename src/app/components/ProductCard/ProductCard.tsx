import Link from "next/link";

export default function ProductCard(props: any) {
  const product = props.product;

  return (
    <Link
      href={`/products/${product.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        className="card h-100 text-center"
        style={{
          borderRadius: "16px",
          border: "1px solid #e5e7eb",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
          cursor: "pointer",
          transition: "0.3s ease",
        }}
      >
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            height: "250px",
            backgroundColor: "#f8f9fa",
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
          }}
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            className="img-fluid"
            style={{
              maxHeight: "200px",
              objectFit: "contain",
            }}
          />
        </div>

        <div className="card-body">
          <h6 className="mb-3">
            {product.title.length > 35
              ? product.title.substring(0, 35) + "..."
              : product.title}
          </h6>

          <p className="fw-bold fs-5 mb-0">
            $ {product.price}
          </p>
        </div>
      </div>
    </Link>
  );
}