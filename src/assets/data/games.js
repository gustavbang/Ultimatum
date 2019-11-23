export const postlist = [
    {id: 'challenge', img: 'beer', title: 'CHALLENGE', subtitle: 'Værste scoring', content: getRandomPlayer() + ' Alle deltagere skal finde deres værste scoring frem på mobilen. Alle deltagere stemmer på den værste scoring. Taberen drikker 5 tåre'},
    {id: 'challenge', img: 'beer', title: 'CHALLENGE', subtitle: 'Medusa', content: getRandomPlayer() + ' Alle deltagere lægger panden i bordet. “Navn” tæller ned fra 3 til nu, hvorefter alle deltagere skal kigge en anden i deltager i øjnene. Alle deltagere der har øjenkontakt med nogen, bunder ud'},
    {id: 'challenge', img: 'beer', title: 'CHALLENGE', subtitle: 'Spotify challenge', content: getRandomPlayer() + ' er nu nynnemaster og den eneste der må se på telefonen.'},
    {id: 'challenge', img: 'beer', title: 'CHALLENGE', subtitle: 'Russisk roulette', content: getRandomPlayer() + ' Den der først slår en sekser skal bunde glasset. '},
];

function getRandomPlayer() {
    if (localStorage.getItem("players") !== null) {
        let players = JSON.parse(localStorage.getItem("players"))
        let randomNumber = Math.floor(Math.random() * Math.floor(players.length));
        console.log(randomNumber)
        console.log(players)
        console.log(players[randomNumber])
        return players[randomNumber]
    } else {
        return "empty"
    }
}