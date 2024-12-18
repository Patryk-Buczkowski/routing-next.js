"use client"

import { MyButton } from "@/components/buttons/Button";
// import { Metadata } from "next";
import { useRouter } from "next/navigation";


// export const metadata: Metadata = {
//   title: {
//     default:'Products Category',
//     template:'%s | Category',
//   },
//   description: 'This is a page for showcasing a product. author Patryk Buczkowski',
// };

export default function Products() {
  const  router = useRouter();
  const products = ['product 1', 'product 2', 'product 3', 'product 4', 'product 5', 'product 6'];
  return (
    <div className="flex flex-col w-fit gap-2">
      <h1>Product list</h1>
      {products.map((product, index) => (
        <MyButton key={product} func={() => router.push(`/products/${index + 1}`)} name ={product}></MyButton>
      ))}
    </div>
  );
}
