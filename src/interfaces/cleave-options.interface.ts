export interface CleaveOptions {
  creditCard?: boolean;
  creditCardStrictMode?: boolean;
  creditCardType?: string;

  phone?: boolean;
  phoneRegionCode?: string;
  phoneFormatter?: any;

  date?: boolean;
  datePattern?: string[];
  dateFormatter?: any;

  numeral?: boolean;
  numeralDecimalScale?: number;
  numeralDecimalMark?: string;
  numeralThousandsGroupStyle?: string;
  numeralPositiveOnly?: boolean;

  numericOnly?: boolean;

  uppercase?: boolean;
  lowercase?: boolean;

  prefix?: string;
  prefixLength?: number;

  rawValueTrimPrefix?: boolean;
  copyDelimiter?: boolean;

  initValue?: string;

  delimiter?: string;
  delimiters?: string[];

  blocks?: string[] | number[];
  blocksLength?: number;

  maxLength?: number;

  backspace?: boolean;

  result?: string;
};
