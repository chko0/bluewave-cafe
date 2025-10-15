import {
  Coffee,
  Star,
  CupSoda,
  Croissant,
  Cake,
  Sandwich,
  Milk,
} from "lucide-react";

const menuData = {
  // --- 1. COFFEE ---
  Coffee: {
    icon: Coffee,
    items: [
      {
        name: "Espresso",
        price: 3,
        description:
          "Strong, rich shot made from finely ground specialty beans",
        image: "espresso.webp",
      },
      {
        name: "Americano",
        price: 3.5,
        description: "Bold espresso softened with hot water",
        image: "americano.webp",
      },
      {
        name: "Cappuccino",
        price: 4,
        description: "Espresso topped with steamed milk & velvety foam",
        image: "cappuccino.webp",
      },
      {
        name: "Latte",
        price: 4.5,
        description: "Creamy blend of espresso & steamed milk",
        image: "latte.webp",
        popular: true,
      },
      {
        name: "Almond Latte",
        price: 5,
        description: "Almond milk latte with rich espresso flavor",
        image: "almond_latte.webp",
        popular: true,
        vegan: true,
      },
      {
        name: "Mocha",
        price: 5,
        description: "Espresso mixed with premium chocolate & steamed milk",
        image: "mocha.webp",
      },
    ],
  },

  // --- 2. COLD BEVERAGES ---
  "Cold Drinks": {
    icon: CupSoda, // Keeping the soda icon for cold drinks
    items: [
      {
        name: "Iced Tea",
        price: 2.5,
        description: "Refreshing chilled black tea with lemon",
        image: "iced_tea.webp",
        popular: true,
        new: true,
      },
      {
        name: "Lemonade",
        price: 3,
        description: "Freshly squeezed lemon juice with a touch of mint",
        image: "lemonade.webp",
      },
      {
        name: "Smoothie",
        price: 5,
        description: "Blend of mixed berries, banana, & almond milk",
        image: "smoothie.webp",
        lactoseFree: true,
      },
    ],
  },

  // --- 3. HOT DRINKS ---
  "Hot Drinks": {
    icon: Milk,
    items: [
      {
        name: "Hot Chocolate",
        price: 3.5,
        description: "Warm & creamy cocoa drink",
        image: "hot_chocolate.webp",
      },
      {
        name: "Classic Hot Tea",
        price: 3.0,
        description: "Your choice of high-quality Black Tea or Earl Grey",
        image: "classic_hot_tea.webp", // New image
      },
      {
        name: "Chai Latte",
        price: 4.5,
        description:
          "Sweet & spicy black tea concentrate mixed with steamed milk",
        image: "chai_latte.webp", // New image
        popular: true,
      },
      {
        name: "Matcha Latte",
        price: 5.5,
        description:
          "Ceremonial grade Japanese matcha blended with steamed milk",
        image: "matcha_latte.webp", // New image
        new: true,
      },
    ],
  },

  // --- 4. BREAKFAST ---
  Breakfast: {
    icon: Star,
    items: [
      {
        name: "Pancakes",
        price: 6,
        description:
          "Stack of fluffy pancakes topped with maple syrup & fresh berries",
        image: "pancakes.webp",
      },
      {
        name: "Three-Egg Omelette",
        price: 6.5,
        description:
          "Omelette with cheddar, fresh herbs, served with sourdough toast",
        image: "omelette.webp",
      },
      {
        name: "French Toast",
        price: 5.5,
        description: "Golden bread slices with powdered sugar & maple syrup",
        image: "french_toast.webp",
        new: true,
      },
    ],
  },

  // --- 5. SANDWICHES ---
  Sandwiches: {
    icon: Sandwich,
    items: [
      {
        name: "Club Sandwich",
        price: 6,
        description:
          "Triple-layered sandwich with turkey, crispy bacon, lettuce & tomato",
        image: "club_sandwich.webp",
        popular: true,
      },
      {
        name: "Grilled Cheese",
        price: 4,
        description:
          "Golden grilled bread with a sharp cheddar & povolone blend",
        image: "grilled_cheese.webp",
      },
      {
        name: "Classic Caprese Panini",
        price: 7,
        description:
          "Fresh mozzarella, sliced tomato, basil pesto, & balsamic glaze",
        image: "classic_caprese_panini.webp",
        vegan: true,
      },
      {
        name: "Vegetarian Burger",
        price: 8,
        description: "Hearty black bean patty with fresh cilantro & lime aioli",
        image: "vegetarian_burger.webp",
        vegan: true,
        new: true,
      },
      {
        name: "Breakfast Bagel",
        price: 6.5,
        description:
          "Toasted everything bagel with egg, cheese, ham, tomato, & lettuce",
        image: "bagel.webp",
        new: true,
      },
    ],
  },

  // --- 6. PASTRIES ---
  Pastries: {
    icon: Croissant,
    items: [
      {
        name: "Croissant",
        price: 2.5,
        description: "Classic flaky & buttery French pastry",
        image: "croissant.webp",
      },
      {
        name: "Chocolate Croissant",
        price: 3,
        description: "Buttery pastry filled with rich dark chocolate",
        image: "chocolate_croissant.webp",
      },
      {
        name: "Strawberry Croissant",
        price: 4,
        description: "Buttery croissant filled with sweet, fresh strawberries",
        image: "strawberry_croissant.webp",
      },
      {
        name: "Almond Croissant",
        price: 4.5,
        description:
          "Flaky croissant with almond cream filling & sliced almonds",
        image: "almond_croissant.webp",
        vegan: true,
      },
      {
        name: "Muffin",
        price: 2,
        description: "Soft baked chocolate chip muffin",
        image: "muffin.webp",
        popular: true,
      },
      {
        name: "Blueberry Muffin",
        price: 2.5,
        description: "Soft muffin with fresh blueberries",
        image: "blueberry_muffin.webp",
      },
      {
        name: "Brownie",
        price: 3.5,
        description: "Rich & fudgy chocolate brownie",
        image: "brownie.webp",
        new: true,
      },
      {
        name: "Cinnamon Roll",
        price: 4,
        description: "Sweet roll filled with cinnamon & cream cheese icing",
        image: "cinnamon_roll.webp",
      },
      {
        name: "Cheesecake Slice",
        price: 4,
        description:
          "Rich, classic New York-style, topped with strawberry purée",
        image: "cheesecake.webp",
        popular: true,
      },
    ],
  },

  // --- 7. DESSERTS ---
  Desserts: {
    icon: Cake,
    items: [
      {
        name: "Chocolate Cake",
        price: 4.5,
        description:
          "Rich, moist chocolate sponge cake with dark ganache frosting",
        image: "chocolate_cake.webp",
      },
      {
        name: "Ice Cream Sundae",
        price: 3,
        description:
          "Vanilla ice cream with chocolate syrup, nuts, & a cherry on top",
        image: "ice_cream_sundae.webp",
      },
      {
        name: "Apple Pie Slice",
        price: 3,
        description:
          "Classic flaky crust pie with cinnamon-spiced apple filling",
        image: "apple_pie_slice.webp",
        new: true,
        popular: true,
      },
    ],
  },
};

export default menuData;
