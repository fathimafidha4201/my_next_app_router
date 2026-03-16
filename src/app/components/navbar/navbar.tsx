"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "../../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  const cartCount = cart.reduce(
    (sum: number, item: any) => sum + item.quantity,
    0
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link
        className="navbar-brand d-flex align-items-center"
        href="/"
        prefetch={true}   
      >
        My Ecommerce
      </Link>

      <div className="navbar-collapse">
        <ul className="navbar-nav ms-auto align-items-center">

          <li className="nav-item">
            <Link className="nav-link" href="/" prefetch={true}>
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" href="/products" prefetch={true}>
              Products
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" href="/about" prefetch={true}>
              About Us
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" href="/contact" prefetch={true}>
              Contact Us
            </Link>
          </li>
          <li className="nav-item ms-4 position-relative">
            <Link
              href="/cart"
              className="position-relative d-inline-block"
              prefetch={true}
            >
              <Image
                src="/cart-icon.png"
                alt="Cart"
                width={35}
                height={35}
              />
              {cartCount >= 0 && (
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{
                    fontSize: "11px",
                    padding: "4px 6px"
                  }}
                >
                  {cartCount}
                </span>
              )}

            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}