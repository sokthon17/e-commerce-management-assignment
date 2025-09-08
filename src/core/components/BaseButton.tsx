import clsx from 'clsx';
import Image from 'next/image';

export function BaseButton({
  icon,
  label,
  className,
  action
}: {
  icon?: string;
  label: string;
  className?: string;
  action?: () => void;
}) {
  return (
    <button
      onClick={action}
      className={clsx(
        className,
        'flex h-fit w-fit gap-1 rounded-lg text-sm leading-5 font-normal outline outline-solid'
      )}
    >
      {icon && <Image src={icon} alt={label} width={20} height={20} />}
      {label}
    </button>
  );
}
