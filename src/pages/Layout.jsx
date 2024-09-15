export default function Layout({ children }) {
  return (
    <div className="border-2 w-full h-full border-gray-600/50 p-4 rounded-3xl overflow-hidden">
      {children}
    </div>
  );
}
