import ProductDetail from "@/components/organisms/ProductDetail";
import Container from "@/components/utils/Container";
import { products } from "@/libs/data/products";
import { notFound } from "next/navigation";
import React from "react";

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <Container containerClass="w-full h-full flex flex-col items-center justify-center">
      <h1>Product Detail</h1>
      <ProductDetail product={product} />
    </Container>
  );
}
