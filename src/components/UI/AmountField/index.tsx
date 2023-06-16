import { memo, useCallback } from 'react';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { changeField } from '@/redux/rateSlice';
import { FieldPropsType } from '../../../../types';
import styles from './styles.module.scss';

const AmountField: React.FC<FieldPropsType> = memo(({ label }) => {
  const dispatch = useAppDispatch();
  const fieldValue = useAppSelector((state) => state.rate[label]);

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> =
    useCallback(
      (e) => {
        const { value } = e.target;

        if (/[^\d]|^0/.test(value)) {
          return;
        }

        dispatch(
          changeField({
            fieldName: label,
            fieldValue: value,
          })
        );
      },
      [dispatch, label]
    );

  console.log(label);

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={label}>
        {label}
      </label>
      <input
        className={styles.input}
        id={label}
        name={label}
        type='text'
        value={fieldValue}
        onChange={handleInputChange}
      />
    </div>
  );
});

AmountField.displayName = 'AmountField';

export default AmountField;
