import FormBooking from "@/components/organisms/FormBooking";
import ProductDetail from "@/components/organisms/ProductDetail";
import Container from "@/components/utils/Container";
import React from "react";
import { ProductDetailPageProps } from "../product-detail/page";
import { products } from "@/libs/data/products";
import { notFound } from "next/navigation";
import BookingDetail from "@/components/organisms/FormBooking";

export default async function ProductBookingPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }
  return (
    <Container>
      <h1>Book Now</h1>
      {/* <FormBooking />
      <BookingDetail /> */}
      {/* <ProductDetail product={product} /> */}
    </Container>
  );
}
