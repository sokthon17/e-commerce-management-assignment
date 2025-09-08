import { FieldErrors, RegisterOptions, UseFormRegister } from 'react-hook-form';

export interface InformationForm {
  name: string;
  description: string;
  price: number;
  discount: number;
  sku: string;
  quantity: number;
  category: string;
}

export type Method = 'PUT' | 'POST' | 'PATCH';

export interface FormLabel {
  labelClassName?: string;
  labelName: keyof InformationForm;
  inputClassName?: string;
  type: 'text' | 'number' | 'textarea';
  required?: boolean;
  errors: FieldErrors<InformationForm>;
  register: UseFormRegister<InformationForm>;
  validation?: RegisterOptions<InformationForm, keyof InformationForm>;
  placeholder: string;
  icon?: string;
}
