export default async function getClients() {
    await fetch('http://localhost:3001/clients')
        .then(response => {
            return response.json()
        })
        .then(data => {
            // console.log(data)
            return data

        })
}

// fetch('https://swapi.co/api/planets/')
//         .then(response => {
//             return response.json();
//         }).then(data => {
//         initialPlanets = data.results.map((planet) => {
//             return planet
//         });
//         console.log(initialPlanets);
//         this.setState({
//             planets: initialPlanets,
//         });
//     });