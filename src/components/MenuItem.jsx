import { Star, Leaf, TrendingUp, Droplet } from "lucide-react";
import Badge from "./Badge";
import { useTheme } from "../context/ThemeContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

export default function MenuItem({ item }) {
  const { name, image, description, price } = item;
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-white rounded-3xl border-t-4 border-blue-500 overflow-hidden flex flex-col h-full shadow-md">
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
        <div className="absolute top-2 left-2 flex flex-row gap-1 z-10">
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
      <div className="p-5 pt-3 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl md:text-2xl font-extrabold text-blue-900">
            {name}
          </h3>
          <p className="text-blue-600 font-bold text-lg">${price}</p>
        </div>

        <p className="text-gray-700 text-sm flex-grow">{description}</p>
      </div>
    </div>
  );
}
