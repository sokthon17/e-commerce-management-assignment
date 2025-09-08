'use client';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Breadcrumbs } from '../type/breadcrumbs';
import { ConfirmationActionProps } from '../type/confirmation-action';
import { InformationForm, Method } from '../type/information-form';
import { InputForm } from './BaseInputForm';
import BreadCrumbs from './Breadcrumbs';
import CategoryOption from './CategoryOption';
import ConfirmationAction from './ConfirmationAction';

export default function GeneralInformationForm({
  method,
  breadcrumbs,
  information,
  confirmationAction,
  onSubmit
}: {
  method: Method;
  information?: InformationForm;
  confirmationAction: ConfirmationActionProps;
  breadcrumbs: Breadcrumbs;

  onSubmit: (data: InformationForm) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<InformationForm>({
    defaultValues: information
  });

  const submitHandler: SubmitHandler<InformationForm> = (data) => {
    onSubmit(data);
  };
  return (
    <div className="flex flex-col gap-6 p-6">
      <form onSubmit={handleSubmit(submitHandler)} method={method} className="flex flex-col gap-6">
        <div className="flex justify-between gap-4">
          <BreadCrumbs breadcrumbs={breadcrumbs} />
          <ConfirmationAction action={confirmationAction} />
        </div>
        <div className="grid grid-cols-[auto_264px] gap-6">
          <div className="flex flex-col gap-[72px]">
            <div className="flex flex-col gap-3.5">
              <h3 className="text-lg leading-7 text-gray-800">General Information</h3>
              <InputForm
                labelName="name"
                placeholder="Type product name here..."
                type="text"
                required
                register={register}
                errors={errors}
                validation={{ required: 'Name is required' }}
              />
              <InputForm
                labelName="description"
                placeholder="Type product description here..."
                type="textarea"
                inputClassName="align-top h-[153px] resize-none"
                required
                register={register}
                errors={errors}
                validation={{ required: 'Description is required' }}
              />
            </div>
            <div className="flex flex-col gap-3.5">
              <h3 className="text-lg leading-7 text-gray-800">Pricing</h3>
              <InputForm
                labelName="price"
                placeholder="Type base price here..."
                type="number"
                required
                register={register}
                errors={errors}
                validation={{
                  required: 'Price is required',
                  min: { value: 1, message: 'Price must be greater than 0' }
                }}
              />
              <InputForm
                labelName="discount"
                placeholder="Type discount percentage..."
                type="number"
                register={register}
                errors={errors}
                validation={{
                  min: { value: 0, message: 'Discount cannot be negative' },
                  max: { value: 100, message: 'Discount cannot exceed 100%' }
                }}
              />
            </div>
            <div className="flex flex-col gap-3.5">
              <h3 className="text-lg leading-7 text-gray-800">Inventory</h3>
              <div className="flex gap-3.5">
                <InputForm
                  labelName="sku"
                  placeholder="Type product SKU here..."
                  type="text"
                  required
                  register={register}
                  errors={errors}
                  validation={{ required: 'SKU is required' }}
                />
                <InputForm
                  labelName="quantity"
                  placeholder="Type product quantity here..."
                  type="number"
                  required
                  register={register}
                  errors={errors}
                  validation={{
                    required: 'Quantity is required',
                    min: { value: 1, message: 'Quantity must be at least 1' }
                  }}
                />
              </div>
            </div>
          </div>
          <CategoryOption option={information?.category} register={register} />
        </div>
      </form>
    </div>
  );
}
