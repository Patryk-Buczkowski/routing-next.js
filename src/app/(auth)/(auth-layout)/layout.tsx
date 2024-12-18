type Props = {
  readonly children: React.ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return (
    <>
      <h2 className="mt-2">You have to log in</h2>
      {children}
    </>
  );
}
