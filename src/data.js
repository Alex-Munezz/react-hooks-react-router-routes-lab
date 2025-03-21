const movies = [
  {
    title: "Doctor Strange",
    time: 115,
    genres: ["Action", "Adventure", "Fantasy"],
  },
  {
    title: "Trolls",
    time: 92,
    genres: ["Animation", "Adventure", "Comedy", "Family", "Fantasy"],
  },
  {
    title: "Jack Reacher: Never Go Back",
    time: 118,
    genres: ["Action", "Adventure", "Crime", "Mystery", "Thriller"],
  },
];

const actors = [
  {
    name: "Benedict Cumberbatch",
    movies: ["Doctor Strange", "The Imitation Game", "Sherlock Holmes"],
  },
  {
    name: "Justin Timberlake",
    movies: ["Trolls", "Friends with Benefits", "The Social Network"],
  },
  {
    name: "Anna Kendrick",
    movies: ["Pitch Perfect", "Into The Wood"],
  },
  {
    name: "Tom Cruise",
    movies: [
      "Jack Reacher: Never Go Back",
      "Mission Impossible 4",
      "War of the Worlds",
      "Top Gun Maverick"
    ],
  },
];

const directors = [
  {
    name: "Scott Derrickson",
    movies: ["Doctor Strange", "Sinister", "The Exorcism of Emily Rose"],
  },
  {
    name: "Mike Mitchell",
    movies: ["Trolls", "Alvin and the Chipmunks: Chipwrecked", "Sky High"],
  },
  {
    name: "Edward Zwick",
    movies: ["Jack Reacher: Never Go Back", "Blood Diamon", "The Siege"],
  },
];

export { movies, actors, directors };