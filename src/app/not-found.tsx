import Image from 'next/image';

export default function NotFound() {
  return (
    <Image
      src='/404.png'
      alt="4004"
      layout="fill" 
    //   width={500}         
    //   height={500}        
    />
  );
}
