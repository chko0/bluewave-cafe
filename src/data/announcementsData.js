import { Calendar, Info, Sparkles } from "lucide-react";

export default [
  {
    id: "chai-latte",
    title: "New Chai Latte",
    message: "Limited seasonal blend available this week",
    icon: Sparkles,
    cta: { label: "View Menu", to: "/menu/hot-drinks" },
  },
  {
    id: "late-hours",
    title: "Open Until 11:00 PM",
    message: "Extended hours tonight for late study sessions",
    icon: Info,
  },
  {
    id: "board-game-night",
    title: "Board Games Night",
    message: "Friday at 7:00 PM - bring your friends!",
    icon: Calendar,
  },
];
