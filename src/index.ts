import { Chat } from "./contracts";
import { convertInternalChatToExternalType } from "./utils";

const chat: Chat = {
  title: "Demo chat",
  nodesList: [
    {
      firsName: "Jenkins",
      lastName: "Pendragon",
      age: 23,
      birthDate: "2000-01-01",
      shoppingItemsList: [
        {
          title: "Keyboard",
          price: 82,
          currency: "EURO",
          date: "2022-02-07T22:22:22.000Z",
        },
        {
          title: "Monitor",
          price: 200,
          currency: "EURO",
          date: "2022-02-07T21:22:22.000Z",
        },
      ],
    },
  ],
};

console.log(
  "Result:",
  JSON.stringify(convertInternalChatToExternalType(chat), null, 2)
);
