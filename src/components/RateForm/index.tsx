'use client';

import SelectField from '../UI/SelectFIeld';
import AmountField from '../UI/AmountField';

const RateForm = () => {
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
    </form>
  );
};

export default RateForm;
