export const getContinentMockEndpoint = () => {
  return Promise.resolve([
    {
      id: 1,
      name: "Europe",
    },
    {
      id: 2,
      name: "Asia",
      population: 1040,
    },
    {
      id: 3,
      name: "South America",
      population: 3020,
    },
    {
      id: 4,
      name: "North America",
      population: 1540,
    },
    {
      id: 5,
      name: "Australia",
      population: 2987,
    },
    {
      id: 6,
      name: "Africa",
      population: 5612,
    },
    {
      id: 7,
      name: "Antarctica",
      population: 100,
    },
  ]);
};
