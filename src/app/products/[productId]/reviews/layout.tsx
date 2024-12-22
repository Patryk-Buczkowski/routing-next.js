type Props = {
  readonly children: React.ReactNode;
  params: Promise<{
    productId: string;
  }>;
};

export default async function Layout({ children, params }: Props) {
  const { productId } = await params;

  return (
    <>
      {children}
      <h2 className="mt-2">Details page of product:</h2>
      <p>id: {productId}</p>
    </>
  );
}
