export const postlist = [
    {id: 'challenge', img: 'beer', title: 'ALLE SPILLER', subtitle: 'Værste scoring', content: 'Alle deltagere skal finde deres værste scoring frem på mobilen. Alle deltagere stemmer på den værste scoring. Taberen drikker 5 tåre'},
    {id: 'alle_spiller', img: 'eye_contact', title: 'ALLE SPILLER', subtitle: 'Medusa', content: 'Alle deltagere lægger panden i bordet. ' + getRandomPlayer() + ' tæller ned fra 3 til nu, hvorefter alle deltagere skal kigge en anden deltager i øjnene. Alle deltagere der har øjenkontakt med nogen, bunder ud'},
    {id: 'challenge', img: 'beer', title: 'CHALLENGE', subtitle: 'Spotify challenge', content: getRandomPlayer() + ' er nu nynnemaster og den eneste der må se på telefonen.'},
    {id: 'challenge', img: 'beer', title: 'ALLE SPILLER', subtitle: 'Russisk roulette', content: 'Den der først slår en sekser skal bunde glasset. '},
    {id: 'challenge', img: 'beer', title: 'CHALLENGE', subtitle: 'Drik for helvede', content: getRandomPlayer() + ' skal drikke 5 tåre.'},
    {id: 'alle_spiller', img: 'beer', title: 'ALLE SPILLER', subtitle: 'Øllen/dåsen peger på', content: 'Den som øllen/dåsen peger på, skal op på gulvet og give deres bedste improvisation af Ole Wedel eller bunde glasset'},
    {id: 'challenge', img: 'beer', title: 'CHALLENGE', subtitle: 'Gæt et tal', content: 'Du har fået et tal som du ikke må dele med andre, Lad dine medspillere gætte hver især på et tal, den/dem som kommer tættest på skal dele antal tåre ud som tallet var '},
    {id: 'challenge', img: 'hand', title: 'CHALLENGE', subtitle: 'Den lumre hånd', content: 'Du har nu en lummer hånd. læg den på låret af en person ved siden af dig. fjerner personen ikke din eller italesætter den inden for 10 sekunder, skal vedkommende drikke 5 tåre.'},
    {id: 'challenge', img: 'camera', title: 'CHALLENGE', subtitle: 'Flash', content: getRandomPlayer() + ' vis dine venner hvor sjovt I har det! Du skal gå live på Facebook eller Instagram i minimum 5 min. eller bælle en hel øl.'},
    {id: 'challenge', img: 'closed_eyes', title: 'CHALLENGE', subtitle: 'Luk og smil', content: getRandomPlayer() + ' du skal have lukkede øjne og smile stort med tænderne, hver gang du taler til en anden deltager. Glemmer du det og bliver det påpeget, skal du drikke 3 tåre.'},
    {id: 'challenge', img: 'twerk', title: 'CHALLENGE', subtitle: 'Twerk it like Miley', content: getRandomPlayer() + ' du ligner en der er ved at falde i søvn. Vi skal vidst lige have rystet lidt gang i dine hofter… Vis os dine bedste twerk skills eller tag 5 tåre'},
    {id: 'challenge', img: 'tongue', title: 'CHALLENGE', subtitle: 'Slik', content: getRandomPlayer() + ' du skal slikke dig om munden hvergang nogen får øjenkontakt med dig. Glemmer du det straffes det med 3 tåre. Du må stoppe om fem spørgsmål.'},
    {id: 'challenge', img: 'beer', title: 'CHALLENGE', subtitle: 'Tale!', content: getRandomPlayer() + ', Hold en tale om hvor meget du værdsætter dem omkring dig. Du SKAL benytte alle 5 ord: slikdåse, lommetørklæde, javertus, kronhjort og sovs. Talen skal minimum vare 45 sek. og du må ikke holde lange kunstige pauser. Hvis du ikke holder talen kørende, tiden ud, eller hvis du glemmer et eller flere ord drikker du 5 tåre!'},
    {id: 'challenge', img: 'tongue', title: 'CHALLENGE', subtitle: 'LipSync', content: '“Så er det tid til at slå fast hvem festens bedste Britney er - spiller med telefonen udfordrer ' + getRandomPlayer() + ' til en omgang lip sync! Taberen drikker X antal slurke. Player 2 du er dommer.” (Skriv info)'},
    {id: 'challenge', img: 'hand', title: 'CHALLENGE', subtitle: 'Klap', content: getRandomPlayer() + ' klap højt hver gang nogen kommer med en god pointe'},
    {id: 'challenge', img: 'twerk', title: 'CHALLENGE', subtitle: 'Shake that ass!', content: getRandomPlayer() + ' Lad os se hvor løse de hofter er, skriv dit navn i luften... ...med numsen! '},
    {id: 'jeg_har_aldrig', img: 'beer', title: 'JEG HAR ALDRIG', subtitle: 'Commando!', content: 'Drik 5 tåre hvis du nogensinde har været i byen uden underbukser på!'},
    {id: 'læs_højt', img: 'beer', title: 'LÆS HØJT', subtitle: '3, 2, 1 - GO!', content: 'Den første der tager et stykke undertøj af må uddele en bunder!'},
    {id: 'læs_højt', img: 'beer', title: 'LÆS HØJT', subtitle: 'Prut', content: 'Den første spiller der slår en skid må dele 5 tåre ud'},
    {id: 'regel', img: 'beer', title: 'REGEL', subtitle: 'Bordet er giftigt!', content: 'Ingen må røre bordet de næste fem spørgsmål! Dette straffes med 5 tåre - hver gang!'},
    {id: 'læs_højt', img: 'beer', title: 'LÆS HØJT', subtitle: 'Hurtig på aftrækkeren: LÆS HØJT', content: 'Den første der bunder sin drink på give en bunder ud'},
    {id: 'challenge', img: 'selfie', title: 'CHALLENGE', subtitle: 'Insta selfie', content: 'Tag en gruppe selfie af hele holdet og del den i din historie på Instagram! Hvis du tagger @ultimatum.dk og du får et repost mens spillet er i gang, må du uddele en bunder'},
    {id: 'læs_højt', img: 'hand', title: 'LÆS HØJT', subtitle: 'Alle spiller fingeren på glasset!', content: 'Den sidste der nåede det skal drikke 5 tåre'},
    {id: 'regel', img: 'beer', title: 'REGEL', subtitle: 'Tid til en ny spillemester', content: 'Alle peger på den person i rummet de synes er sjovest - giv den udvalgte selskabsklovn mobilen i hånden og klik videre...'},

];

export const boysnight = [
    {id: '', img: '', title: '', subtitle: '', content: ''},

];

export const girlsnight = [

];

export const christmaslunch = [

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