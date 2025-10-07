import { Star, Leaf, TrendingUp, Droplet } from "lucide-react";
import Badge from "./Badge";
import { useTheme } from "../context/ThemeContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

export default function MenuItem({ item }) {
  const { name, image, description, price } = item;

  const { colors } = useTheme();

  const STATUS_COLORS = {
    // Standard Success/Green (for Vegan/Leaf)
    success: { bg: "#d4edda", text: "#155724" },
    // Standard Warning/Gold (for Popular/Star)
    warning: { bg: "#fff3cd", text: "#856404" },
    // 💡 Fixed Light Purple/Lavender for Dietary
    dietary: { bg: "#f3e8ff", text: "#5b21b6" }, // Based on very light purple/violet for uniqueness
  };

  // 💡 2. CALCULATE DYNAMIC BADGE COLORS based on the active theme
  const badgeColors = {
    // ⭐️ POPULAR (Warning Role: Fixed Gold/Yellow for universal recognition)
    popular: STATUS_COLORS.warning,

    // ✨ NEW (Accent Role: Use Theme's primary for brand consistency)
    new: {
      bg: colors.border, // A very light, thematic background
      text: colors.primary700, // A darker thematic text color for high contrast
    },

    // 🌱 VEGAN (Success Role: Fixed Green for universal recognition)
    vegan: STATUS_COLORS.success,

    // 🥛 LACTOSE-FREE (Thematic Accent: Use a complementary shade like the primary accent)
    lactoseFree: STATUS_COLORS.dietary,
  };

  return (
    <div
      className="rounded-3xl border-t-4 overflow-hidden flex flex-col h-full shadow-md"
      style={{
        background: `linear-gradient(to bottom right, ${colors.lightBg}, #f4f7fa, #ffffff)`,
        borderTopColor: colors.primary500,
      }}
    >
      {/* Image */}
      <div className="overflow-hidden rounded-t-3xl relative h-56">
        <LazyLoadImage
          src={"/menu/" + image}
          alt={name}
          effect="opacity"
          wrapperClassName="w-full h-full flex justify-center items-center"
          className={`select-none w-full h-full object-cover transform transition duration-400 hover:scale-105 block`}
        />

        {/* Badges overlay */}
        <div className="absolute top-2 left-2 flex flex-row gap-1.5 z-10 flex-wrap max-w-[90%]">
          {item.popular && (
            <Badge
              text="Popular"
              icon={Star}
              bgColor={badgeColors.popular.bg} // Dynamic Background
              textColor={badgeColors.popular.text} // Dynamic Text
              // We'll assume your custom animations (wiggle/shimmer) are handled globally or in Badge.jsx
            />
          )}
          {item.new && (
            <Badge
              text="New"
              icon={TrendingUp}
              bgColor={badgeColors.new.bg} // Dynamic Background
              textColor={badgeColors.new.text} // Dynamic Text
            />
          )}
          {item.vegan && (
            <Badge
              text="Vegan"
              icon={Leaf}
              bgColor={badgeColors.vegan.bg} // Dynamic Background
              textColor={badgeColors.vegan.text} // Dynamic Text
            />
          )}
          {item.lactoseFree && (
            <Badge
              text="Dairy-Free"
              icon={Droplet}
              bgColor={badgeColors.lactoseFree.bg} // Dynamic Background
              textColor={badgeColors.lactoseFree.text} // Dynamic Text
            />
          )}
        </div>
      </div>

      {/* Text Content */}
      <div className="p-5 pt-3 pb-4 flex flex-col flex-grow">
        <div className="flex justify-between items-baseline mb-1">
          <h3
            className="text-xl md:text-2xl font-extrabold"
            style={{ color: colors.primary900 }}
          >
            {name}
          </h3>
          <p className="font-bold text-lg" style={{ color: colors.primary600 }}>
            ${price}
          </p>
        </div>

        <p className="text-gray-700 text-sm flex-grow">{description}</p>
      </div>
    </div>
  );
}
