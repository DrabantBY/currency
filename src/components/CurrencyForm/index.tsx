'use client';

import { useEffect } from 'react';
import { fetchCurrencies, fetchOutput } from '@/redux/rateSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { resetFields } from '@/redux/rateSlice';
import SelectField from '../UI/SelectFIeld';
import AmountField from '../UI/AmountField';

const CurrencyForm = () => {
  console.log('form');
  const dispatch = useAppDispatch();
  const output = useAppSelector((state) => state.rate.output);
  const loading = useAppSelector((state) => state.rate.loading);

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch]);

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const { source, target } = form.elements as typeof form.elements & {
      source: HTMLSelectElement;
      target: HTMLSelectElement;
    };

    dispatch(fetchOutput({ source: source.value, target: target.value }));
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <SelectField label='source' />
        <AmountField label='amount' />
        <SelectField label='target' />
        <button type='submit' disabled={loading}>
          convert
        </button>
        <button
          type='button'
          disabled={loading}
          onClick={() => dispatch(resetFields())}
        >
          reset
        </button>
      </form>

      <span>Output: {output}</span>
    </div>
  );
};

export default CurrencyForm;
