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
const form = document.querySelector(".new-item-form");
// console.log(form.children);
// inputs
const type = document.querySelector("#type");
const toFrom = document.querySelector("#toFrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    // console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
    // console.log(doc);
    list.render(doc, type.value, "end");
});
//  tuples
let arr = ["ryu", 24, true];
arr[0] = false;
arr[1] = "yoshi";
arr = [30, false, "yoshi"];
let tup = ["roshi", 40, true];
tup[0] = "alvin";
tup[1] = 24;
let student;
student = ["eugene", 11185];
// GENERICS
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: "yoshi", age: 40 });
console.log(docOne);
// // // with interfaces
// interface Resource<T> {
//   uid: number;
//   resourceName: string;
//   data: T;
// }
// const docThree: Resource<object> = {
//   uid: 1,
//   resourceName: "person",
//   data: { name: "Alvin" },
// };
// const docFour: Resource<string[]> = {
//   uid: 2,
//   resourceName: "shoppingList",
//   data: ["bread", "milk", "eggs"],
// };
// console.log(docThree, docFour);
// ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docThree = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: "name of the wind" },
};
const docFour = {
    uid: 10,
    resourceType: ResourceType.PERSON,
    data: { name: "yoshi" },
};
console.log(docThree, docFour);
