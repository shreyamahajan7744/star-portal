export const search = async (query, cat) => {
    let data = await fetch(`https://swapi.co/api/${cat}/?search=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(jsonData => jsonData);

    return data;
};

export const processPlanets = (results) => {
    const planets = results.map((planet) => {
        planet.population = isNaN(parseInt(planet.population)) ? 0 : parseInt(planet.population);
        return planet
    })
    if (planets.length > 1) {
        planets.sort((planet1, planet2) => planet1.population - planet2.population);
    }
    return planets;
}