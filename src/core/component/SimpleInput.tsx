export default function SimpleInput({ type, placeholder }: { type: string; placeholder?: string }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="outline_gray_300 h-full w-full text-sm text-gray-600"
    />
  );
}
