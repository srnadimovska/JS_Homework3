// sobiranje na elementi od niza

const numbers = [5,22,-10,1258,3655,-2000,896,222,471,60,-23,200,890];

var sum = 0;
numbers.forEach((i) => sum += i);

console.log(sum);

console.log("----------");



// formiranje na niza za studenti so objekti



const student1 = {
    ime:"Stefan",
    prezime:"Stefanovski",
    prosek:8.5,
    grad:"Skopje",
}
   

const student2 = {
    ime:"Marko",
    prezime:"Markovski",
    prosek:9.5,
    grad:"Prilep",   
}
    

const student3 = {
    ime:"Lazar",
    prezime:"Lazarovski",
    prosek:9.66,
    grad:"Strumica",

}
   

const student4 =  {
    ime:"Marta",
    prezime:"Martovska",
    prosek:8.98,
    grad:"Tetovo",

}

const studenti = [student1,student2,student3,student4];
console.log(`Student: ${student1.ime} ${student1.prezime} od ${student1.grad} so prosek ${student1.prosek}`);
console.log(`Student: ${student2.ime} ${student2.prezime} od ${student2.grad} so prosek ${student2.prosek}`);
console.log(`Student: ${student3.ime} ${student3.prezime} od ${student3.grad} so prosek ${student3.prosek}`);
console.log(`Student: ${student4.ime} ${student4.prezime} od ${student4.grad} so prosek ${student4.prosek}`);

studenti.unshift({ime:"Dimitar", prezime:"Dimitrovski", prosek:9.99 , grad:"Bitola"});
console.log(studenti);
studenti.splice(2,0, {ime:"Vasko", prezime:"Vasev", prosek:10.00 , grad:"Ohrid"});
console.log(studenti);
const uspeh = studenti.filter(student => student.prosek > 9);
console.log("Studenti koi primaat stipendija se slednite :");
console.log(uspeh);

console.log("----------");

// formiranje na niza za studenti so niza vo niza

const students = [
    ["Stefan","Stefanovski",8.5,"Skopje"],
    ["Marko","Markovski", 9.5,"Prilep"],
    ["Lazar","Lazarovski",9.66,"Strumica"],
    ["Marta","Martovska",8.98,"Tetovo"],
];

console.log(students);

var lenght = students.push(["Ana","Angelova",7.0,"Kumanovo"]);
console.log(students);
console.log(`lenght: ${lenght}`);



const studentFlat = students.flat();
console.log(studentFlat);
console.log(studentFlat.join(" ** "));

// const findStudentOneLiner = (student) => students.includes("Ste");
// console.log(findStudentOneLiner("Ste"));

var filterStudent = students.filter((student) => 
{ return student.includes("Stefan");
});
console.log(filterStudent);

console.log("----------");

// niza so gradovi

const cities = [
    {
        city:"Skopje",
        population:616000,
        pollution:39,
    },

    {
        city:"Belgrade",
        population:1382000,
        pollution:97,
    },

    {
        city:"Zagreb",
        population:770000,
        pollution:90,
    },
];

console.log(cities);

for ( i = 0; i < cities.length; i++) 
{
    console.log(cities[i].city);
}

cities.unshift({
    city:"Sofia",
    population:1222000,
    pollution:80});
console.log(cities);

cities.splice(3,1, {city:"Tirana",
    population:528.000,
    pollution:48});
console.log(cities);

const Skopje = cities.find(grad => grad.city === "Skopje");
console.log(Skopje);

const nopollution = cities.filter( grad => grad.pollution < 50);
console.log(nopollution);

const million = cities.filter (grad => grad.population > 1000000);
console.log(million);

const startsWithS = cities.filter((grad) => grad.city.includes("S"));
console.log(startsWithS);

avg = 0;
cities.forEach((grad) => avg = avg + grad.population)
console.log(avg/cities.length);
























