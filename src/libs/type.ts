export type ProductImage = {
  id: string;
  image: string;
};


// export type ProductImage = {
//   id: string;
//   image: string;
//   product_id?: string;
//   order?: number;
//   created_at?: string;
//   updated_at?: string;
// };

export type ProductType = {
  id: string;
  name: string;
  price: number;
  slug: string;
  images: ProductImage[];
  manufacturer?: {
    id?: string;
    name: string; // Pastikan ini ada
    slug?: string;
  };
  default_package?: {
    id: string;
    name: string;
    components: {
      id: string;
      product: {
        name: string;
        image: {
          image: string;
        };
      };
    }[];
  };
};