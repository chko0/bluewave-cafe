import { BrandLogo } from "@/components";

export default function Header({ ref }) {
  return (
    <header
      ref={ref}
      className="
          relative z-10 text-white py-8 pt-20 shadow-lg overflow-hidden select-none
          bg-gradient-to-r from-brand-primary-700 via-brand-primary-600 to-brand-primary-500"
    >
      <div className="flex justify-center mt-2">
        <BrandLogo size={65} />
      </div>
    </header>
  );
}
