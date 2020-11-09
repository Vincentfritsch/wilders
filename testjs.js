const people = ['JoHn', 'ChrISTiana', 'anThoNY', 'MARia', 'jaMeS', 'MIChaEl', 'jeNNIFeR'];

function strUcFirst(firstName){return (firstName + '').charAt(0).toUpperCase() + firstName.substr(1).toLowerCase();}

let newName = people.map(name =>  strUcFirst(name));