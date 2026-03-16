import { getAllProducts } from "../../services/productServices";
import ProductCard from '../ProductCard/ProductCard'
export default async function FeaturedProducts() {
  try {
    const products = await getAllProducts();

    if (!Array.isArray(products) || products.length === 0) {
      return (
        <div className="container my-5 text-center">
          <h2 className="mb-4 fw-semibold">Featured Products</h2>
          <p>No products available at the moment.</p>
        </div>
      );
    }

    const featured = products.slice(0, 3); 

    return (
      <div className="container my-5">
        <h2 className="mb-4 fw-semibold">Featured Products</h2>

        <div className="row g-4">
          {featured.map((product: any) => (
            <div key={product.id} className="col-12 col-md-6 col-lg-4">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error loading featured products:", error);
    return (
      <div className="container my-5">
        <h2 className="mb-4 fw-semibold">Featured Products</h2>
        <p className="text-danger">
          Failed to load featured products. Please try again later.
        </p>
      </div>
    );
  }
}