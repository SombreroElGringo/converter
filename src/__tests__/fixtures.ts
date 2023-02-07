import {
  Chat,
  ExtChat,
  ExtShopingItemType,
  IExtNodeElement,
  INodeElement,
  ShopingItemType,
  Timestamp,
} from "../contracts";

export const DATE_MOCK: string = "2022-01-01T12:00:00.000Z";

export const TIMESTAMP_MOCK: Timestamp = {
  nanos: 1641038400000000000,
  seconds: 1641038400,
};

export const BIRTHDATE_MOCK: string = "2000-01-01";

export const BIRTHDATE_TIMESTAMP_MOCK: Timestamp = {
  nanos: 946684800000000000,
  seconds: 946684800,
};

/**
 * Mock for internal data types.
 */
export const INTERNAL_SHOPPING_ITEM_TYPE_MOCK: ShopingItemType = {
  title: "Keyboard",
  currency: "EURO",
  price: 100,
  date: DATE_MOCK,
};

export const INTERNAL_NODE_ELEMENT_MOCK: INodeElement = {
  age: 23,
  birthDate: BIRTHDATE_MOCK,
  firsName: "Jenkins",
  lastName: "Pendragon",
  shoppingItemsList: [INTERNAL_SHOPPING_ITEM_TYPE_MOCK],
};

export const INTERNAL_NODE_ELEMENT_WITHOUT_SHOPPING_ITEMS_MOCK: INodeElement = {
  age: 23,
  birthDate: BIRTHDATE_MOCK,
  firsName: "Jenkins",
  lastName: "Pendragon",
  shoppingItemsList: undefined,
};

export const INTERNAL_CHAT_MOCK: Chat = {
  title: "Super Sales Chat",
  nodesList: [INTERNAL_NODE_ELEMENT_MOCK],
};

export const INTERNAL_CHAT_WITH_EMPTY_NODES_MOCK: Chat = {
  title: "Super Sales Chat with empty nodes",
  nodesList: [],
};

/**
 * Mock for external data types.
 */
export const EXTERNAL_SHOPPING_ITEM_TYPE_MOCK: ExtShopingItemType = {
  Title: INTERNAL_SHOPPING_ITEM_TYPE_MOCK.title,
  Currency: INTERNAL_SHOPPING_ITEM_TYPE_MOCK.currency,
  Price: INTERNAL_SHOPPING_ITEM_TYPE_MOCK.price,
  Date: TIMESTAMP_MOCK,
};

export const EXTERNAL_NODE_ELEMENT_MOCK: IExtNodeElement = {
  Age: INTERNAL_NODE_ELEMENT_MOCK.age,
  BirthDate: BIRTHDATE_TIMESTAMP_MOCK,
  FirsName: INTERNAL_NODE_ELEMENT_MOCK.firsName,
  LastName: INTERNAL_NODE_ELEMENT_MOCK.lastName,
  ShoppingItems: [EXTERNAL_SHOPPING_ITEM_TYPE_MOCK],
};

export const EXTERNAL_NODE_ELEMENT_WITH_EMPTY_SHOPPING_ITEMS_MOCK: IExtNodeElement =
  {
    Age: INTERNAL_NODE_ELEMENT_WITHOUT_SHOPPING_ITEMS_MOCK.age,
    BirthDate: BIRTHDATE_TIMESTAMP_MOCK,
    FirsName: INTERNAL_NODE_ELEMENT_WITHOUT_SHOPPING_ITEMS_MOCK.firsName,
    LastName: INTERNAL_NODE_ELEMENT_WITHOUT_SHOPPING_ITEMS_MOCK.lastName,
    ShoppingItems: [],
  };

export const EXTERNAL_CHAT_MOCK: ExtChat = {
  Title: INTERNAL_CHAT_MOCK.title,
  ChatItems: [EXTERNAL_NODE_ELEMENT_MOCK],
};

export const EXTERNAL_CHAT__WITH_EMPTY_NODES_MOCK: ExtChat = {
  Title: INTERNAL_CHAT_WITH_EMPTY_NODES_MOCK.title,
  ChatItems: [],
};
