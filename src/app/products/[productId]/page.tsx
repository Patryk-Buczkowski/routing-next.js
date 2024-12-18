import { generateProductMetadata } from '@/app/_lib/MetadataProduct';
import { MyLink } from '@/components/buttons/Link';

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = ({ params }: Props) =>
  generateProductMetadata(params.productId);

export default function ProductsDetails({ params }: Props) {
  return (
    <>
      <div className='flex gap-2'>
        <MyLink name='Back' to="/products" />
        <MyLink name='contact with replace' to="/contact" boolean />
        <MyLink name='contact without replace' to="/contact" />
      </div>

      <h1 className='mt-2'>Details of product {params.productId} </h1>
    </>
  );
}
