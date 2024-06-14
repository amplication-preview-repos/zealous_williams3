import { Subcategory } from "../subcategory/Subcategory";

export type Category = {
  createdAt: Date;
  id: string;
  name: string | null;
  subcategories?: Array<Subcategory>;
  updatedAt: Date;
};
