export const getCitiesMockEndpoint = () => {
  return Promise.resolve([
    {
      id: 1,
      name: "Paris",
      continent: 1,
      population: 35,
    },
    {
      id: 2,
      name: "London",
      continent: 1,
      population: 65,
    },
    {
      id: 3,
      name: "Athens",
      continent: 1,
      population: 10,
    },
    {
      id: 4,
      name: "China",
      continent: 2,
      population: 1000,
    },
    {
      id: 5,
      name: "Japan",
      continent: 2,
      population: 50,
    },
    {
      id: 6,
      name: "Vietnam",
      continent: 2,
      population: 5,
    },
    {
      id: 7,
      name: "Argentina",
      continent: 3,
      population: 150,
    },
    {
      id: 8,
      name: "Australia",
      continent: 5,
      population: 55,
    },
    {
      id: 9,
      name: "Philippines",
      continent: 2,
      population: 11,
    },
    {
      id: 10,
      name: "Chile",
      continent: 3,
      population: 6,
    },
  ]);
};
