import { memo, useCallback } from 'react';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { changeField } from '@/redux/rateSlice';
import { FieldPropsType } from '../../../../types';
import styles from './styles.module.scss';

const SelectField: React.FC<FieldPropsType> = memo(({ label }) => {
  const dispatch = useAppDispatch();
  const fieldValue = useAppSelector((state) => state.rate[label]);
  const currencies = useAppSelector((state) => state.rate.currencies);

  const handleChangeSelect: React.ChangeEventHandler<HTMLSelectElement> =
    useCallback(
      (e) => {
        dispatch(
          changeField({
            fieldName: label,
            fieldValue: e.target.value,
          })
        );
      },
      [dispatch, label]
    );

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={label}>
        {label}
      </label>
      <select
        className={styles.select}
        name={label}
        id={label}
        value={fieldValue}
        onChange={handleChangeSelect}
      >
        <option disabled hidden value=''>
          currency
        </option>
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
});

SelectField.displayName = 'SelectField';

export default SelectField;
