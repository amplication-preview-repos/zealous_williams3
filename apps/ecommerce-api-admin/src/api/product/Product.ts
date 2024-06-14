import { Subcategory } from "../subcategory/Subcategory";

export type Product = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  price: number | null;
  subcategory?: Subcategory | null;
  updatedAt: Date;
};
