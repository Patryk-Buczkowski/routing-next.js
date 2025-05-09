import Image from 'next/image';
import Modal from '@/components/modal';
import { notFound } from 'next/navigation';
import wondersImages from '@/app/photo-feed/wonders';

type Params = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
  ];
}

export default async function PhotoModal({ params }: Params) {
  const { id } = await params;

  const photo = wondersImages.find(p => p.id === id); 

  if (!photo) {
    return notFound(); 
  }

  return (
    <Modal> 
      <Image
        src={photo.src} 
        alt={photo.name} 
        className="w-full object-cover aspect-square" 
      />

      <div className="bg-white p-4">
        <h2>{photo.name}</h2>
        <h3>{photo.photographer}</h3>
        <h3>{photo.location}</h3>
      </div>
    </Modal>
  );
}
