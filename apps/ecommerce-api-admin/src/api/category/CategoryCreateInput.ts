import { SubcategoryCreateNestedManyWithoutCategoriesInput } from "./SubcategoryCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  name?: string | null;
  subcategories?: SubcategoryCreateNestedManyWithoutCategoriesInput;
};
