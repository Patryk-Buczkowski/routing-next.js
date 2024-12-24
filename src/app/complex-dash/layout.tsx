import React from 'react';
// import UsersPage from './@users/page';
// import RevenuePage from './@revenue/page';
// import NotificationsPage from './@notifications/page';

type Props = {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
};

export default function ComplexDash({
  children,
}: // notifications,
// revenue,
// users,
Props) {
  return (
    <>
      <div>{children}</div>

      <div className="grid grid-rows-layout grid-cols-1 lg:grid-cols-layout h-screen gap-4 p-4">
        {/* <!-- Header --> */}
        <header className="col-span-full bg-blue-600 text-white p-4 text-center rounded">
          <h1 className="text-2xl font-bold">Advanced Tailwind Grid Layout</h1>
        </header>

        {/* <!-- Sidebar --> */}
        <aside className="hidden lg:block bg-gray-200 p-4 rounded">
          <nav>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="block p-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Reports
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Help
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* <!-- Main Content --> */}
        <main className="bg-white p-6 shadow-md rounded">
          <h2 className="text-xl font-bold mb-4">Main Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* <!-- Cards --> */}
            <div className="bg-blue-100 p-4 rounded shadow">
              <h3 className="text-lg font-semibold">Card 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-green-100 p-4 rounded shadow">
              <h3 className="text-lg font-semibold">Card 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-red-100 p-4 rounded shadow">
              <h3 className="text-lg font-semibold">Card 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-yellow-100 p-4 rounded shadow">
              <h3 className="text-lg font-semibold">Card 4</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-purple-100 p-4 rounded shadow">
              <h3 className="text-lg font-semibold">Card 5</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </main>

        {/* <!-- Footer --> */}
        <footer className="col-span-full bg-gray-800 text-white p-4 text-center rounded">
          <p>&copy; 2024 My Advanced Layout. All rights reserved.</p>
        </footer>
      </div>

      {/* <div className="flex gap-2 justify-center">
        <div className="flex flex-col gap-2">
          <div>{users}</div>
          <div>{revenue}</div>          
        </div>

        <div className="flex">{notifications}</div>
      </div> */}
    </>
  );
}
