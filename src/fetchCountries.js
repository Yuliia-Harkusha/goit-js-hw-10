export const fetchCountries = name => {
    const BASE_URL = "https://restcountries.com/v3.1/name/";
    const filtersQuery = "?fields=name,capital,population,flags,languages";

    return fetch(`${BASE_URL}${name}${filtersQuery} `)
    .then(response => {
      if (!response.ok) {
      throw new Error(response.status);
    }
        return response.json();
    })
    .catch(error => {
     console.log("error", error);
  })
};