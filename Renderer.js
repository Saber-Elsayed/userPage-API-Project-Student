class Renderer {
  renderer(data) {
    $(".user-container").empty();
    $(".friends-container").empty();
    $(".quote-container").empty();
    $(".pokemon-container").empty();
    $(".meat-container").empty();
    this.renserUsers(data[0]);
    this.renderkanye(data[1]);
    this.renderPokemon(data[2]);
    this.renderBacon(data[3]);
  }

  renserUsers(users) {
    let userData = {
      first_name: users.results[0].name.first,
      last_name: users.results[0].name.last,
      title: users.results[0].name.title,
      img: users.results[0].picture.large,
      friends: [
        users.results[1].name.first + " " + users.results[1].name.last,
        users.results[2].name.first + " " + users.results[2].name.last,
        users.results[3].name.first + " " + users.results[3].name.last,
        users.results[4].name.first + " " + users.results[4].name.last,
        users.results[5].name.first + " " + users.results[5].name.last,
        users.results[6].name.first + " " + users.results[6].name.last,
      ],
    };

    let userTemplate = Handlebars.compile($("#user-template").html());
    let friendsTemplate = Handlebars.compile($("#friends-template").html());

    $(".user-container").append(userTemplate(userData));
    $(".friends-container").append(
      friendsTemplate({ friends: userData.friends })
    );
  }

  renderkanye(kanye) {
    let kanyeQuote = Handlebars.compile($("#kayne-template").html());
    $(".quote-container").append(kanyeQuote(kanye.quote));
  }

  renderPokemon(pokemon) {
    let pokemonQ = Handlebars.compile($("#pokemon-template").html());
    let img_pokemon = pokemon.sprites.front_default;
    let name = pokemon.name;
    $(".pokemon-container").append(pokemonQ({ img_pokemon, name }));
  }

  renderBacon(bacon) {
    let baconQ = Handlebars.compile($("#bacon-template").html());
    let baconValue = bacon[0];
    console.log(baconValue);
    $(".meat-container").append(baconQ({ baconValue }));
  }
}
