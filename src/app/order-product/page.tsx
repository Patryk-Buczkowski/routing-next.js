"use client"
import { MyButton } from '@/components/buttons/Button';
import { useRouter } from 'next/navigation';

export default function OrderProduct() {
  const router = useRouter();

  const handlerOrder = () => {
    console.log('kupiłeś to dziadostwo');

    setTimeout(() => {
        router.push('/home');
    }, 1000)
    
  };
  return (
    <>
      <p>order</p>
      <MyButton func={handlerOrder} name="Order Now!!!" />
      <button>nnnn</button>
    </>
  );
}
