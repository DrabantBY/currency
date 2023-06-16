export type RateStateType = {
  source: string;
  amount: string;
  target: string;
  currencies: string[];
  output: string;
  loading: boolean;
  base: string;
  rates: [string, string][];
};

type LabelType = Exclude<
  keyof RateStateType,
  'currencies' | 'output' | 'loading' | 'rates'
>;

export type ActionDataType = {
  fieldName: LabelType;
  fieldValue: string;
};

export type FieldPropsType = {
  label: LabelType;
};
