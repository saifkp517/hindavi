import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { NextPage } from 'next';
import { RefObject, Dispatch, SetStateAction, ChangeEvent } from 'react';
import { State } from '../../pages/signup';

export type InputFieldType = {
  label: string;
  id: string;
  type: string;
  icon: JSX.Element;
  reference: RefObject<HTMLInputElement>;
  inputProps: Object;
  value?: string;
  displayVisibility?: boolean;
  changeValue?: (value: string, id: string) => void;
  state?: State;
  setState?: Dispatch<SetStateAction<State>>;
};

export const InputFields: NextPage<InputFieldType> = ({
  label,
  id,
  icon,
  reference,
  type,
  value,
  changeValue,
  inputProps,
  displayVisibility,
  state,
  setState,
}) => {
  const changeValueInp = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (changeValue) {
      changeValue(id, e.target.value);
    }
  };

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
          inputRef={reference}
          required
          value={value}
          onChange={(e) => changeValueInp(e)}
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
        inputRef={reference}
        inputProps={inputProps}
        value={value}
        onChange={(e) => changeValueInp(e)}
        required
        startAdornment={
          <InputAdornment position='start'>{icon}</InputAdornment>
        }
      />
    </FormControl>
  );
};
