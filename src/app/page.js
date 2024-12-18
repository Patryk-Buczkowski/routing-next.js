'use client';

import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function Start() {
  const router = useRouter();
  return (
    <div>
      <Button color="primary" onClick={() => router.push('/login')}>
        Ymmmm.. Login maybe?
      </Button>

      <Button color="primary" onClick={() => router.push('/register')}>
      Need to Register?
      </Button>

      <Button color="primary" onClick={() => router.push('/forgot-password')}>
        You Forgot password?
      </Button>
    </div>
  );
}
