'use client';

import { useAppDispatch } from '@/redux/hooks';
import { resetFields } from '@/redux/rateSlice';
import SelectField from '../UI/SelectFIeld';
import AmountField from '../UI/AmountField';

const RateForm = () => {
  const dispatch = useAppDispatch();

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <SelectField label='sourceCurrency' />
      <AmountField label='currencyAmount' />
      <SelectField label='targetCurrency' />
      <button type='submit'>convert</button>
      <button type='button' onClick={() => dispatch(resetFields())}>
        reset
      </button>
    </form>
  );
};

export default RateForm;
