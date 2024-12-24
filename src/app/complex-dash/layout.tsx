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
  notifications,
  revenue,
  users,
}: Props) {
  return (
    <>
      <div>{children}</div>

      <div className="flex">
        <div className="flex flex-col">
          <div>{users}</div>
          <div>{revenue}</div>          
        </div>

        <div className="flex">{notifications}</div>
      </div>
    </>
  );
}
