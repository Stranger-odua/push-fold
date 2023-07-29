const people = [
    {id: 1, title: "Іваненко"},
    {id: 2, title: "Петренко"},
    {id: 4, title: "Михайленко"},
    {id: 7, title: "Василенко"},
    {id: 8, title: "Соколенко"},
    {id: 9, title: "Михайленко"},
];

// const Ran = [...people].reverse().find(person => person.title === 'Ran')
const Ran = people.findLast(person => person.title === 'Ran')

// console.log(`-> Ran: `, Ran);

const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

const reversedItems = items.toReversed();
console.log(reversedItems); // [3, 2, 1]
console.log(items); // [1, 2, 3]
