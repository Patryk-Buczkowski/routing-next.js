import { MyLink } from '@/components/buttons/Link';
// import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Witaj w moim pierwszym projekcie Next.js!</h1>
      <p>To jest dynamiczna aplikacja stworzona przy pomocy Next.js.</p>

      <div className="w-1/3 mx-auto mt-3">
        <MyLink
          to="/complex-dash"
          name="Complexx dash"
        />
      </div>

      <div className="w-1/3 mx-auto mt-3">
        <MyLink
          to="/f1"
          name="f1 intercepting example"
        />
      </div>

      <div className="w-1/3 mx-auto mt-3">
        <MyLink
          to="/photo-feed"
          name="Photo feed"
        />
      </div>
    </>
  );
}
