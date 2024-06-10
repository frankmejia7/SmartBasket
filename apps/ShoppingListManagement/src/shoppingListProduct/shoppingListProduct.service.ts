import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ShoppingListProductServiceBase } from "./base/shoppingListProduct.service.base";

@Injectable()
export class ShoppingListProductService extends ShoppingListProductServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
