import { Star, Leaf, TrendingUp, Droplet, Flower } from "lucide-react";
import Badge from "../ui/Badge";
import { useTheme } from "../../context/ThemeContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

export default function MenuItem({ index, item, highPriorityLoading }) {
  const { name, image, description, price } = item;

  const { colors } = useTheme();

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
          fetchPriority={highPriorityLoading ? "high" : "auto"}
          loading={highPriorityLoading ? "eager" : "lazy"}
          wrapperClassName="w-full h-full flex justify-center items-center"
          className={`select-none w-full h-full object-cover transform transition duration-400 hover:scale-105 block`}
        />

        {/* Badges overlay */}
        <div className="absolute top-0 left-0 w-full h-full rounded-t-3xl pointer-events-none z-0">
          {/* Subtle gradient overlay at the top for badge separation */}
          <div
            className="absolute top-0 left-0 w-full h-16 rounded-t-3xl"
            style={{
              background: `linear-gradient(to bottom right, ${colors.primary900}60, ${colors.primary900}50, 20%, transparent 60%)`,
              pointerEvents: "none",
            }}
          />
        </div>

        <div className="absolute top-2 left-2 flex flex-row gap-1.5 z-10 flex-wrap max-w-[90%]">
          {item.new && (
            <Badge variant="new" icon={TrendingUp}>
              New!
            </Badge>
          )}
          {item.popular && (
            <Badge variant="popular" icon={Star}>
              Popular
            </Badge>
          )}
          {item.seasonal && (
            <Badge variant="seasonal" icon={Flower}>
              Seasonal
            </Badge>
          )}
        </div>
      </div>

      {/* Text Content */}
      <div className="p-5 pt-3 pb-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-1 gap-2">
          <div className="flex flex-col flex-grow min-w-0">
            <div className="flex items-center flex-wrap gap-2 min-w-0">
              <h3
                className="text-xl md:text-2xl font-extrabold flex-shrink-0"
                style={{ color: colors.primary900 }}
              >
                {name}
              </h3>

              {/* Dietary Badges */}
              <div className="flex flex-row gap-1">
                {item.vegan && <Badge variant="vegan" icon={Leaf} />}
                {item.lactoseFree && (
                  <Badge variant="lactoseFree" icon={Droplet} />
                )}
              </div>
            </div>
          </div>

          <p
            className="font-bold text-lg flex-shrink-0"
            style={{ color: colors.primary600 }}
          >
            ${price}
          </p>
        </div>

        <p className="text-gray-700 text-sm flex-grow mt-0.5">{description}</p>
      </div>
    </div>
  );
}
