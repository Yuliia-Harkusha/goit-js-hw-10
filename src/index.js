import './css/styles.css';
const debounce = require('lodash.debounce');
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './fetchCountries';
import { renderCountryList, renderCountryCard } from './render';

const DEBOUNCE_DELAY = 300;

const refs = {
    textInput: document.querySelector('#search-box'),
    countryList: document.querySelector('.country-list'),
    countryInfo: document.querySelector('.country-info'),
};

refs.textInput.addEventListener('input', debounce(onSearchCountry, DEBOUNCE_DELAY));

function onSearchCountry() {
    const name = refs.textInput.value.trim().toLowerCase();
    
    if (name === '') {
        refs.countryList.innerHTML = '';
        refs.countryInfo.innerHTML = '';
        return;
    };

    fetchCountries(name)
        .then(countries => {
            if (countries.length > 10) {
                Notify.info('Too many matches found. Please enter a more specific name.');
                refs.countryList.innerHTML = '';
                refs.countryInfo.innerHTML = '';
                return;
            };

            if (countries.length > 2 && countries.length < 10) {
                const renderList = countries.map(country => (renderCountryList(country))).join('');
                refs.countryList.insertAdjacentHTML('beforeend', renderList);
                refs.countryInfo.innerHTML = '';
            };

            if (countries.length === 1) {
                const renderCard = countries.map(country => (renderCountryCard(country))).join('');
                refs.countryInfo.insertAdjacentHTML('beforeend', renderCard);
                refs.countryList.innerHTML = '';
            };
    
        }).catch(error => {
            Notify.failure('Oops, there is no country with that name');
            refs.countryList.innerHTML = '';
            refs.countryInfo.innerHTML = '';
            return;
        });

};



