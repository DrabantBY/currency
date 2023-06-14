import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { selectRate } from '@/store/rateSlice';
import { changeAmount } from '@/store/rateSlice';

const AmountField: React.FC<{ label: string }> = ({ label }) => {
  const currencyAmount = useAppSelector((state) => state.rate.currencyAmount);
  const dispatch = useAppDispatch();
  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(changeAmount(Number(e.target.value)));
    console.log(currencyAmount);
  };

  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        name={label}
        type='number'
        value={currencyAmount || ''}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default AmountField;
