import Label from "./Label";

interface InputProps {
  id: string;
  label: string;
  value: string;
  type: string;
  error?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // or React.FormEvent<HTMLFormElement> if form submit event is needed
}
export default function InputItem({
  value,
  onChange,
  type,
  label,
  id,
  error,
  placeholder,
}: InputProps) {
  return (
    <div className="flex flex-col">
      <Label label={label} id={id} />
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`mt-1 p-2 border-2 rounded-lg bg-card/75 ${
          error ? "border-destructive" : ""
        }`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
