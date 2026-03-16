"use client";

import { useCart } from "../../context/CartContext";
import { useRouter } from "next/navigation";

export default function ProductDetailClient({ product }: any) {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = () => {
    addToCart(product);
    router.push("/cart");
  };

  return (
    <div className="container my-5">
      <div className="card border-0 shadow-sm rounded-4 p-4">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="bg-light rounded-4 d-flex justify-content-center align-items-center p-5">
              <img
                src={product.images?.[0] || product.thumbnail}
                alt={product.title}
                className="img-fluid"
                style={{ maxHeight: "420px", objectFit: "contain" }}
              />
            </div>
          </div>
          <div className="col-md-6">
            <h1 className="fw-semibold mb-3">
              {product.title}
            </h1>

            <h2 className="text-success fw-bold mb-3">
              $ {product.price}
            </h2>

            <p className="text-muted mb-3">
              ⭐ {product.rating} | Category: {product.category}
            </p>

            <p className="text-secondary">
              {product.description}
            </p>

            <div className="mt-4 d-flex gap-3">
              <button className="btn btn-warning px-4 py-2 fw-semibold">
                Buy Now
              </button>

              <button
                className="btn btn-outline-dark px-4 py-2 fw-semibold"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}