import { ShoppingListProduct as TShoppingListProduct } from "../api/shoppingListProduct/ShoppingListProduct";

export const SHOPPINGLISTPRODUCT_TITLE_FIELD = "id";

export const ShoppingListProductTitle = (
  record: TShoppingListProduct
): string => {
  return record.id?.toString() || String(record.id);
};
