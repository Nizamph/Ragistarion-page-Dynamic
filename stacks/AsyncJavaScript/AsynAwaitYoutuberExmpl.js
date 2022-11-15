//Example for promise

// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// const promiseWifeBringingTicks = new Promise((resolve, reject) =>{
//     setTimeout(() => { 
//         resolve('ticket');
//     },0)
// });
 
// const getPopcorn = promiseWifeBringingTicks.then((t) => {
//     console.log('wife: i have the tics')
//     console.log('husband: we should go in');
//     console.log('wife: no i am hungry')
//     return new Promise((resolve, reject) => resolve(`${t} popcorn`))
// })

// const getButter = getPopcorn.then((t) => {
// console.log('i got some popcorn')
// console.log('Husband: we should go in');
// console.log('wife: i need butter on my popcorn');
// return new Promise((resolve, reject) => resolve(`${t} butter`))
// })

// const getCoolDrink = getButter.then((t) => {
// console.log('Husband: yeah i got butter, anything else darling')
// console.log('Wife: yup i want some cool drink too')
// return new Promise((resolve, reject) => resolve(`${t} cooldrink`))
// })
// getCoolDrink.then((t) => console.log(`here you go ${t}`))

// console.log('person4: shows ticket');
// console.log('person5: shows ticket')



//Exapmle for asinc await:-

console.log('person1: show ticket');
console.log('person2: shows ticket');

// const preMovie = async() => 'preMovie';

// preMovie().then((m) => console.log(m));

const preMovie = async () => {

    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000);
    });
    const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));

    const addButter = new Promise((resolve, reject) => resolve('butter'))

    const addCoolDrink = new Promise((resolve, reject) => resolve('Coca Cola'))

    let ticket = await promiseWifeBringingTicks;

    console.log(`wife: i have ${ticket}`)
    console.log('husband: we should go in');
    console.log('wife: no i am hungry')

    let popcorn = await getPopcorn

    console.log(`husband: i got some ${popcorn}`)
    console.log('Husband: we should go in');
    console.log('wife: i need butter on my popcorn');

    let butter = await addButter

    console.log(`husband: i got some ${butter}`)
    console.log('husband: anything else darling')
    console.log('yes i want some cooldrinks')

    let cooldrink = await addCoolDrink

    console.log(`husband:yeah i got some ${cooldrink}, anything else darling`);
    console.log('wife:No its more than enough,we are getting late');
    console.log('husband: thank you for the reminder');


    return ticket
}

preMovie().then((m) => console.log(`person3: shows ${m}`))


console.log('person4: show ticket');
console.log('person4: shows ticket');



