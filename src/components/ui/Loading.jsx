import clsx from "clsx";
import Spinner from "./Spinner";

export default function Loading({
  fullHeight = false,
  size = "lg",
  className = "",
}) {
  return (
    <div
      className={clsx(
        "flex items-center justify-center py-16",
        fullHeight && "min-h-[60vh]"
      )}
    >
      <Spinner size={size} className={className} />
    </div>
  );
}
