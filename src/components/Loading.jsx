// Loading.jsx
import { useTheme } from "../context/ThemeContext";

// 💡 Accept a prop to control height
export default function Loading({ isFullHeight }) {
  const { colors } = useTheme();
  const spinnerColor = colors.primary500;

  return (
    // 💡 Apply flex-1, flex, and items-center/justify-center if isFullHeight is true
    <div
      className={`flex justify-center items-center py-16 ${
        isFullHeight ? "flex-1 flex" : ""
      }`}
    >
      <div
        className="w-10 h-10 border-4 border-t-transparent rounded-full animate-spin"
        style={{
          borderColor: spinnerColor,
          borderTopColor: "transparent",
        }}
      >
        {/* Placeholder for optional text like "Loading..." */}
      </div>
    </div>
  );
}
