import { MyLink } from '@/components/buttons/Link';
import React from 'react';
// import UsersPage from './@users/page';
// import RevenuePage from './@revenue/page';
// import NotificationsPage from './@notifications/page';

type Props = {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
};

export default function ComplexDash({
  children,
  notifications,
  revenue,
  users,
  login,
}: Props) {
  const namesAside = ['Dashboard', 'Reports', 'Settings', 'Help'];
  const isLoggedin = true;

  return isLoggedin ? (
    <div className="bg-slate-500 grid grid-rows-layout grid-cols-1 lg:grid-cols-layout gap-x-4 gap-y-2 p-2">
      <header className="col-span-full bg-blue-600 text-white p-4 text-center rounded">
        <h1 className="text-2xl font-bold">Advanced Tailwind Grid Layout</h1>
      </header>

      <aside className="hidden lg:block bg-gray-200 p-2 rounded">
        <nav className="rounded-md">
          <ul className="w-full space-y-2">
            {namesAside.map(name => (
              <MyLink
                name={name}
                to={`#${name}`}
                key={name}
                cn={'block text-center p-2 mt-2 '}
              />
            ))}
          </ul>
        </nav>
      </aside>

      <main className="bg-blue-600 p-2 shadow-md rounded">
        <h2 className="text-xl font-bold mb-4">Main Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-blue-200 p-4 rounded shadow">
            <h3 className="text-lg font-semibold">Card 1</h3>
            {children}
          </div>

          <div className="bg-green-100 p-4 rounded shadow">
            <h3 className="text-lg font-semibold">Card 2</h3>
            {users}
          </div>

          <div className="bg-red-100 p-4 rounded shadow">
            <h3 className="text-lg font-semibold">Card 3</h3>
            {revenue}
          </div>

          <div className="bg-yellow-100 p-4 rounded shadow lg:col-span-2">
            <h3 className="text-lg font-semibold">Card 4</h3>
            {notifications}
          </div>

          <div className="bg-purple-100 p-4 rounded shadow lg:col-start-3">
            <h3 className="text-lg font-semibold">Card 5</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="bg-red-800 p-4 rounded shadow lg:col-start-1 lg:col-span-full">
            <h3 className="text-lg font-semibold">Card 6</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </main>
    </div>
  ) : (
    login
  );
}
