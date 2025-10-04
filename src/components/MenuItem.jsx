import { Star, Leaf, TrendingUp, Droplet } from "lucide-react";
import Badge from "./Badge";
import { useState } from "react";

export default function MenuItem({ item }) {
  const { name, image, description, price } = item;
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-white rounded-3xl border-t-4 border-blue-500 overflow-hidden flex flex-col h-full shadow-md">
      {/* Image */}
      <div className="overflow-hidden rounded-t-3xl relative">
        <img
          src={"/menu/" + image}
          loading="lazy"
          alt={name}
          className={`w-full h-56 object-cover transform transition duration-400 hover:scale-105 ${
            loaded ? "opacity-100 blur-0" : "opacity-0 blur-lg"
          }`}
          onLoad={() => setLoaded(true)}
        />

        {/* Subtle skeleton background while loading */}
        {!loaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 animate-pulse"></div>
        )}

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
