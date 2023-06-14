import { FC } from 'react';

const SelectField: FC<{ label: string }> = ({ label }) => {
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
