import { getProductById } from "../../services/productServices";
import ProductDetailClient from "./ProductDetailClient";

export default async function ProductDetail(props: any) {
  const resolvedParams = await props.params;
  const product = await getProductById(resolvedParams.id);

  return <ProductDetailClient product={product} />;
}