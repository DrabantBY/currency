import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { changeField } from '@/redux/rateSlice';
import { FieldPropsType } from '../../../../types';

const AmountField: React.FC<FieldPropsType> = ({ label }) => {
  const dispatch = useAppDispatch();
  const fieldValue = useAppSelector((state) => state.rate[label]);

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(changeField({ fieldName: label, fieldValue: e.target.value }));
  };

  console.log(label);

  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        name={label}
        type='number'
        value={fieldValue === '0' ? '' : fieldValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default AmountField;
