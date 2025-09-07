export default function SimpleInput({
  type,
  placeholder,
}: {
  type: string;
  placeholder?: string;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="outline_gray_300 text-sm text-gray-600 h-full w-full"
    />
  );
}
