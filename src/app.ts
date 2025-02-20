// const anchor = document.querySelector("a")!;

// // if (anchor) {
// //     console.log(anchor)
// // }

// console.log(anchor.href);

// const form = document.querySelector('form')!;

// Classes
// access modifiers: readonly, private, public
// class Invoice {
//   // readonly client: string;
//   // private details: string;
//   // public amount: number;

//   // constructor(c: string, d: string, a: number) {
//   //   this.client = c;
//   //   this.details = d;
//   //   this.amount = a;
//   // }
//   constructor(
//     readonly client: string,
//     private details: string,
//     public amount: number
//   ) {}

//   format() {
//     return `${this.client} owes $${this.amount} for ${this.details}`;
//   }
// }

// // Interfaces
// interface IsPerson {
//   name: string;
//   age: number;
//   speak(a: string): void;
//   spend(a: number): number;
// }

// const me: IsPerson = {
//   name: "Alvin",
//   age: 24,
//   speak(text: string): void {
//     console.log(text);
//   },
//   spend(amount: number): number {
//     console.log(`I spent , ${amount}`);
//     return amount;
//   },
// };

// const greetPerson = (person: IsPerson) => {
//   console.log("Hello", person.name);
// };

// greetPerson(me);

// console.log(me);

import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice("yoshi", "web work", 250);
// docTwo = new Payment("mario", "plumbing work", 200);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);

// const invOne = new Invoice("mario", "work on the mario website", 250);
// const invTwo = new Invoice("luigi", "work on the luigi website", 350);

// // console.log(invOne, invTwo);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// // invOne.client = "yoshi";
// invTwo.amount = 400;

// invoices.forEach((inv) => {
//   console.log(inv.client, inv.amount, inv.format());
// });

const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#toFrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;

  if (type.value === "invoice") {
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
  }

  // console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
  // console.log(doc);

  list.render(doc, type.value, "end");
});
