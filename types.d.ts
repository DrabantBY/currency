export type RateStateType = {
  source: string;
  amount: string;
  target: string;
  currencies: string[];
  output: string;
  loading: boolean;
};

type LabelType = Exclude<
  keyof RateStateType,
  'currencies' | 'output' | 'loading'
>;

export type ActionDataType = {
  fieldName: LabelType;
  fieldValue: string;
};

export type FieldPropsType = {
  label: LabelType;
};
