type Params = {
    params: {
      productId: string;
    }
  }

export default function ReviewList({params}: Params) {
  return <h1 className="font-extrabold text-indigo-700">Rewiev List of product {params.productId} </h1>;
}
