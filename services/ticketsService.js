 let tickets = [];

function findTickets() {
    return tickets.slice().sort((a, b) => new Date(a.creation) - new Date(b.creation));
    //slice crée une copie du tableau
    //sort le trie
    //on compare a et b
    //après on a une date, on converti creation en date
    //avec la soustraction on classe du plus ancien au plus récent (si négatif a avant b, si positif a après b, si 0 alors non changé)
}


function setTickets(liste) {
    tickets = []; // vide d'abord
    liste.forEach(ticket => {
      tickets.push(ticket);
    });
  }

module.exports = {findTickets,setTickets}

