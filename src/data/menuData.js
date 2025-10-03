import { Coffee, Star, CupSoda, Croissant, Cake, Sandwich } from "lucide-react";

const menuData = {
  Coffee: {
    icon: Coffee,
    items: [
      {
        name: "Espresso",
        price: 3,
        description: "Strong & rich, made from finely ground beans",
        image: "espresso.jpg",
      },
      {
        name: "Americano",
        price: 3.5,
        description: "Espresso diluted with hot water for a smoother taste",
        image: "americano.jpg",
      },
      {
        name: "Cappuccino",
        price: 4,
        description: "Espresso topped with steamed milk foam",
        image: "cappuccino.jpg",
      },
      {
        name: "Latte",
        price: 4.5,
        description: "Creamy blend of espresso & steamed milk",
        image: "latte.jpg",
        popular: true,
      },
      {
        name: "Almond Latte",
        price: 4.5,
        popular: true,
        new: false,
        vegan: true,
        lactoseFree: true,
        image: "almond_latte.jpg",
        description: "Almond milk latte with rich espresso flavor",
      },
      {
        name: "Mocha",
        price: 5,
        description: "Espresso mixed with chocolate & steamed milk",
        image: "mocha.jpg",
      },
    ],
  },

  Pastries: {
    icon: Croissant,
    items: [
      {
        name: "Croissant",
        price: 2.5,
        description: "Flaky & buttery French pastry",
        image: "croissant.jpg",
      },
      {
        name: "Muffin",
        price: 2,
        description: "Soft baked treat with chocolate chips",
        image: "muffin.jpg",
        popular: true,
      },
      {
        name: "Cinnamon Roll",
        price: 3,
        description: "Sweet roll filled with cinnamon & topped with icing",
        image: "cinnamon_roll.jpg",
      },
      {
        name: "Cheesecake Slice",
        price: 4,
        description: "Rich & creamy classic cheesecake",
        image: "cheesecake.jpg",
        popular: true,
      },
      {
        name: "Almond Croissant",
        price: 3,
        description: "Flaky croissant with almond cream filling",
        image: "almond_croissant.jpg",
        vegan: true,
      },
      {
        name: "Strawberry Croissant",
        price: 4,
        description: "Buttery croissant filled with fresh strawberries",
        image: "strawberry_croissant.jpg",
      },
      {
        name: "Chocolate Croissant",
        price: 3,
        description: "Buttery croissant filled with rich chocolate",
        image: "chocolate_croissant.jpg",
      },
      {
        name: "Blueberry Muffin",
        price: 2.5,
        description: "Soft muffin with fresh blueberries",
        image: "blueberry_muffin.jpg",
      },
      {
        name: "Brownie",
        price: 2.5,
        description: "Rich & fudgy chocolate brownie",
        image: "brownie.jpg",
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
        description: "Triple-layered sandwich with turkey, bacon, & lettuce",
        image: "club_sandwich.jpg",
        popular: true,
      },
      {
        name: "Grilled Cheese",
        price: 4,
        description: "Golden grilled bread with melted cheese",
        image: "grilled_cheese.jpg",
      },
      {
        name: "Classic Caprese Sandwich",
        price: 7,
        description:
          "Fresh mozzarella, tomato, basil pesto, grilled chicken, & balsamic glaze on toasted artisan bread",
        image: "classic_capress_sandwich.jpg",
      },
      {
        name: "Vegetarian Burger",
        price: 4.5,
        description: "Juicy & flavorful vegetarian patty",
        image: "vegetarian_burger.jpg",
        vegan: true,
        new: true,
      },
      {
        name: "Bagel",
        price: 3,
        description: "Soft bagel sandwich with eggs, onion, & lettuce",
        image: "bagel.jpg",
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
        image: "iced_tea.jpg",
        popular: true,
        new: true,
      },
      {
        name: "Lemonade",
        price: 3,
        description: "Freshly squeezed lemon juice with sugar & mint",
        image: "lemonade.jpg",
      },
      {
        name: "Smoothie",
        price: 5,
        description: "Blend of seasonal fruits & yogurt",
        image: "smoothie.jpg",
        lactoseFree: true,
      },
      {
        name: "Hot Chocolate",
        price: 3.5,
        description: "Creamy cocoa drink with added milk",
        image: "hot_chocolate.jpg",
      },
    ],
  },

  Breakfast: {
    icon: Star,
    items: [
      {
        name: "Pancakes",
        price: 5,
        description: "Stack of fluffy pancakes with maple syrup & berries",
        image: "pancakes.jpg",
      },
      {
        name: "Omelette",
        price: 4.5,
        description: "Three-egg omelette with cheese & herbs",
        image: "omelette.jpg",
      },
      {
        name: "French Toast",
        price: 5,
        description: "Golden bread slices soaked in eggs & milk",
        image: "french_toast.jpg",
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
        description: "Rich & moist chocolate sponge cake",
        image: "chocolate_cake.jpg",
      },
      {
        name: "Ice Cream Sundae",
        price: 3,
        description: "Vanilla ice cream with chocolate syrup & nuts",
        image: "ice_cream_sundae.jpg",
      },
      {
        name: "Apple Pie Slice",
        price: 3,
        description: "Classic pie with cinnamon-spiced apple filling",
        image: "apple_pie_slice.jpg",
        new: true,
        popular: true,
      },
    ],
  },
};

export default menuData;
