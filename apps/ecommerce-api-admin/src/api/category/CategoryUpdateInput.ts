import { SubcategoryUpdateManyWithoutCategoriesInput } from "./SubcategoryUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  name?: string | null;
  subcategories?: SubcategoryUpdateManyWithoutCategoriesInput;
};
