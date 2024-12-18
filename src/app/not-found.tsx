import Image from 'next/image';

export const metadata = {
  title: 'Are you lost?',
  description: 'This is a page for showcasing a product.',
  author: 'Patryk Buczkowski',
};

export default function NotFound() {
  return (
    <Image
      src='/404.png'
      alt="404"
      layout="fill" 
    //   width={500}         
    //   height={500}        
    />
  );
}
