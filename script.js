// List of IMDB Movie Database (array of objects)

let movies = [{
        title: "Fight Club",
        rank: 10,
        id: "tt0137523"
    },
    {
        title: "The Shawshank Redemption",
        rank: 1,
        id: "tt0111161"
    },
    {
        title: "The Lord of the Rings: The Return of the King",
        rank: 9,
        id: "tt0167260"
    },
    {
        title: "The Godfather",
        rank: 2,
        id: "tt0068646"
    },
    {
        title: "The Good, the Bad and the Ugly",
        rank: 5,
        id: "tt0060196"
    },
    {
        title: "The Godfather: Part II",
        rank: 3,
        id: "tt0071562"
    },
    {
        title: "The Dark Knight",
        rank: 6,
        id: "tt0468569"
    },
    {
        title: "Pulp Fiction",
        rank: 4,
        id: "tt0110912"
    },
    {
        title: "Schindler's List",
        rank: 8,
        id: "tt0108052"
    },
    {
        title: "12 Angry Men",
        rank: 7,
        id: "tt0050083"
    }
];

// Execute a JavaScript immediately after a page has been loaded

window.onload = function() {
    // call sortMoviesByRank() function
    let sortMovies = sortMoviesByRank(movies);
    // call sortMoviesByRank() function
    sortMovies = sortMoviesByAttr(movies, "rank");
    // Display Movies list
    displayMovies(sortMovies);
}

//  Display list of movies in a table

function displayMovies(movies) {
    //let table = "<table border='1' style='width: 100%'>";
    let table = "<table style='width: 100%'>";
    table += "<caption> <h1>Sort IMDB Movie Database</h1></caption><tr><th>ID</th><th>Name</th><th>Rank</th></tr>";
    for (let index = 0; index < movies.length; index++) {
        table += "<tr>";
        table += "<td>" + movies[index].id + "</td>";
        table += "<td>" + movies[index].title + "</td>";
        table += "<td>" + movies[index].rank + "</td>";
        table += "</tr>"
    }
    // Close the table
    table += "</table>";
    document.getElementById("movies-list").innerHTML = table;
}

// Sort movies by rank from greatest to smallest

function sortMoviesByRank(movies) {
    // run as many times as there are an object
    for (let j = 0; j < movies.length - 1; j++) {

        // {title: "Fight Club",rank: 10,id: "tt0137523"}
        let maxObject = movies[j];
        let maxlocation = j;

        for (let i = j; i < movies.length; i++) {
            // if we found object with higher rank replace maxObject with the new object
            // movies[i]["rank"] > maxObject["rank"]
            if (movies[i].rank > maxObject.rank) {
                maxObject = movies[i];
                maxlocation = i;
            }
        }
        // Swap the first and max object in Movie Database
        movies[maxlocation] = movies[j];
        movies[j] = maxObject;
    }
    // return the sorted Movie Database
    return movies;
}

/**
 *  a flexible(dynamic) function to Sort movies by an attribute
 *  @param sortAttr pass in 'id', 'title', or 'rank' to sort by
 */

function sortMoviesByAttr(movies, sortAttr) {
    // run as many times as there are an object
    for (let j = 0; j < movies.length - 1; j++) {

        // {title: "Fight Club",rank: 10,id: "tt0137523"}
        let max = getMaxMovieObject(movies, j, sortAttr);
        let maxObject = max.max_object;
        let maxlocation = max.max_ocation;

        // Swap between the first and max object in Movie Database
        movies[maxlocation] = movies[j];
        movies[j] = maxObject;
    }
    // return the sorted Movie Database
    return movies;
}

/**
 *  a helper function for sortMoviesByAttr()
 *  Retrieve the max movie object based on attribute(finding max movie)
 */

function getMaxMovieObject(movies, start, sortAttr) {
    // label first movie to be the maximum
    let maxObject = movies[start];
    let maxlocation = start;
    // iterate over the array (Movie Database) starting from the given index + 1
    for (let i = start + 1; i < movies.length; i++) {
        if (movies[i][sortAttr] > maxObject[sortAttr]) {
            // find max object and its index
            maxObject = movies[i];
            maxlocation = i;
        }
    }
    // return object with max attribute and its index
    return { max_object: maxObject, max_ocation: maxlocation };
}
