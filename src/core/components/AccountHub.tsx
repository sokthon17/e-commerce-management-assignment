'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function AccountHub({ name = 'Nike Shop' }: { name?: string }) {
  const notification: number = 4;
  const [alert, hasAlert] = useState<boolean>(false);

  useEffect(() => {
    if (notification > 1) {
      hasAlert(true);
    }
  }, [notification]);
  const profile_image = '/image/profile-image.jpg';

  return (
    <div className="flex items-center gap-5">
      <button className="flex h-fit w-fit items-center gap-2.5 rounded-lg border border-solid border-transparent bg-[#FFCC9180]/50 px-3 py-[5px] text-sm text-gray-700">
        {name}
        <Image src="/svg/ic-chevron-brown-20.svg" alt={name} width={20} height={20} />
      </button>
      <button className="relative">
        {alert && (
          <div className="absolute bottom-4 left-3 flex h-[18px] w-[18px] place-content-center items-center rounded-full border border-solid border-transparent bg-red-600 text-sm text-[11px] text-white">
            {notification}
          </div>
        )}
        <Image src="/svg/notification-blue-500.svg" alt="notification" width={26} height={26} />
      </button>
      <button className="overflow-hidden rounded-lg border border-solid border-transparent">
        <Image src={profile_image} alt="profile image" width={32} height={32} />
      </button>
    </div>
  );
}
