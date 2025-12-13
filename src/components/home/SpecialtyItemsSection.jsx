import MenuItem from "../menu/MenuItem";
import Button from "../ui/Button";
import { getSpecialtyItems } from "../../utils/utils";
import menuData from "../../data/menuData";
import { useTheme } from "../../context/ThemeContext";
import clsx from "clsx";

export default function SpecialtyItemsSection() {
  const { colors } = useTheme();
  const items = getSpecialtyItems(menuData, 4);

  if (!items.length) return null;

  return (
    <section className="py-20 px-6 md:px-12">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-10">
        <h2
          className="text-3xl md:text-4xl font-extrabold mb-3"
          style={{ color: colors.primary900 }}
        >
          Specialty Picks
        </h2>
        <p
          className="max-w-xl text-base md:text-lg"
          style={{ color: colors.primary700 }}
        >
          Customer favorites, seasonal highlights, and new arrivals — curated
          just for you.
        </p>
      </div>

      {/* Items Grid */}
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <MenuItem
            key={item.name}
            item={item}
            index={index}
            highPriorityLoading={index === 0}
          />
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 flex justify-center">
        <Button
          to="/menu"
          className={clsx(
            "rounded-xl px-6 py-3 text-base font-semibold transition",
            "hover:scale-[1.02]"
          )}
          style={{
            backgroundColor: colors.primary600,
            color: colors.lightBg,
          }}
        >
          See Full Menu
        </Button>
      </div>
    </section>
  );
}
