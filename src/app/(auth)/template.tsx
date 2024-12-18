'use client';
// if file will be named layout.tsx, input will keep value even you click button
import { Button } from '@mui/material';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';

type Props = {
  readonly children: React.ReactNode;
};
type Paths = {
  path: string;
  name: string;
};

const paths: Paths[] = [
  { path: '/login', name: 'Ymmmm.. Login maybe?' },
  { path: '/register', name: 'Need to Register?' },
  { path: '/forgot-password', name: 'You Forgot password?' },
];

export default function AuthLayout({ children }: Props) {
  const router = useRouter();
  const path = usePathname();
  const [input, setInput] = useState('initial value');
  return (
    <>
      <input className='border-solid border-2 border-purple-500' value={input} onChange={(e) => setInput(e.target.value)} />

      <h2 className="mt-2">You have to log in</h2>
      {children}

      <div>
        {paths.map(p => (
          <Button
            key={p.name}
            color={path.startsWith(p.path) ? 'warning' : 'primary'}
            onClick={() => router.push(p.path)}
          >
            {p.name}
          </Button>
        ))}
      </div>
    </>
  );
}
