import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { ProductUpdateManyWithoutSubcategoriesInput } from "./ProductUpdateManyWithoutSubcategoriesInput";

export type SubcategoryUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  name?: string | null;
  products?: ProductUpdateManyWithoutSubcategoriesInput;
};
