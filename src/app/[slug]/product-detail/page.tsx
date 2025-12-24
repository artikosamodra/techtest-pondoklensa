import Title from "@/components/atoms/Title";
import ProductDetail from "@/components/organisms/ProductDetail";
import Container from "@/components/utils/Container";
import { products } from "@/libs/data/products";
import { notFound } from "next/navigation";
import React from "react";

export type ProductDetailPageProps = {
  params: Promise<{ slug: string }>;
};

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
      <Title title={"Produk Detail"} />
      <ProductDetail product={product as any} />
    </Container>
  );
}
