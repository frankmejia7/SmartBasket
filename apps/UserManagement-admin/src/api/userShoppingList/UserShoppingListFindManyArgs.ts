import { UserShoppingListWhereInput } from "./UserShoppingListWhereInput";
import { UserShoppingListOrderByInput } from "./UserShoppingListOrderByInput";

export type UserShoppingListFindManyArgs = {
  where?: UserShoppingListWhereInput;
  orderBy?: Array<UserShoppingListOrderByInput>;
  skip?: number;
  take?: number;
};
