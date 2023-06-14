import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RateStateType, ActionDataType } from '../../types';
import { init } from 'next/dist/compiled/@vercel/og/satori';

const initialState: RateStateType = {
  sourceCurrency: '',
  currencyAmount: '',
  targetCurrency: '',
};

const rateSlice = createSlice({
  name: 'rate',
  initialState,
  reducers: {
    changeField: (state, action: PayloadAction<ActionDataType>) => {
      state[action.payload.fieldName] = action.payload.fieldValue;
    },

    resetFields: () => ({
      sourceCurrency: '',
      currencyAmount: '',
      targetCurrency: '',
    }),
  },
});

export const { changeField, resetFields } = rateSlice.actions;

export default rateSlice.reducer;
