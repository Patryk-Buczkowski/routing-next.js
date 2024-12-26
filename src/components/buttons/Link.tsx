import Link from 'next/link';

type Props = {
  to: string,
  name: string,
  boolean?: boolean,
  cn?: string,
};

export function MyLink({to, name, boolean, cn }: Props) {
  return (
    <Link href={to} replace={boolean}>
      <button
        type="button"
        className={"relative w-full px-6 py-3 font-bold text-white group " + cn}
      >
        <span className="absolute inset-0 w-full h-full transition-transform transform bg-blue-600 rounded-lg group-hover:scale-110"></span>
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-80 group-hover:opacity-100"></span>
        <span className="relative  hover:text-blue-200">{name}</span>
      </button>
    </Link>
  );
}
