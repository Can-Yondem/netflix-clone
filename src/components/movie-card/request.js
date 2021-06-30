const key = "f919eeb355b6b88498edb61c38893ffb";
const url = "https://api.themoviedb.org/3/"

const movieGenreRequest = {
    "Trending": `${url}trending/all/week?api_key=${key}&language=en-US`,
    "Netflix Originals": `${url}discover/tv?api_key=${key}&with_networks=213`,
    "Top Rated": `${url}movie/top_rated?api_key=${key}&language=en-US`,
    "Action": `${url}discover/movie?api_key=${key}&with_genres=28`,
    "Adventure" : `${url}discover/movie?api_key=${key}&with_genres=12`,
    "Comedy": `${url}discover/movie?api_key=${key}&with_genres=35`,
    "Crime": `${url}discover/movie?api_key=${key}&with_genres=80`,
    "Documentary": `${url}discover/movie?api_key=${key}&with_genres=99`,
    "Fantasy": `${url}discover/movie?api_key=${key}&with_genres=14`,
    "Horror": `${url}discover/movie?api_key=${key}&with_genres=27`,
    "Western": `${url}discover/movie?api_key=${key}&with_genres=37`,
    "War": `${url}discover/movie?api_key=${key}&with_genres=10752`,
    "Family": `${url}discover/movie?api_key=${key}&with_genres=10751`,
}


export default movieGenreRequest;