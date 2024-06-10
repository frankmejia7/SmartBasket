import { ShoppingListProductWhereInput } from "./ShoppingListProductWhereInput";
import { ShoppingListProductOrderByInput } from "./ShoppingListProductOrderByInput";

export type ShoppingListProductFindManyArgs = {
  where?: ShoppingListProductWhereInput;
  orderBy?: Array<ShoppingListProductOrderByInput>;
  skip?: number;
  take?: number;
};
