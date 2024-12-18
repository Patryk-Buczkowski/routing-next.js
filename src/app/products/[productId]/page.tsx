type Params = {
  params: {
    productId: string;
  }
}

export default function ProductsDetails({ params }:Params) {
  return (
    <div>
      <h1>Details of product {params.productId} </h1>
    </div>
  );
}
