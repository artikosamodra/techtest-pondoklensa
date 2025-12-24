import Title from "@/components/atoms/Title";
import ProductList from "@/components/organisms/ProductList";
import Container from "@/components/utils/Container";

export default function Home() {
  return (
    <Container sectionClass="bg-white py-20">
      <Title title={"Produk Pondok Lensa"} />
      <ProductList />
    </Container>
  );
}
