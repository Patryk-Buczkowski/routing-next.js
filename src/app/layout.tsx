import Link from 'next/link';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  type Links = Record<string, string>;

  const links: Links = {
    'Blog-Main': '/blog',
    'Blog-first': '/blog/first',
    'Blog-second': '/blog/second',
    'Docs': '/docs',
    'Action': '/action',
    'start': '/',
    "home": '/home',
    'About': '/about',
    'Contact': '/contact',
    'Products': '/products',
    'Products [] reviews []': '/products/0/reviews/00',
  };

  return (
    <html lang="en">
      <body>
        <header className="max-h-fit mb-2 top-0 left-0 w-full bg-blue-800 p-1 z-10">
          <nav className="flex gap-1 bg-blue-600 rounded">
            {Object.entries(links).map(([key, value], index, arr) => (
              <Link key={key} href={value} className="text-green-500">
                {key}
                {index < arr.length - 1 && ' |'}
              </Link>
            ))}
          </nav>          
        </header>

        <main className="p-4">{children}</main>

        <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4">
          <p className="text-center">© 2024 My Website</p>
        </footer>
      </body>
    </html>
  );
}
