import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '.';

type RateStateType = {
  sourceCurrency: string;
  currencyAmount: number;
  targetCurrency: string;
};

const initialState: RateStateType = {
  sourceCurrency: '',
  currencyAmount: 0,
  targetCurrency: '',
};

const rateSlice = createSlice({
  name: 'rate',
  initialState,
  reducers: {
    changeSourceCurrency: (state, action: PayloadAction<string>) => {
      state.sourceCurrency = action.payload;
    },

    changeTargetCurrency: (state, action: PayloadAction<string>) => {
      state.targetCurrency = action.payload;
    },

    changeAmount: (state, action: PayloadAction<number>) => {
      state.currencyAmount = action.payload;
    },
  },
});

export const { changeAmount, changeSourceCurrency, changeTargetCurrency } =
  rateSlice.actions;

export const selectRate = (state: RootState) => state.rate;

export default rateSlice.reducer;
