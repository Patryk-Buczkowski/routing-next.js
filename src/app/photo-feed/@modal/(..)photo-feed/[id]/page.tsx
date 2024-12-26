import Image from 'next/image';
import wondersImages, { WonderImage } from '../../../wonders';
import Modal from '@/components/modal';
import { notFound } from 'next/navigation';

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
  const photo: WonderImage = wondersImages.find(p => p.id === id)!;

  if (photo === undefined) {
    return notFound();
  }

  return (
    <Modal>
      <Image
        alt={photo.name}
        src={photo.src}
        className="w-full object-cover aspect-square"
      />

      <div className="bg-white p-4">
        <h2 className="text-xl font-semibold">{photo.name}</h2>
        <h3>{photo.photographer}</h3>
        <h3>{photo.location}</h3>
      </div>
    </Modal>
  );
}
