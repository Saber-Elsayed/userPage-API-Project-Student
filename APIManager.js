//This is the class that will manage all your APIs
const numberOfResults = 7;
const apiUrl_users = `https://randomuser.me/api/?results=${numberOfResults}`;
const apiUrl_kanye = `https://api.kanye.rest`;
const api_Bacon = `https://baconipsum.com/api/?type=meat`;
class APIManager {
  constructor() {
    this.data = [];
  }
  get_api() {
    let randomNum = Math.floor(Math.random() * 949) + 1;
    let apipokemon = `https://pokeapi.co/api/v2/pokemon/${randomNum}/`;
    const Users = $.get(apiUrl_users);
    const Kayne = $.get(apiUrl_kanye);
    const pokemon = $.get(apipokemon);
    const Bacon = $.get(api_Bacon);
    return Promise.all([Users, Kayne, pokemon, Bacon]).then((data) => {
      this.data = data;
    });
  }
}
