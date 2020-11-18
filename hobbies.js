let hobbies = ['scuva diving','run','coding','read','play the guitar','hanging out'];

hobbies.forEach(hobbie =>{console.log(hobbie)})
hobbies = hobbies.filter(elem => !elem.includes('e'))
console.log(hobbies)