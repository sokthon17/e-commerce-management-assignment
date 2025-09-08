import Image from 'next/image';
import { FormLabel } from '../type/information-form';

export const InputForm = ({
  labelName,
  type,
  placeholder,
  icon,
  inputClassName,
  register,
  errors,
  validation
}: FormLabel) => {
  const errorMessage = errors[labelName]?.message as string | undefined;
  const inputBaseClass = 'outline_gray_300 h-10 w-full px-3 py-2 text-sm text-gray-600';

  return (
    <label className="flex w-full flex-col gap-1">
      <span className="text-sm leading-5 font-medium text-gray-500">{labelName}</span>

      {type === 'textarea' ? (
        <textarea
          {...register(labelName, validation)}
          className={`resize-none ${inputBaseClass} ${inputClassName || ''}`}
          placeholder={placeholder}
        />
      ) : (
        <div className="relative">
          {icon && (
            <Image
              src={icon}
              width={20}
              height={20}
              alt="input icon"
              className="absolute top-[19px] left-2.5"
            />
          )}
          <input
            {...register(labelName, validation)}
            type={type}
            className={`${inputBaseClass} ${inputClassName || ''} ${icon ? 'pl-8' : ''}`}
            placeholder={placeholder}
          />
        </div>
      )}
      {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
    </label>
  );
};
