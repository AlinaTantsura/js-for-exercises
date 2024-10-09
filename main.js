import "./homework_4.js";
import "./homework_5.js";
import "./homework_6.js";
import "./homework_7/homework_7.js";

// function makeTransaction(quantity, pricePerDroid, customerCredits){
//     const totalPrice = quantity * pricePerDroid;
//     if (totalPrice > customerCredits) {
//         return "Insufficient funds!";
//     }
//     else {
//         return `You ordered ${quantity} droids worth ${totalPrice} credits!`
//     }
// }

// // console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// // console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// // console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// // console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// // console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

// function formatMessage(message, maxLength) {
//     if (message.length <= maxLength) {
//         return message;
//     }
//     else {
//         return message.slice(0, maxLength) + "..."
//     }
// };

// // console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
// // console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
// // console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
// // console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
// // console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
// // console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"

// function checkForSpam(message) {
//     if (message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale')) {
//         return true
//     }

//     return false;
// }
// // console.log(checkForSpam("Latest technology news")); // false
// // console.log(checkForSpam("JavaScript weekly newsletter")); // false
// // console.log(checkForSpam("Get best sale offers now!")); // true
// // console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// // console.log(checkForSpam("Trust me, this is not a spam message")); // true
// // console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// // console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// function getShippingCost(country) {
//     let price = 0;
//     switch (country) {
//         case "China":
//             price = 100;
//             break;
//         case "Chile":
//             price = 250;
//             break;
//         case "Australia":
//             price = 170;
//             break;
//         case "Jamaica":
//             price = 120;
//             break;
//     };
//     if (price > 0) {
//         return `Shipping to ${country} will cost ${price} credits`;
//     }
//     else {
//         return "Sorry, there is no delivery to your country";
//     }
// }

// // console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
// // console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
// // console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
// // console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
// // console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
// // console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"

// function slugify(title) {
//     return title.toLowerCase().split(" ").join("-");
// }

// // console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
// // console.log(slugify("English for developer")); // "english-for-developer"
// // console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// // console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

// function makeArray(firstArray, secondArray, maxLength) {
//     const newArray = firstArray.concat(secondArray);
//     if (newArray.length <= maxLength) {
//         return newArray;
//     }
//     else {
//         return newArray.slice(0, maxLength);
//     }
// }

// // console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// // console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// // console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// // console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// // console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// // console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

// function filterArray(numbers, value) {
//     const result = [];

//     for (const number of numbers) {
//         if (number > value) {
//             result.push(number);
//         }
//     }

//     return result;
// }

// // console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// // console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// // console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// // console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// // console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// // test task 1

// const units = ["km", "m", "yd", "ft", "mm", "inch"];
// const unitsDependencies = [
//     { unitFrom: "yd", unitTo: "km", coefficient: 0.0009144},
//     { unitFrom: "yd", unitTo: "ft", coefficient: 3 },
//     { unitFrom: "km", unitTo: "m", coefficient: 1000 },
//     { unitFrom: "mm", unitTo: "inch", coefficient: 0.0393700787},
//     { unitFrom: "mm", unitTo: "m", coefficient: 0.001},
// ]

// const convertDistanceUnits = (convertFrom, value, convertTo) => {
//     if (!units.includes(convertFrom) || !units.includes(convertTo)) {
//         throw new Error("One or both units do not exist in dependencies")
//     }

//     let convertedValue = value;
//     let dependentUnit = convertFrom;
//     let i = unitsDependencies.length;

//     while (dependentUnit !== convertTo && i !== 0) {
//         unitsDependencies.forEach(item => {
//             if (dependentUnit === item.unitFrom) {
//                 convertedValue *= item.coefficient;
//                 if (item.unitTo === convertTo) {
//                     dependentUnit = convertTo;
//                     return;
//                 }
//                 else { 
//                     dependentUnit = item.unitTo;
//                 }
//             }
//             else if (dependentUnit === item.unitTo) {
//                 convertedValue /= item.coefficient;
//                 if (item.unitFrom === convertTo) {
//                     dependentUnit = convertTo;
//                     return;
//                 }
//                 else { 
//                     dependentUnit = item.unitFrom;
//                 }
//             }
//         })
//         i--;
//     }
        
//     return roundDistanceValue(convertedValue, 2);
// };

// // console.log(convertDistanceUnits("km", 1, "ft"));
// // console.log(convertDistanceUnits("km", 1, "ft"));
// // console.log(convertDistanceUnits("mm", 100000, "ft"));

// function roundDistanceValue(value, decimalPointsNumber){
//   return Number(value.toFixed(decimalPointsNumber));
// };

// // test task 2

// // const data=[
// //   { "name": "John", "email": "john2@mail.com" },
// //   { "name": "John", "email": "john1@mail.com" },
// //   { "name": "Jane", "email": "jane@mail.com" },
// //   { "name": "Alina", "email": "ane@mail.com" },
// // ]

// const handlers = [];
// const addNewHandler = (name, handler) => {
//   const isExistHandler = handlers.find((item) => item.name === name);
//   if (!isExistHandler) handlers.push({ name, handler });
// };

// addNewHandler("include", (data, condition) => {
//     const keys = Object.keys(condition);
//     return data.filter((item) => {
//         return keys.every(key => item[key] === condition[key])
//     });
// });
// addNewHandler("exclude", (data, condition) => {
//     const keys = Object.keys(condition);
//     return data.filter((item) => {
//         return !keys.every(key => item[key] === condition[key])
//     });
// });
// addNewHandler("sortBy", (data, condition) => {
//   const sortedData = [...data].sort((a, b) => a[condition].localeCompare(b[condition]));
//   return sortedData;
// });

// const runHandlers = (data, conditions) => {
//     // console.log(conditions);
//   const handlersNames = Object.keys(conditions);
//     const result = handlersNames.reduce((acc, key) => {
//         const currentHandler = handlers.find(handler => handler.name === key);
//         // console.log(currentHandler);
//         conditions[key].forEach(condition => {
//             acc = [...currentHandler.handler(acc, condition)];
//         });
//         return acc;
//     }, [...data])
//     console.log(result);
//   return result;
// };


// runHandlers(data, { include: [{ name: "John" }] });
// runHandlers(data, { include: [{ name: "John" }], sortBy: ["email"] });
// runHandlers(data, { sortBy: ["email"] });
// runHandlers(data, {exclude: [{ name: "John" }, { email: "john2@mail.com" }]});
// runHandlers(data, {exclude: [{ name: "John", email: "john2@mail.com" }]});


// Test task-3

// const getRandomNumber = (min, max) => {
//     return Math.random() * (max - min) + min;
// };

// const getDistanceBetweenPoints = (point1, point2) => {
//   const distance = ((point2.x - point1.x) ** 2 + (point2.y - point1.y) ** 2 + (point2.z - point1.z) ** 2 ) ** 0.5;
//   console.log(distance)
//     return distance;
// };

// getDistanceBetweenPoints({ x: 1, y: 6, z: 0 }, { x: 10, y: 6, z: 0 });
// getDistanceBetweenPoints({ x: 1, y: 6, z: 0 }, { x: 10, y: 8, z: 0 });
// getDistanceBetweenPoints({ x: 1, y: 6, z: 0 }, { x: 10, y: 8, z: 3 });

// Test task 4
const data = [
  {
    "id": "q_001",
    "question": "What is your marital status?",
    "answers": [
      { "nextQuestionId": "q_002", "value": "Single" },
      { "nextQuestionId": "q_003", "value": "Married" },
    ]
  },
  {
    "id": "q_002",
    "question": "Are you planning on getting married next year?",
    "answers": [
      { "nextQuestionId": null, "value": "Yes" },
        { "nextQuestionId": null, "value": "No" },
      
    ]
  },
  {
    "id": "q_003",
    "question": "How long have you been married?",
    "answers": [
      { "nextQuestionId": null, "value": "Less than a year" },
      { "nextQuestionId": "q_004", "value": "More than a year" }
    ]
  },
  {
    "id": "q_004",
    "question": "Have you celebrated your one year anniversary?",
    "answers": [
      { "nextQuestionId": null, "value": "Yes" },
      { "nextQuestionId": null, "value": "No" }
    ]
  },
//     "id": "q_005",
//     "question": "Will you are going to celebrate your one year anniversary?",
//     "answers": [
//       { "nextQuestionId": "q_007", "value": "Yes" },
//       { "nextQuestionId": null, "value": "No" }
//     ]
//   },
//   {
//     "id": "q_006",
//     "question": "Do you have a boyfriend/girlfriend?",
//     "answers": [
//       { "nextQuestionId": null, "value": "Yes" },
//       { "nextQuestionId": null, "value": "No" }
//     ]
//   },
//   {
//     "id": "q_007",
//     "question": "Where are you going to celebrate?",
//     "answers": [
//       { "nextQuestionId": null, "value": "At home" },
//       { "nextQuestionId": null, "value": "At the restaurant" }
//     ]
//   },
]

// const testQuestioner = () => {
//   const result = [];

//     const stack = [{ questionId: data[0].id, dialog: [] }];
//     while (stack.length > 0) {
//         const { questionId, dialog } = stack.pop();
//         const question = data.find(q => q.id === questionId);

//         if (!question.answers.some(answer => answer.nextQuestionId)) {
//             const answersValue = question.answers.map(answer => answer.value);
//             const newDialog = [...dialog, { question: question.question, answer: answersValue.join("/")}];
//             result.push(newDialog.map(item => ({[`"${item.question}"`]: item.answer})));
//         }
//         else {
//             question.answers.forEach(answer => {
//                 const newDialog = [...dialog, { question: question.question, answer: answer.value }];
//                 if (!answer.nextQuestionId) {
//                     result.push(newDialog.map(item => ({[`"${item.question}"`]: item.answer})));
//                 }
//                 else {
//                     stack.push({ questionId: answer.nextQuestionId, dialog: newDialog });
//                 }
//             })
//         }

//     }

//     console.log(result);

//   return result;
// };

// testQuestioner();
