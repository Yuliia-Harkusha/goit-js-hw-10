export const renderCountryList = ({ flags, name }) => {
    return `
    <li class="country-list__item">
        <img class="country-list__flag" src = ${flags.svg} alt = ${name.official} width="30"/>
        <p class="country-list__name">${name.official}</p>
    </li>`;
};

export const renderCountryCard = ({ flags, name, capital, population, languages }) => {
    return `
    <div class="country-info__item">
        <img class="country-info__flag" src = ${flags.svg} alt = ${name.official} width="40"/>
        <h2 class="country-info__name">${name.official}</h2>
        </div>

        <p class="country-info__data"><span class="country-info__title">Capital: </span>${capital}</p>
        <p class="country-info__data"><span class="country-info__title">Population: </span>${population}</p>
        <p class="country-info__data"><span class="country-info__title">Languages: </span>${Object.values(languages)}</p>`;
};