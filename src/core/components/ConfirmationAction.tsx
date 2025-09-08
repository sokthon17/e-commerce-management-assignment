import Image from 'next/image';
import { ConfirmationActionProps } from '../type/confirmation-action';
import { BaseButton } from './BaseButton';

export default function ConfirmationAction({ action }: { action: ConfirmationActionProps }) {
  return (
    <div className="flex gap-2.5">
      <BaseButton
        action={action.cancel.action}
        className="px-3.5 py-2.5 text-sm text-gray-400 outline-gray-400"
        icon="/svg/ic-cross-gray-400-20.svg"
        label={action.cancel.label}
      />

      <button
        type="submit"
        name={action.process.label}
        onClick={action.process.action}
        className="flex h-fit w-fit gap-1 rounded-lg bg-blue-700 px-3.5 py-2.5 text-sm leading-5 font-normal text-white outline outline-transparent outline-solid"
      >
        <Image
          src={action.process.icon ?? '/svg/folder-white-20.svg'}
          alt={action.process.label}
          width={20}
          height={20}
        />
        {action.process.label}
      </button>
    </div>
  );
}
