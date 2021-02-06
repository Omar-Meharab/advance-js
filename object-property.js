const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'manna'},
    {id: 51, name: 'sana'},
    {id: 11, name: 'Sipjol'}
]

const names = students.map (s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter (s => s.id > 10);
const biggerOne = students.find (s => s.id> 10);
console.log(biggerOne);
console.log(bigger);