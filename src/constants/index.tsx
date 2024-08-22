import React from "react";

export const colorTypes = {
  normal: "bg-gray-400",
  fire: "bg-red-500",
  water: "bg-blue-500",
  electric: "bg-yellow-400",
  grass: "bg-green-500",
  ice: "bg-blue-200",
  fighting: "bg-red-700",
  poison: "bg-purple-500",
  ground: "bg-yellow-800",
  flying: "bg-blue-300",
  psychic: "bg-pink-500",
  bug: "bg-green-400",
  rock: "bg-yellow-600",
  ghost: "bg-purple-700",
  dragon: "bg-blue-800",
  dark: "bg-gray-800",
  steel: "bg-gray-500",
  fairy: "bg-pink-300",
};

export const ColorTypeComponent: React.FC<{
  type: keyof typeof colorTypes;
}> = ({ type }) => {
  return <div className={colorTypes[type]}>{type}</div>;
};
