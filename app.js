const faker = require('faker');
const fs = require("fs");
/* Generate Images */
const generateImages = (number) => {
  const images = [];
  while (number !== 0) {
    const value = faker.image.image();
    images.push(value);
    number--;
  }
  return images;
};

// console.log(generateImages(10));

const generateDate = () => {
    return faker.date.past();
  };

// console.log(generateDate(2021-11-11))

const generateParagraphs = (number) => {
  return faker.lorem.paragraphs(number);
};

// console.log(generateParagraphs(4))


// Code to generate User Mock data
const generatePersonsData = (number) => {
  const persons = [];
  while (number >= 0) {
    persons.push({
			id:number,
      name: faker.name.firstName(),
      description: faker.lorem.paragraphs(2),
      picture: faker.image.avatar(),
      country: faker.address.country(),
      joining_date: faker.date.future(),
    });
    number--;
  }
  return persons;
};

// console.log(generatePersonsData(3))

fs.writeFileSync(
  "./db.json",
  JSON.stringify({ users: generatePersonsData(20) })
);
