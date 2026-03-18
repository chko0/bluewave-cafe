export default function useNavigationHandler(setMenuOpen = () => {}) {
  const handleNavigation = (e, isActive) => {
    // 1. Close the menu (if a setter was provided)
    setMenuOpen(false);

    // 2. Prevent navigation if already on the page
    if (isActive) {
      e.preventDefault();
    }
  };

  return { handleNavigation };
}
