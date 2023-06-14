export type RateStateType = {
  sourceCurrency: string;
  currencyAmount: string;
  targetCurrency: string;
};

export type ActionDataType = {
  fieldName: keyof RateStateType;
  fieldValue: string;
};

export type FieldPropsType = {
  label: keyof RateStateType;
};
