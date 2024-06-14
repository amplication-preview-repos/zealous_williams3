/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Subcategory as PrismaSubcategory,
  Product as PrismaProduct,
  Category as PrismaCategory,
} from "@prisma/client";

export class SubcategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.SubcategoryCountArgs, "select">
  ): Promise<number> {
    return this.prisma.subcategory.count(args);
  }

  async subcategories<T extends Prisma.SubcategoryFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SubcategoryFindManyArgs>
  ): Promise<PrismaSubcategory[]> {
    return this.prisma.subcategory.findMany<Prisma.SubcategoryFindManyArgs>(
      args
    );
  }
  async subcategory<T extends Prisma.SubcategoryFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SubcategoryFindUniqueArgs>
  ): Promise<PrismaSubcategory | null> {
    return this.prisma.subcategory.findUnique(args);
  }
  async createSubcategory<T extends Prisma.SubcategoryCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SubcategoryCreateArgs>
  ): Promise<PrismaSubcategory> {
    return this.prisma.subcategory.create<T>(args);
  }
  async updateSubcategory<T extends Prisma.SubcategoryUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SubcategoryUpdateArgs>
  ): Promise<PrismaSubcategory> {
    return this.prisma.subcategory.update<T>(args);
  }
  async deleteSubcategory<T extends Prisma.SubcategoryDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SubcategoryDeleteArgs>
  ): Promise<PrismaSubcategory> {
    return this.prisma.subcategory.delete(args);
  }

  async findProducts(
    parentId: string,
    args: Prisma.ProductFindManyArgs
  ): Promise<PrismaProduct[]> {
    return this.prisma.subcategory
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .products(args);
  }

  async getCategory(parentId: string): Promise<PrismaCategory | null> {
    return this.prisma.subcategory
      .findUnique({
        where: { id: parentId },
      })
      .category();
  }
}
