import Image from 'next/image';
import { notFound } from 'next/navigation';
import wondersImages from '../../../wonders';

export default async function PhotoModal({ params }: { params: { id: string } }) {
  const { id } = params;

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
