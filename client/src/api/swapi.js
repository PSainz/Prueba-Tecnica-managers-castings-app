const urlsSwapi = [
    "https://swapi.dev/api/people/1",
    "https://swapi.dev/api/people/2",
    "https://swapi.dev/api/people/3",
    "https://swapi.dev/api/people/4",
    "https://swapi.dev/api/people/5",
    "https://swapi.dev/api/people/6",
    "https://swapi.dev/api/people/7",
    "https://swapi.dev/api/people/8",
    "https://swapi.dev/api/people/9",
    "https://swapi.dev/api/people/10"
];

export const fetchSwapiCharacters = async () => {
    try {
      const response = await Promise.all(
        urlsSwapi.map(url => fetch(url).then(res => res.json()))
      );

      console.log(response, "response Swapi");
      return response;
    } catch (error) {
      console.log(error ,"error");
    }
  };