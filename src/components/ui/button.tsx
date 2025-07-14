export function Button({
  children,
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`rounded-md border-2 border-blue-900 bg-blue-500 px-3 py-1 text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
