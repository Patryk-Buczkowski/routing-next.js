// import { LoadingButton } from '@mui/lab';

import { LoadingButton } from '@mui/lab';

export default function Loading() {
  console.log('component loading work')
  return (
    <>
      <p>dupa</p>
      <LoadingButton loading loadingIndicator="Loading…" variant="outlined">
        Fetch data
      </LoadingButton>
    </>
  );
}
