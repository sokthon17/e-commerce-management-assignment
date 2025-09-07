'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ConfirmDialog({
  action,
  label,
  icon
}: {
  label?: string;
  icon?: string;
  action: () => void;
}) {
  const [open, setOpen] = useState(false);

  const handleConfirm = () => {
    action();
    setOpen(false);
  };
  return (
    <>
      <button onClick={() => setOpen(true)}>
        <p className="text-gray-500">{label && label}</p>
        {icon && <Image src={icon} alt="website image" width={20} height={20} />}
      </button>

      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40">
          <div className="w-80 rounded-2xl bg-white p-6 shadow-xl">
            <h2 className="mb-4 text-lg font-semibold">Are you sure?</h2>
            <div className="flex justify-end gap-3">
              <button onClick={() => setOpen(false)} className="rounded-lg border px-4 py-2">
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="rounded-lg bg-red-500 px-4 py-2 text-white"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
