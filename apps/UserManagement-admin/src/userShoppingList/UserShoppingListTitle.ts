import { UserShoppingList as TUserShoppingList } from "../api/userShoppingList/UserShoppingList";

export const USERSHOPPINGLIST_TITLE_FIELD = "id";

export const UserShoppingListTitle = (record: TUserShoppingList): string => {
  return record.id?.toString() || String(record.id);
};
