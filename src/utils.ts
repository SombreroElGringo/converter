import {
  Chat,
  ExtChat,
  ExtShopingItemType,
  IExtNodeElement,
  INodeElement,
  ShopingItemType,
  Timestamp,
} from "./contracts";

/**
 * Will convert the date into timestamp type.
 *
 * @param date the date to convert into timestamp type.
 * @return the date converted in timestamp.
 */
export const convertDateToTimestampType = (date: string): Timestamp => {
  const dateInMilliseconds = new Date(date).getTime();
  // 1 millisecond is equal to 1,000,000 nanoseconds.
  const dateTimeInNanoseconds = Math.floor(dateInMilliseconds * 1000000);
  // 1 millisecond is equal to 0.001 seconds.
  const dateTimeInSeconds = Math.floor(dateInMilliseconds / 1000);

  return {
    nanos: dateTimeInNanoseconds,
    seconds: dateTimeInSeconds,
  };
};

/**
 * Will convert the shopping item with an internal type into an external type.
 *
 * @param internalShoppingItemType the shopping item with the internal type
 * to convert into external type.
 * @return the shopping item converted in external type.
 */
export const convertInternalShoppingItemToExternalType = (
  internalShoppingItemType: ShopingItemType
): ExtShopingItemType => {
  const timestamp = convertDateToTimestampType(internalShoppingItemType.date);

  return {
    Title: internalShoppingItemType.title,
    Currency: internalShoppingItemType.currency,
    Price: internalShoppingItemType.price,
    Date: timestamp,
  };
};

/**
 * Will convert the node element with an internal type into an external type.
 *
 * @param internalNodeElement the node element with the internal type to convert
 * into external type.
 * @return the node element converted in external type.
 */
export const convertInternalNodeElementToExternalType = (
  internalNodeElement: INodeElement
): IExtNodeElement => {
  const timestamp = convertDateToTimestampType(internalNodeElement.birthDate);
  const externalShoppingItems: ExtShopingItemType[] = (
    internalNodeElement.shoppingItemsList || []
  ).map((internalShoppingItem) =>
    convertInternalShoppingItemToExternalType(internalShoppingItem)
  );

  return {
    Age: internalNodeElement.age,
    BirthDate: timestamp,
    FirsName: internalNodeElement.firsName,
    LastName: internalNodeElement.lastName,
    ShoppingItems: externalShoppingItems,
  };
};

/**
 * Will convert the chat with an internal type into an external type.
 *
 * @param internalChat the chat with the internal type to convert into external
 * type.
 * @return the chat converted in external type.
 */
export const convertInternalChatToExternalType = (
  internalChat: Chat
): ExtChat => {
  const externalNodeElements: IExtNodeElement[] = internalChat.nodesList.map(
    (internalNodeElement) =>
      convertInternalNodeElementToExternalType(internalNodeElement)
  );

  return {
    Title: internalChat.title,
    ChatItems: externalNodeElements,
  };
};
