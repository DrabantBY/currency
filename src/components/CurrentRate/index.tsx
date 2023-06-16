'use client';

import { useEffect } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { fetchCurrencies } from '@/redux/rateSlice';
import SelectField from '../UI/SelectFIeld';
import RatesList from '../RatesList';

const CurrentRate = () => {
  const dispatch = useAppDispatch();
  console.log('current race');

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch]);

  return (
    <div className='container'>
      <SelectField label='base' />
      <RatesList />
    </div>
  );
};

export default CurrentRate;
