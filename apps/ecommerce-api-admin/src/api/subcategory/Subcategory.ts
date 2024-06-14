import { Category } from "../category/Category";
import { Product } from "../product/Product";

export type Subcategory = {
  category?: Category | null;
  createdAt: Date;
  id: string;
  name: string | null;
  products?: Array<Product>;
  updatedAt: Date;
};
