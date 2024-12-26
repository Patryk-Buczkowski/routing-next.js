import { MyLink } from '@/components/buttons/Link';

export default function F5() {
  return (
    <>
      <h1>f5 page</h1>
      <MyLink
        to="/home"
        name="home bug?"
      />
      <MyLink
        to="/action"
        name="action"
        cn={'border border-red-500 mt-2'}
      />
    </>
  );
}
