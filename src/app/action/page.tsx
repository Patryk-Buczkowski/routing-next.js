'use client';

import { useState } from 'react';
import { Test } from './test';
import { MyButton } from '@/components/buttons/Button';
import { Operation } from '@/types/Operaton';
import { Action } from '@/app/_lib/Action';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { MenuItem } from '@mui/material';
import { blueGrey } from '@mui/material/colors';

export default function Dash() {
  const [ValueA, setValueA] = useState(5);
  const [ValueB, setValueB] = useState(3);
  const [operand, setOperand] = useState<Operation | ''>('');

  return (
    <>
      {Test()}

      <div className='flex items-center justify-between w-[320px]'>
        {Action(ValueA, ValueB, operand) || (
          <p className="text-red-500 font-extrabold">CHOOSE ACTION</p>
        )}

        <FormControl sx={{ m: 0.5, minWidth: 100, color: blueGrey }}>
          <InputLabel sx={{ color: blueGrey }} id="labelSelect">
            Action
          </InputLabel>
          <Select
            className="mt-1"
            labelId="labelSelect"
            id="select"
            value={operand}
            onChange={event => setOperand(event.target.value as Operation)}
            autoWidth
            label="Action"
            sx={{
              color: '#fb2f84', // Zmienia kolor wybranego tekstu
              '& .MuiSelect-icon': {
                color: '#f44336', // Zmienia kolor strzałki
              },
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem sx={{ color: '#01acfc' }} value="+">
              Action +
            </MenuItem>
            <MenuItem sx={{ color: '#01acfc' }} value="-">
              Action -
            </MenuItem>
            <MenuItem sx={{ color: '#01acfc' }} value="/">
              Action /
            </MenuItem>
            <MenuItem sx={{ color: '#01acfc' }} value="*">
              Action *
            </MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className="mt-1 flex gap-2 w-[320px]">
        <MyButton
          func={() => setValueA(prev => prev + 1)}
          name="increase ValueA"
        />
        <MyButton
          func={() => setValueA(prev => (prev > 0 ? prev - 1 : prev))}
          name="decrease ValueA"
        />
      </div>

      <div className="mt-1 flex gap-2 w-[320px]">
        <MyButton
          func={() => setValueB(prev => prev + 1)}
          name="increase ValueB"
        />
        <MyButton
          func={() => setValueB(prev => (prev > 0 ? prev - 1 : prev))}
          name="decrease ValueB"
        />
      </div>
    </>
  );
}
