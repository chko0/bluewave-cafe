import { Coffee, Star, CupSoda, Croissant, Cake, Sandwich } from "lucide-react";

const menuData = {
  Coffee: {
    icon: Coffee,
    items: [
      {
        name: "Espresso",
        price: 3,
        description: "Strong and rich, made from finely ground beans",
        image:
          "https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Americano",
        price: 3.5,
        description: "Espresso diluted with hot water for a smoother taste",
        image:
          "https://images.unsplash.com/photo-1580661869408-55ab23f2ca6e?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Cappuccino",
        price: 4,
        description: "Espresso topped with steamed milk foam",
        image:
          "https://images.unsplash.com/photo-1620052087057-bfd8235f5874?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Latte",
        price: 4.5,
        description: "Creamy blend of espresso and steamed milk",
        image:
          "https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: true,
      },
      {
        name: "Almond Latte",
        price: 4.5,
        popular: true,
        new: false,
        vegan: true,
        lactoseFree: true,
        image:
          "https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Almond milk latte with rich espresso flavor",
      },
      {
        name: "Mocha",
        price: 5,
        description: "Espresso mixed with chocolate and steamed milk",
        image:
          "https://images.unsplash.com/photo-1618576230663-9714aecfb99a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },

  Pastries: {
    icon: Croissant,
    items: [
      {
        name: "Croissant",
        price: 2.5,
        description: "Flaky and buttery French pastry",
        image:
          "https://images.unsplash.com/photo-1612366747681-e4ca6992b1e9?q=80&w=804&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        vegetarian: true,
      },
      {
        name: "Muffin",
        price: 2,
        description: "Soft baked treat with chocolate chips",
        image:
          "https://images.unsplash.com/photo-1599394922679-1214f9ee16e8?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: true,
      },
      {
        name: "Cinnamon Roll",
        price: 3,
        description: "Sweet roll filled with cinnamon and topped with icing",
        image:
          "https://horizon.com/wp-content/uploads/recipe-cin-roll-hero.jpg",
        vegetarian: true,
      },
      {
        name: "Cheesecake Slice",
        price: 4,
        description: "Rich and creamy classic cheesecake",
        image:
          "https://images.unsplash.com/photo-1676300186833-057912886971?q=80&w=695&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        vegetarian: true,
      },
      {
        name: "Almond Croissant",
        price: 3,
        description: "Flaky croissant with almond cream filling",
        image:
          "https://images.unsplash.com/photo-1759303380903-11154bc5d5bf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Strawberry Croissant",
        price: 4,
        description: "Buttery croissant filled with fresh strawberries",
        image:
          "https://images.unsplash.com/photo-1721324412655-63d4885d9e67?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Chocolate Croissant",
        price: 3,
        description: "Buttery croissant filled with rich chocolate",
        image:
          "https://airfryingfoodie.com/wp-content/uploads/2022/04/Air-Fryer-chocolate-Croissants-1.jpg",
      },
      {
        name: "Blueberry Muffin",
        price: 2.5,
        description: "Soft muffin with fresh blueberries",
        image:
          "https://images.unsplash.com/photo-1637087788449-222cf1da072a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: true,
      },
      {
        name: "Brownie",
        price: 2.5,
        description: "Rich and fudgy chocolate brownie",
        image:
          "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        new: true,
      },
    ],
  },

  Sandwiches: {
    icon: Sandwich,
    items: [
      {
        name: "Club Sandwich",
        price: 6.5,
        description: "Triple-layered sandwich with turkey, bacon, and lettuce",
        image:
          "https://images.unsplash.com/photo-1741414203946-9d8e45350f04?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: true,
      },
      {
        name: "Grilled Cheese",
        price: 4,
        description: "Golden grilled bread with melted cheese",
        image:
          "https://images.unsplash.com/photo-1528736235302-52922df5c122?q=80&w=1254&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Chicken Panini",
        price: 6,
        description: "Pressed sandwich with grilled chicken and veggies",
        image:
          "https://rms-media-prod.generalmills.com/f1af6bb4-f8a4-44ca-b4c2-2721631d173c.jpg",
      },
      {
        name: "Vegetarian Burger",
        price: 4.5,
        description: "Juicy and flavorful vegetarian patty",
        image:
          "https://images.unsplash.com/photo-1552422273-f56265a5f375?q=80&w=1340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        vegan: true,
        new: true,
      },
      {
        name: "Bagel",
        price: 3,
        description: "Soft and fluffy bagel",
        image:
          "https://images.unsplash.com/photo-1726733947933-a9e406f84d9a?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        new: true,
      },
    ],
  },

  Drinks: {
    icon: CupSoda,
    items: [
      {
        name: "Iced Tea",
        price: 2.5,
        description: "Refreshing chilled tea with lemon",
        image:
          "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: true,
        new: true,
      },
      {
        name: "Lemonade",
        price: 3,
        description: "Freshly squeezed lemon juice with sugar and mint",
        image:
          "https://images.unsplash.com/photo-1656936632096-59fcacae533f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Smoothie",
        price: 5,
        description: "Blend of seasonal fruits and yogurt",
        image:
          "https://images.unsplash.com/photo-1622597468620-656aa1f981ea?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        lactoseFree: true,
      },
      {
        name: "Hot Chocolate",
        price: 3.5,
        description: "Creamy cocoa drink with added milk",
        image:
          "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },

  Breakfast: {
    icon: Star,
    items: [
      {
        name: "Pancakes",
        price: 5,
        description: "Stack of fluffy pancakes with maple syrup and berries",
        image:
          "https://images.unsplash.com/photo-1587339144367-f1cacbecac82?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        vegan: true,
      },
      {
        name: "Omelette",
        price: 4.5,
        description: "Three-egg omelette with cheese and herbs",
        image:
          "https://images.unsplash.com/photo-1677844592730-ce9c936d8f1a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "French Toast",
        price: 5,
        description: "Golden bread slices soaked in eggs and milk",
        image:
          "https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        new: true,
      },
    ],
  },

  Desserts: {
    icon: Cake,
    items: [
      {
        name: "Chocolate Cake",
        price: 4.5,
        description: "Rich and moist chocolate sponge cake",
        image:
          "https://images.unsplash.com/photo-1642589077594-8974a43dcb4f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Ice Cream Sundae",
        price: 3,
        description: "Vanilla ice cream with chocolate syrup and nuts",
        image:
          "https://images.unsplash.com/photo-1657225953401-5f95007fc8e0?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Apple Pie",
        price: 3.5,
        description: "Classic pie with cinnamon-spiced apple filling",
        image: "https://picsum.photos/seed/applepie/200",
        new: true,
        popular: true,
      },
    ],
  },
};

export default menuData;
