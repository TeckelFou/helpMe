

class Ticket {
    constructor({ id,titre,auteur,description, creation, etat}) {
        this.id = id;
        this.titre = titre;
        this.auteur = auteur;
        this.description = description;
        this.creation = new Date;
        this.etat = etat || Ticket.EtatTicket.OUVERT;
    }
static EtatTicket = {
    OUVERT: "OUVERT",
    CLOS: "CLOS",
  };
}

module.exports= Ticket;