import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { ProductCreateNestedManyWithoutSubcategoriesInput } from "./ProductCreateNestedManyWithoutSubcategoriesInput";

export type SubcategoryCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  name?: string | null;
  products?: ProductCreateNestedManyWithoutSubcategoriesInput;
};
