import { Star } from "lucide-react";

export default function TestimonialCard({ testimonial }) {
  const { name, rating, quote, tag } = testimonial;

  return (
    <div
      className="rounded-2xl p-6 shadow-md flex flex-col w-full h-full bg-brand-active-text border-1 border-brand-border"
      // style={{ background: `linear-gradient(to bottom right, ${colors.lightBg}, white)` }}
    >
      {/* Quote */}
      <div className="overflow-hidden h-[4.5rem] sm:h-24 leading-6">
        <p className="text-base italic line-clamp-3 sm:line-clamp-4 text-brand-primary-900">
          “{quote}”
        </p>
      </div>

      {/* Footer */}
      <div className="mt-auto pt-4 border-t border-slate-50 flex items-end justify-between">
        <div>
          <span className="text-sm font-bold text-brand-primary-700">
            – {name}
          </span>
          <span className="text-[10px] uppercase tracking-widest font-black block text-brand-primary-600/80">
            {tag}
          </span>
        </div>

        {/* Rating (Stars) */}
        <div className="flex gap-0.5 pb-1">
          {Array.from({ length: rating }).map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-current text-brand-primary-600"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
