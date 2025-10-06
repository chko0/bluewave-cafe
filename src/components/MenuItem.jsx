import { Star, Leaf, TrendingUp, Droplet } from "lucide-react";
import Badge from "./Badge";
import { useTheme } from "../context/ThemeContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

export default function MenuItem({ item }) {
  const { name, image, description, price } = item;

  const { colors } = useTheme();

  const statusColors = {
    popular: { bg: "#fff3cd", text: "#856404" }, // Light Gold/Yellow
    new: { bg: colors.hoverBg, text: colors.primary900 }, // Thematic: Use a PRIMARY accent for 'New'
    vegan: { bg: "#d4edda", text: "#155724" }, // Light Green
    lactoseFree: { bg: "#e2d5ff", text: "#6f42c1" }, // Light Lavender/Purple
  };

  const newStyles = {
    bg: colors.hoverBg, // Use the theme's hover background for a subtle highlight
    text: colors.primary700, // Use the theme's dark subtext color
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
          className={`w-full h-full object-cover transform transition duration-400 hover:scale-105 block`}
        />

        {/* Badges overlay */}
        <div className="absolute top-2 left-2 flex flex-row gap-1 z-10 flex-wrap max-w-[90%]">
          {item.popular && (
            <Badge
              text="Popular"
              icon={Star}
              bgColor="bg-yellow-100 glow-animated shimmer-animated"
              textColor="text-yellow-800"
            />
          )}
          {item.new && (
            <Badge
              text="New"
              icon={TrendingUp}
              bgColor="bg-blue-100 shimmer-animated"
              textColor="text-blue-700"
            />
          )}

          {item.vegan && (
            <Badge
              text="Vegan"
              icon={Leaf}
              bgColor="bg-green-100"
              textColor="text-green-800"
            />
          )}
          {item.lactoseFree && (
            <Badge
              text="Dairy-Free"
              icon={Droplet}
              bgColor="bg-purple-100"
              textColor="text-purple-800"
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
