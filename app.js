const fs = require(`fs`);

const maleNames = [`Grzegorz`, `Janusz`, `Marcel`, `Michał`, `Alex`, `Zbigniew`, `Tomasz`];
const femaleNames = [`Alicja`, `Małgorzata`, `Anna`, `Monika`, `Helena`, `Dorota`, `Aleksandra`, `Krstyna`];
const lastNames = [`Kowalski`, `Iksiński`, `Miechowska`, `Rabena`, `Piechota`, `Stryka`, `Wielga`];

const randChoice = (arr) => arr[Math.floor(Math.random() * arr.length)];

let people = [];

for (let i = 0; i < 20; i++) {
    const gender = Math.floor(Math.random() * 2) > 0 ? `M` : `F`;
    const lastName = randChoice(lastNames);
    const age = Math.floor(Math.random() * 60) + 18;
    let firstName = ``;

    if (gender === `M`) {
        firstName = randChoice(maleNames)
    } else {
        firstName = randChoice(femaleNames)
    }

    const email = `${firstName}.${lastName}@gmail.com`;

    let phoneNumber =`${Math.floor(100000000 + Math.random() * 900000000)}`;
    phoneNumber = phoneNumber.substring(0, 3)+`-`+phoneNumber.substring(3,6)+`-`+phoneNumber.substring(6,9)

    people.push({
        gender,
        firstName,
        lastName,
        age,
        phoneNumber,
        email,
    })
}

const peopleJSON = JSON.stringify(people);

fs.writeFile(`people.json`, peopleJSON, (err) => {
    if (err) {
        console.log(`Something went wrong`)
    } else {
        console.log(`File has been successfully generated! Check people.json.`)
    }
});