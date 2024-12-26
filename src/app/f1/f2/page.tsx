import { MyLink } from '@/components/buttons/Link';

export default function F2() {
  return (
    <>
      <h1>f2 page</h1>
      
      <div className="mt-2 w-1/2 mx-auto">
        <MyLink
          to="/f1"
          name="f1"
        />
      </div>
    </>
  );
}
