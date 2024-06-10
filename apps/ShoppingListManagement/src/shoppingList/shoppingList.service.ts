import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ShoppingListServiceBase } from "./base/shoppingList.service.base";

@Injectable()
export class ShoppingListService extends ShoppingListServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
