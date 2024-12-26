import { MyLink } from '@/components/buttons/Link';

export default function F5() {
  return (
    <>
      <h1>f5 page</h1>
      <div className="mt-2 w-1/2 mx-auto">
        <MyLink
          to="/home"
          name="home bug?"
        />
      </div>

      <div className="mt-2 w-1/2 mx-auto">
        <MyLink
          to="/action"
          name="action"
        />
      </div>
    </>
  );
}
