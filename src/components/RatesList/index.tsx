import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchRatesList } from '@/redux/rateSlice';
import styles from './styles.module.scss';

const RatesList = () => {
  const dispatch = useAppDispatch();
  const base = useAppSelector((state) => state.rate.base);
  const rates = useAppSelector((state) => state.rate.rates);
  const loading = useAppSelector((state) => state.rate.loading);

  useEffect(() => {
    dispatch(fetchRatesList(base));
  }, [dispatch, base]);

  return loading ? (
    <h2 className={styles.loading}>Loading data...</h2>
  ) : (
    <ul className={styles.rates}>
      {rates.map(([currency, rate]) => (
        <li key={currency}>{`1 ${currency} = ${rate} ${base}`}</li>
      ))}
    </ul>
  );
};

export default RatesList;
