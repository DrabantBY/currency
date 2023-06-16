'use client';

import { useEffect } from 'react';
import { fetchCurrencies, fetchOutput } from '@/redux/rateSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { resetFields } from '@/redux/rateSlice';
import SelectField from '../UI/SelectFIeld';
import AmountField from '../UI/AmountField';
import styles from './styles.module.scss';

const CurrencyForm = () => {
  const dispatch = useAppDispatch();
  const rate = useAppSelector((state) => state.rate);

  const isDisabledSubmit =
    rate.loading || !rate.source || !rate.amount || !rate.target;

  const isDisabledReset =
    rate.loading || (!rate.source && !rate.amount && !rate.target);

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
    <div className='container'>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <SelectField label='source' />
        <AmountField label='amount' />
        <SelectField label='target' />
        <button
          className={styles.btn}
          type='submit'
          disabled={isDisabledSubmit}
        >
          convert
        </button>
        <span className={styles.output}>{rate.output}</span>
        <button
          className={styles.btn}
          type='button'
          onClick={() => dispatch(resetFields())}
          disabled={isDisabledReset}
        >
          reset
        </button>
      </form>
    </div>
  );
};

export default CurrencyForm;
