import { Coffee, House, Info, MessageCircle } from "lucide-react";

export const NAVIGATION = [
  {
    label: "Home",
    path: "/",
    icon: House,
    description:
      "Fresh brews, warm smiles, & baked delights every day. Your cozy spot for coffee & comfort",
  },
  {
    label: "Menu",
    path: "/menu",
    icon: Coffee,
    description: "Our selection of incredible brews & fresh dishes",
  },
  {
    label: "Feedback",
    path: "/feedback",
    icon: MessageCircle,
    description:
      "Share your experience and help us improve! We value your feedback.",
  },
  {
    label: "About",
    path: "/about",
    icon: Info,
    description:
      "Learn the story behind BlueWave Café and our commitment to quality.",
  },
  {
    label: "Thanks for Feedback!",
    path: "/feedback/success",
    hidden: true,
  },
];
