import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { NextPage } from 'next';
import { RefObject, Dispatch, SetStateAction } from 'react';
import { State } from '../../pages/signup';

export type InputFieldType = {
  label: string;
  id: string;
  type: string;
  icon: JSX.Element;
  ref: RefObject<HTMLInputElement>;
  inputProps: Object;
  displayVisibility?: boolean;
  state?: State;
  setState?: Dispatch<SetStateAction<State>>;
};

export const InputFields: NextPage<InputFieldType> = ({
  label,
  id,
  icon,
  ref,
  type,
  inputProps,
  displayVisibility,
  state,
  setState,
}) => {
  if (displayVisibility && state && setState) {
    return (
      <FormControl
        fullWidth={true}
        variant='outlined'
        sx={{
          marginTop: 2,
        }}
      >
        <InputLabel htmlFor='password'>{label}</InputLabel>
        <OutlinedInput
          id={id}
          label={label}
          fullWidth={true}
          inputRef={ref}
          required
          inputProps={inputProps}
          type={state.showPassword ? 'text' : 'password'}
          startAdornment={
            <InputAdornment position='start'>{icon}</InputAdornment>
          }
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={() =>
                  setState({
                    ...state,
                    showPassword: !state.showPassword,
                  })
                }
              >
                {state.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    );
  }

  return (
    <FormControl
      fullWidth={true}
      variant='outlined'
      sx={{
        marginTop: 2,
      }}
    >
      <InputLabel htmlFor='email'>{label}</InputLabel>
      <OutlinedInput
        id={id}
        type={type}
        label={label}
        fullWidth={true}
        inputRef={ref}
        inputProps={inputProps}
        required
        startAdornment={
          <InputAdornment position='start'>{icon}</InputAdornment>
        }
      />
    </FormControl>
  );
};
