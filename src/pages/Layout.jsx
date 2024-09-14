export default function Layout({ children }) {
  return (
    <div className="border-2 h-full w-full border-gray-600/50 p-4 rounded-3xl flex place-items-center">
      {children}
    </div>
  );
}
