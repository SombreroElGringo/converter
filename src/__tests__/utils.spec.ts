import {
  convertDateToTimestampType,
  convertInternalChatToExternalType,
  convertInternalNodeElementToExternalType,
  convertInternalShoppingItemToExternalType,
} from "../utils";
import {
  DATE_MOCK,
  EXTERNAL_CHAT_MOCK,
  EXTERNAL_CHAT__WITH_EMPTY_NODES_MOCK,
  EXTERNAL_NODE_ELEMENT_MOCK,
  EXTERNAL_NODE_ELEMENT_WITH_EMPTY_SHOPPING_ITEMS_MOCK,
  EXTERNAL_SHOPPING_ITEM_TYPE_MOCK,
  INTERNAL_CHAT_MOCK,
  INTERNAL_CHAT_WITH_EMPTY_NODES_MOCK,
  INTERNAL_NODE_ELEMENT_MOCK,
  INTERNAL_NODE_ELEMENT_WITHOUT_SHOPPING_ITEMS_MOCK,
  INTERNAL_SHOPPING_ITEM_TYPE_MOCK,
  TIMESTAMP_MOCK,
} from "./fixtures";

describe("src -> utils", () => {
  describe("convertDateToTimestampType", () => {
    it("should convert the date in timestamp data type.", () => {
      expect(convertDateToTimestampType(DATE_MOCK)).toMatchObject(
        TIMESTAMP_MOCK
      );
    });
  });

  describe("convertInternalShoppingItemToExternalType", () => {
    it("should convert the internal shopping item to the external type.", () => {
      expect(
        convertInternalShoppingItemToExternalType(
          INTERNAL_SHOPPING_ITEM_TYPE_MOCK
        )
      ).toMatchObject(EXTERNAL_SHOPPING_ITEM_TYPE_MOCK);
    });
  });

  describe("convertInternalNodeElementToExternalType", () => {
    it("should convert the internal node element to the external type.", () => {
      expect(
        convertInternalNodeElementToExternalType(INTERNAL_NODE_ELEMENT_MOCK)
      ).toMatchObject(EXTERNAL_NODE_ELEMENT_MOCK);
    });

    it("should convert an internal node element without shopping items to the external type.", () => {
      expect(
        convertInternalNodeElementToExternalType(
          INTERNAL_NODE_ELEMENT_WITHOUT_SHOPPING_ITEMS_MOCK
        )
      ).toMatchObject(EXTERNAL_NODE_ELEMENT_WITH_EMPTY_SHOPPING_ITEMS_MOCK);
    });
  });

  describe("convertInternalChatToExternalType", () => {
    it("should convert the internal chat to the external type.", () => {
      expect(
        convertInternalChatToExternalType(INTERNAL_CHAT_MOCK)
      ).toMatchObject(EXTERNAL_CHAT_MOCK);
    });

    it("should convert an internal chat with empty nodes to the external type.", () => {
      expect(
        convertInternalChatToExternalType(INTERNAL_CHAT_WITH_EMPTY_NODES_MOCK)
      ).toMatchObject(EXTERNAL_CHAT__WITH_EMPTY_NODES_MOCK);
    });
  });
});
