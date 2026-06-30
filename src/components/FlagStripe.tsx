export default function FlagStripe() {
  return (
    <div className="flex h-[3px] w-full" aria-hidden="true">
      <div className="flex-1 bg-brand-yellow" />
      <div className="flex-1 bg-blue-500" />
      <div className="flex-1 bg-brand-red" />
    </div>
  );
}
