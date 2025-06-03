import { create } from "zustand";

interface Recepi {
  id: number;
  name: string;
  ingredients: string[];
  instruction: string;
}

interface RecipeStore {
  recipes: Recepi[];
  addRecipe: (recipe: Recepi) => void;
  removeRecipe: (id: number) => void;
}

export const useRecipeStore = create<RecipeStore>((set) => ({
  recipes: [],

  addRecipe: (recipe) =>
    set((state) => ({ recipes: [...state.recipes, recipe] })),

  removeRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
}));
