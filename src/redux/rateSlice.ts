import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { api } from '@/api';
import { RateStateType, ActionDataType } from '../../types';

const initialState: RateStateType = {
  source: '',
  amount: '',
  target: '',
  currencies: [],
  output: '',
  loading: false,
};

export const fetchCurrencies = createAsyncThunk(
  'rate/fetchCurrencies',
  async () => {
    const { data } = await api.get('currencies.min.json');
    return data;
  }
);

export const fetchOutput = createAsyncThunk(
  'rate/fetchOutput',
  async ({ source, target }: { source: string; target: string }) => {
    const { data } = await api.get(`currencies/${source}/${target}.min.json`);
    return data;
  }
);

const rateSlice = createSlice({
  name: 'rate',
  initialState,
  reducers: {
    changeField: (state, action: PayloadAction<ActionDataType>) => {
      state[action.payload.fieldName] = action.payload.fieldValue;
    },

    resetFields: (state) => ({
      ...state,
      source: '',
      amount: '',
      target: '',
      output: '',
    }),
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCurrencies.fulfilled, (state, action) => {
      state.currencies = Object.keys(action.payload);
    });

    builder.addCase(fetchOutput.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(fetchOutput.fulfilled, (state, action) => {
      state.loading = false;
      state.output = (
        action.payload[state.target] * Number(state.amount)
      ).toFixed(2);
    });
  },
});

export const { changeField, resetFields } = rateSlice.actions;

export default rateSlice.reducer;
