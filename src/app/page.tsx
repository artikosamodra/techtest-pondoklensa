import ProductList from "@/components/organisms/ProductList";
import Container from "@/components/utils/Container";

export default function Home() {
  return (
    <Container sectionClass="bg-white">
      <div>Main Page</div>

      <ProductList />
    </Container>
  );
}
