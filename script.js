/**
 * TODO: Sort movies by id, rank, and title through dynamic function
 * TODO: Create helper function called getMaxMovieObject() for finding max movie
 */

// List of movies

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
]

window.onload = function() {
    // call sortMoviesByRank() function
    let sortMovies = sortMoviesByRank(movies);
    sortMovies = sortMoviesByAttr(movies, "id");

    // Display Movies list

    //displayMovies(movies);
    displayMovies(sortMovies);
}

/**
 * Display list of movies in a table
 */

function displayMovies(movies) {
    let table = "<table border='1' style='width: 100%'>";
    table += "<tr><th>ID</th><th>Name</th><th>Rank</th></tr>";
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


/**
 * Sort movies by rank from greatest to smallest 
 */

function sortMoviesByRank(movies) {
    for (let j = 0; j < movies.length - 1; j++) {

        // {title: "Fight Club",rank: 10,id: "tt0137523"}
        let maxObject = movies[j];
        let maxLocation = j;

        for (let i = j; i < movies.length; i++) {
            // if we found object with higher rank then replace maxObject with the new object 
            // movies[i]["rank"] > maxObject["rank"]
            if (movies[i].rank > maxObject.rank) {
                maxObject = movies[i];
                maxLocation = i;
            }
        }
        // Swap the first and max object in Movie Database 
        movies[maxLocation] = movies[j];
        movies[j] = maxObject;
    }
    // return the sorted Movie Database
    return movies;
}

/**
 * Sort movies by an attribute
 * @param sortAttr pass in 'id', 'title', or 'rank' to sort by
 */
function sortMoviesByAttr(movies, sortAttr) {

    for (let j = 0; j < movies.length - 1; j++) {
        // {title: "Fight Club",rank: 10,id: "tt0137523"}
        let maxObject = movies[j];
        let maxLocation = j;

        for (let i = j; i < movies.length; i++) {
            if (sortAttr == 'rank') {
                // if we found object with higher rank then replace maxObject with the new object 
                // movies[i]["rank"] > maxObject["rank"]
                if (movies[i].rank > maxObject.rank) {
                    maxObject = movies[i];
                    maxLocation = i;
                }
            } else if (sortAttr == 'id') {
                // if we found object with higher rank then replace maxObject with the new object 
                // movies[i]["rank"] > maxObject["rank"]
                if (movies[i].id > maxObject.id) {
                    maxObject = movies[i];
                    maxLocation = i;
                }
            } else if (sortAttr == 'title') {
                // if we found object with higher rank then replace maxObject with the new object 
                // movies[i]["rank"] > maxObject["rank"]
                if (movies[i].title > maxObject.title) {
                    maxObject = movies[i];
                    maxLocation = i;
                }
            } else {
                return;
            }
        }
        // Swap the first and max object in Movie Database 
        movies[maxLocation] = movies[j];
        movies[j] = maxObject;
    }
    // return the sorted Movie Database
    return movies;
}



/**
 * Retrieve the max movie object based on attribute
 * HINT: make sure you are comparing the right attribute
 */
function getMaxMovieObject(movies, start, sortAttr) {
    // Code from previous findMaxHelper() function
    let maximum = numbers[start];
    let max_location = start

    for (let i = start; i < numbers.length; i++) {
        if (numbers[i] > maximum) {
            maximum = numbers[i]
            max_location = i
        }
    }
    return { max_number: maximum, max_index: max_location }
}