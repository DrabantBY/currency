'use client';

import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { FieldPropsType } from '../../../../types';

const SelectField: React.FC<FieldPropsType> = ({ label }) => {
  const dispatch = useAppDispatch();
  const fieldValue = useAppSelector((state) => state.rate[label]);

  console.log(label);

  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <select name={label} id={label}>
        <option value=''></option>
        <option value=''></option>
        <option value=''></option>
        <option value=''></option>
      </select>
    </div>
  );
};

export default SelectField;
