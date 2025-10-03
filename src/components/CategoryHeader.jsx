export default function CategoryHeader({ activeCategory, ActiveIcon }) {
  return (
    <h2 className="text-3xl font-bold text-blue-900 mb-8 flex items-center justify-center gap-3">
      <span className="block h-1 w-16 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-full"></span>
      <ActiveIcon className="w-6 h-6 text-blue-500" />
      {activeCategory}
      <ActiveIcon className="w-6 h-6 text-blue-500" />
      <span className="block h-1 w-16 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-full"></span>
    </h2>
  );
}
