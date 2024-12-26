import Image from 'next/image';
import wondersImages, { WonderImage } from '../wonders';
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

export default async function PhotoPage({ params }: Params) {
  const { id } = await params;
  const photo: WonderImage = wondersImages.find(p => p.id === id)!;

  if (photo === undefined) {
    return notFound();
  }

  return (
    <div className="container m-auto">
      <div className="w-1/2 mx-auto">
        <div>
          <h1 className="text-center text-3xl font-bold my-4">{photo.name}</h1>
        </div>
        <Image
          alt={photo.name}
          src={photo.src}
          className="w-full object-cover aspect-square "
        />

        <div className="bg-white py-4">
          <h3>{photo.photographer}</h3>
          <h3>{photo.location}</h3>
        </div>
      </div>
    </div>
  );
}
