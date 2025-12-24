// "use client";
// import React from "react";
// import { useForm } from "react-hook-form";
// import Input from "../atoms/Input";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { BookSchema, CreateBookType } from "@/libs/zod/book-schema";
// import Select from "../atoms/Select";
// import { LOCATION_OPTIONS } from "@/libs/data/data";

// const BookingDetail = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//     reset,
//   } = useForm<CreateBookType>({
//     resolver: zodResolver(BookSchema),
//     defaultValues: {
//       datePickup: undefined,
//       dateReturn: undefined,
//       dayCount: 1,
//       location: "Jakarta",
//       wib: "WIB",
//     },
//   });

//   return (
//     <form className="flex gap-4 w-full ">
//       <div className="w-full">
//         <label className="font-medium">Pickup</label>
//         <div className="w-full flex items-center justify-center">
//           <Input
//             id={"datePickup"}
//             type="date"
//             register={register}
//             errors={errors}
//             placeholder={"Masukkan Nama Karyawan..."}
//             iClass="text-white w-full"
//             className={"bg-white text-gray-700"}
//           />

//           <div className="w-fit h-auto px-4 font-bold">WIB</div>

//           <Select
//             id={"location"}
//             options={LOCATION_OPTIONS}
//             register={register}
//             errors={errors}
//             className="shadow-md"
//           />
//         </div>
//       </div>

//       <div className="w-full">
//         <label className="font-medium">Return</label>
//         <div className="w-full flex items-center justify-center">
//           <Input
//             id={"dateReturn"}
//             type="date"
//             register={register}
//             errors={errors}
//             placeholder={"Masukkan Nama Karyawan..."}
//             iClass="text-white w-full"
//             className={"bg-white text-gray-700"}
//           />

//           <div className="w-fit h-auto px-4 font-bold">WIB</div>

//           <Select
//             id={"location"}
//             options={LOCATION_OPTIONS}
//             register={register}
//             errors={errors}
//             className="shadow-md w-full"
//           />
//         </div>
//       </div>
//       <div>
//         <label className="font-medium">Day Count</label>
//         <Input
//           id={"dayCount"}
//           type="number"
//           register={register}
//           errors={errors}
//           placeholder={"1"}
//           iClass="text-white"
//           className={"bg-white text-gray-700"}
//         />
//       </div>
//     </form>
//   );
// };

// export default BookingDetail;
