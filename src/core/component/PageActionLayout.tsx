'use client';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';
import { updateProduct } from '../api/api.products';
import { Breadcrumbs } from '../type/breadcrumbs';
import { ConfirmationActionProps } from '../type/confirmation-action';
import { InformationForm, Method } from '../type/information-form';
import BreadCrumbs from './Breadcrumbs';
import ConfirmationAction from './ConfirmationAction';
import GeneralInformationForm from './GeneralInformationForm';

export default function PageActionLayout({
  id,
  method,
  information,
  breadcrumbs
}: {
  id: number;
  method: Method;
  information?: InformationForm;
  breadcrumbs: Breadcrumbs;
}) {
  const router = useRouter();
  const [formData, setFormData] = useState<InformationForm>({
    name: information?.name || '',
    description: information?.description || '',
    price: information?.price || 0,
    discount: information?.discount || 0,
    sku: information?.sku || '',
    quantity: information?.quantity || 0
  });

  useEffect(() => {
    if (information) {
      setFormData(information);
    }
  }, [information]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldName: keyof InformationForm
  ) => {
    setFormData({
      ...formData,
      [fieldName]: e.target.value
    });
  };

  const handleSubmit = async () => {
    try {
      await updateProduct(id, formData);
      console.log('Product updated successfully!');
      router.push('/product-management');
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const confirmationAction: ConfirmationActionProps = {
    cancel: {
      label: 'Cancel',
      action: () => router.back()
    },
    process: {
      label: 'Save Product',
      action: () => handleSubmit()
    }
  };
  return (
    <div className="grid grid-cols-[auto_264px] gap-6">
      <div className="flex flex-col gap-4">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
        <GeneralInformationForm
          method={method}
          information={information}
          handleChange={handleChange}
        />
      </div>
      <div>
        <ConfirmationAction action={confirmationAction} />
      </div>
    </div>
  );
}
