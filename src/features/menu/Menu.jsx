import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
import { useState } from "react";

let fakeMenu = [
  {
    id: 1,
    name: "Margherita",
    unitPrice: 12,
    imageUrl:
      "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-1.jpg",
    ingredients: ["tomato", "mozzarella", "basil"],
    soldOut: false,
  },
  {
    id: 2,
    name: "Capricciosa",
    unitPrice: 14,
    imageUrl:
      "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-2.jpg",
    ingredients: ["tomato", "mozzarella", "ham", "mushrooms", "artichoke"],
    soldOut: true,
  },
  {
    id: 3,
    name: "Romana",
    unitPrice: 15,
    imageUrl:
      "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-3.jpg",
    ingredients: ["tomato", "mozzarella", "prosciutto"],
    soldOut: false,
  },
  {
    id: 4,
    name: "Prosciutto e Rucola",
    unitPrice: 16,
    imageUrl:
      "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-4.jpg",
    ingredients: ["tomato", "mozzarella", "prosciutto", "arugula"],
    soldOut: false,
  },
  {
    id: 5,
    name: "Diavola",
    unitPrice: 16,
    imageUrl:
      "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-5.jpg",
    ingredients: ["tomato", "mozzarella", "spicy salami", "chili flakes"],
    soldOut: false,
  },
  {
    id: 6,
    name: "Vegetale",
    unitPrice: 13,
    imageUrl:
      "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-6.jpg",
    ingredients: [
      "tomato",
      "mozzarella",
      "bell peppers",
      "onions",
      "mushrooms",
    ],
    soldOut: false,
  },
  {
    id: 7,
    name: "Napoli",
    unitPrice: 16,
    imageUrl:
      "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-7.jpg",
    ingredients: ["tomato", "mozzarella", "fresh tomato", "basil"],
    soldOut: false,
  },
  {
    id: 8,
    name: "Siciliana",
    unitPrice: 16,
    imageUrl:
      "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-8.jpg",
    ingredients: ["tomato", "mozzarella", "anchovies", "olives", "capers"],
    soldOut: true,
  },
  {
    id: 9,
    name: "Pepperoni",
    unitPrice: 14,
    imageUrl:
      "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-9.jpg",
    ingredients: ["tomato", "mozzarella", "pepperoni"],
    soldOut: false,
  },
  {
    id: 10,
    name: "Hawaiian",
    unitPrice: 15,
    imageUrl:
      "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-10.jpg",
    ingredients: ["tomato", "mozzarella", "pineapple", "ham"],
    soldOut: false,
  },
];

function Menu() {
  const menu = useLoaderData();

  return (
    <ul className="divide-y-200 divide-y-2">
      {menu.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
}

export async function loader() {
  return await getMenu();
}

export default Menu;
