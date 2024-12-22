'use client'

import { Button } from '@mui/material';

type Prop = {
  name: string;
  func: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const mainButtonStyle = {
  backgroundColor: 'green',
  color: 'white',
  ml: 1,
  borderRadius: '15px',
  '&:hover': {
    backgroundColor: 'darkgreen',
  },
};

export function MyButton({ func, name }: Prop) {
  return (
    <Button
      color="primary"
      sx={mainButtonStyle}
      onClick={func}
      type="button"
      className="ml-5"
    >
      {name}
    </Button>
  );
}
