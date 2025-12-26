import { useTheme } from "../../context/ThemeContext";
import BrandLogo from "../common/BrandLogo";

export default function Header({ ref }) {
  const { colors } = useTheme();

  return (
    <header
      ref={ref}
      className="relative z-10 text-white py-6 pt-18 shadow-lg relative overflow-hidden select-none"
      style={{
        background: `linear-gradient(to right, ${colors.primary700}, ${colors.primary600}, ${colors.primary500})`,
      }}
    >
      <div className="flex justify-center mt-1 mb-1">
        <BrandLogo />
      </div>
    </header>
  );
}
