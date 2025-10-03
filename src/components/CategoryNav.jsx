import menuData from "../data/menuData";

export default function CategoryNav({ activeCategory, setActiveCategory }) {
  return (
    <nav className="sticky top-0 z-50 overflow-x-auto bg-blue-50 border-b border-blue-200 shadow-sm relative">
      <div className="overflow-x-auto px-2">
        <div className="flex gap-3 px-4 py-3 min-w-max justify-start sm:justify-center">
          {Object.entries(menuData).map(([catName, catData]) => {
            const Icon = catData.icon;
            return (
              <button
                key={catName}
                onClick={() => setActiveCategory(catName)}
                className={`px-5 py-2 rounded-full font-semibold transition-all flex items-center gap-2
            ${
              activeCategory === catName
                ? "bg-blue-600 text-white shadow-lg scale-105"
                : "bg-blue-200 text-blue-800 hover:bg-blue-300 hover:scale-105 hover:shadow hover:cursor-pointer"
            }`}
              >
                <Icon className="w-5 h-5" />
                {catName}
              </button>
            );
          })}
        </div>
      </div>

      {/*  gradient overlay to hint scroll */}
      <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-blue-50 to-transparent pointer-events-none" />
    </nav>
  );
}
