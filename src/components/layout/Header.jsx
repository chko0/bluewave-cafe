import { BrandLogo } from "@/components";

export default function Header({ ref }) {
  return (
    <header
      ref={ref}
      className="
          relative z-10 text-white py-6 pt-18 shadow-lg relative overflow-hidden select-none
          bg-gradient-to-r from-brand-primary-700 via-brand-primary-600 to-brand-primary-500"
    >
      <div className="flex justify-center mt-1 mb-1">
        <BrandLogo />
      </div>
    </header>
  );
}
