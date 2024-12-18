import { Metadata } from 'next';

export const generateProductMetadata = (productId: string): Metadata => {
  return {
    title: {
        absolute: `Product ${productId}`,
        default: 'P',

    },
    description: `Details and reviews of product ${productId}.`,
  };
};
