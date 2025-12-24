// import React from "react";
// import Carousel from "../molecules/Carousel";
// import InfoProduct, { DetailCardProps } from "../molecules/InfoProduct";
// import Package from "../molecules/Package";
// import Image from "next/image";

// const ProductDetail = ({ product }: DetailCardProps) => {
//   return (
//     <div className="w-fit h-full">
//       <div className="grid grid-cols-2 gap-8 border p-10 w-full h-full max-w-5xl relative">
//         {/* <Image
//           src={
//             product.image
//               ? `/images/products/${product.image}`
//               : "/images/products/_default.jpg"
//           }
//           alt={`Thumbnail`}
//           fill
//           className="object-cover"
//           unoptimized
//         /> */}

//         {/* <InfoProduct
//           name={product.name}
//           manufacturer={product.manufacturer?.name}
//           price={product.price}
//           slug={product.slug}
//         /> */}
//       </div>

//       <div className="py-10">
//         <h1 className="font-medium text-xl text-brand-brown-100">Package</h1>

//         <div className="flex gap-4">
//           {product.default_package?.components?.map((item: any) => (
//             <Package
//               key={item.id}
//               title={item.product.name}
//               src={`/images/products/${item.product.image.image}`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;
