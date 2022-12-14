import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { NextPage } from 'next';

type Props = {
  open: boolean;
  error: string;
  color: 'error' | 'warning' | 'info' | 'success';
  setError: (value: boolean) => void;
};

export const ErrorDisplay: NextPage<Props> = ({
  open,
  error,
  setError,
  color,
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={() => setError(false)}
    >
      <Alert
        severity={color}
        variant='filled'
        elevation={4}
        onClose={() => setError(false)}
      >
        {error}
      </Alert>
    </Snackbar>
  );
};
