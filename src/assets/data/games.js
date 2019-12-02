export const postlist = [
    {id: 'challenge', img: 'beer', title: 'CHALLENGE', subtitle: 'Værste scoring', content: 'Alle deltagere skal finde deres værste scoring frem på mobilen. Alle deltagere stemmer på den værste scoring. Taberen drikker 5 tåre'},
    {id: 'challenge', img: 'beer', title: 'CHALLENGE', subtitle: 'Medusa', content: 'Alle deltagere lægger panden i bordet. ' + getRandomPlayer() + ' tæller ned fra 3 til nu, hvorefter alle deltagere skal kigge en anden deltager i øjnene. Alle deltagere der har øjenkontakt med nogen, bunder ud'},
    {id: 'challenge', img: 'beer', title: 'CHALLENGE', subtitle: 'Spotify challenge', content: getRandomPlayer() + ' er nu nynnemaster og den eneste der må se på telefonen.'},
    {id: 'challenge', img: 'beer', title: 'CHALLENGE', subtitle: 'Russisk roulette', content: 'Den der først slår en sekser skal bunde glasset. '},
    {id: 'challenge', img: 'beer', title: 'CHALLENGE', subtitle: 'Drik for helvede', content: getRandomPlayer() + ' skal drikke 5 tåre.'},

];

function getRandomPlayer() {
    if (localStorage.getItem("players") !== null) {
        let players = JSON.parse(localStorage.getItem("players"))
        let randomNumber = Math.floor(Math.random() * Math.floor(players.length));
        return players[randomNumber]
    } else {
        return "empty"
    }
}