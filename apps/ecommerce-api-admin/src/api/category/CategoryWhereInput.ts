import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SubcategoryListRelationFilter } from "../subcategory/SubcategoryListRelationFilter";

export type CategoryWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  subcategories?: SubcategoryListRelationFilter;
};
