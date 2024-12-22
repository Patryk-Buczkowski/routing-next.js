import LinearProgress from '@mui/material/LinearProgress';

export default function Loading() {
  console.log('component loading work')
  return (
    <>
      <p>dupa</p>
      <LinearProgress
        sx={{
          color: 'blue',
        }}
        aria-busy={true}
      />
    </>
  );
}
