export default function Label({ label, id }: { label: string; id: string }) {
  return (
    <label className="text-sm font-medium text-muted" htmlFor={id}>
      {label}
    </label>
  );
}
