import clsx from 'clsx';
import Image from 'next/image';
import { ChangeEvent } from 'react';
import { InformationForm, Method } from '../type/information-form';

interface FormLabel {
  labelClassName?: string;
  labelName: string;
  value?: string | number;
  inputClassName?: string;
  type: 'text' | 'number' | 'textarea';
  required: boolean;
  placeholder: string;
  icon?: string;
}

export default function GeneralInformationForm({
  method,
  handleChange,
  information
}: {
  method: Method;
  information?: InformationForm;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldName: keyof InformationForm
  ) => void;
}) {
  return (
    <div className="flex flex-col gap-6 p-6">
      <form method={method} className="shadow/blue-500/5 flex flex-col gap-[72px]">
        <div className="flex flex-col gap-3.5">
          <h3 className="text-lg leading-7 text-gray-800">General Information</h3>
          <InputForm
            labelName="Product name"
            required={true}
            placeholder="Type product name here. . ."
            type="text"
            value={information?.name}
            handleChange={handleChange}
          />
          <InputForm
            labelName="Description"
            required={true}
            placeholder="Type product description here. . ."
            type="textarea"
            inputClassName=" align-top h-[153px] resize-none "
            value={information?.description}
            handleChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-3.5">
          <h3 className="text-lg leading-7 text-gray-800">Pricing</h3>
          <InputForm
            labelName="Base Price"
            required={true}
            placeholder="Type base price here. . ."
            type="number"
            value={information?.price}
            icon="/svg/dollar-gray-500-20.svg"
            handleChange={handleChange}
          />
          <InputForm
            labelName="Discount Percentage(%)"
            required={true}
            placeholder="Type Discount Percentage. . ."
            type="number"
            value={information?.discount}
            handleChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-3.5">
          <h3 className="text-lg leading-7 text-gray-800">Inventory</h3>
          <div className="flex gap-3.5">
            <InputForm
              labelName="SKU"
              required={true}
              placeholder="Type Product SKU here. . ."
              type="text"
              value={information?.sku}
              handleChange={handleChange}
            />
            <InputForm
              labelName="Quantity"
              required={true}
              placeholder="Type Product Quantity here. . ."
              type="number"
              value={information?.quantity}
              handleChange={handleChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

const InputForm = ({
  labelName,
  required,
  placeholder,
  type,
  value,
  inputClassName,
  labelClassName,
  handleChange,
  icon
}: FormLabel & {
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldName: keyof InformationForm
  ) => void;
}) => {
  const labelClass = 'text-sm leading-5 text-gray-500 font-medium';
  const inputClass = 'outline_gray_300 h-10 w-full px-3 py-2 text-sm text-gray-600';

  const onInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    handleChange(e, labelName as keyof InformationForm);
  };
  return (
    <label className="flex w-full flex-col gap-1">
      <label htmlFor={labelName} className={clsx(labelClassName, labelClass)}>
        {labelName}
      </label>

      {type === 'textarea' ? (
        <textarea
          id={labelName}
          name={labelName}
          onChange={onInputChange}
          required={required}
          className={clsx(inputClass, inputClassName)}
          placeholder={placeholder}
          value={value}
        />
      ) : (
        <div className="relative">
          {icon && (
            <Image
              src={icon}
              className="absolute top-[19px] left-2.5 pr-1"
              alt="input form icon"
              width={20}
              height={20}
            />
          )}
          <input
            name={labelName}
            id={labelName}
            type={type}
            onChange={onInputChange}
            value={value}
            required={required}
            className={clsx(inputClass, inputClassName, icon && 'pl-8')}
            placeholder={placeholder}
          />
        </div>
      )}
    </label>
  );
};
