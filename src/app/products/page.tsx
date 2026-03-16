import { getAllProducts } from "../services/productServices";
import ProductCard from "../components/ProductCard/ProductCard";
import Link from "next/link";
// Import your Product interface to fix the 'unknown' type error
import { Product } from "../services/productServices"; 

interface PageProps {
  searchParams: Promise<{ filter?: string }>;
}

export default async function ProductsPage({ searchParams }: PageProps) {
  const products: Product[] = await getAllProducts();
  const { filter } = await searchParams;
  let filteredProducts: Product[] = products;

  if (filter === "expensive") {
    filteredProducts = products.filter((p) => p.price > 100);
  }

  if (filter === "cheap") {
    filteredProducts = products.filter((p) => p.price <= 100);
  }

  return (
    <div className="container my-5">
      <h1 className="text-center fw-semibold mb-4 text-dark">
        Our Products
      </h1>
      <div className="d-flex justify-content-center gap-3 mb-5 flex-wrap">
        <Link
          href="/products"
          className={`btn rounded-pill px-4 ${!filter ? "btn-dark" : "btn-outline-dark"}`}
        >
          All
        </Link>

        <Link
          href="/products?filter=cheap"
          className={`btn rounded-pill px-4 ${filter === "cheap" ? "btn-dark" : "btn-outline-dark"}`}
        >
          Cheap (&lt; $100)
        </Link>

        <Link
          href="/products?filter=expensive"
          className={`btn rounded-pill px-4 ${filter === "expensive" ? "btn-dark" : "btn-outline-dark"}`}
        >
          Expensive (&gt; $100)
        </Link>
      </div>

      <div className="row g-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-lg-3">
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <div className="text-center py-5">
            <p className="text-muted">No products found matching this filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}