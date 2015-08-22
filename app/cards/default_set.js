cards = {};

(function(cards, _){

    var set = {
        children_newton: {
            effect: function(state) {
                state.shield += this.efficacy.positive * 10;
            },
            child: function(card) {
                if (card.id === "einstein_followers") {
                    this.efficacy.positive *= 2;
                }
            },
            parent: function(card) {
                if (card.id === "illuminati") {
                    this.efficacy.negative = 0;
                }
                if (card.id === "priests_ra") {
                    this.efficacy.positive *= 0.5;
                }
            }
        },
        einstein_followers: {
            effect: function(state) {
                state.thrust += this.efficacy.positive * 10;
            },
            child: function(card) {
                if (card.id === "clockwork_council") {
                    this.efficacy.positive *= 2;
                }
            },
            parent: function(card) {
                if (card.id === "illuminati") {
                    this.efficacy.negative = 0;
                }
                if (card.id === "clockwork_council") {
                    this.efficacy.positive *= 0.5;
                }
            }
        },
        illuminati: {
            effect: function(state) {
                state.funds += this.efficacy.positive * 10;
            },
            child: function(card) {
                if (card.id === "free_masons") {
                    this.efficacy.positive *= 2;
                }
            },
            parent: function(card) {
                if (card.id === "dolphins") {
                    this.efficacy.negative = 0;
                }
                if (card.id === "free_masons") {
                    this.efficacy.positive *= 0.5;
                }
            }
        },
        aether_research: {
            effect: function(state) {
                state.funds += this.efficacy.positive * 10;
            },
            child: function(card) {
                if (card.id === "abbey_thelema") {
                    this.efficacy.positive *= 2;
                }
            },
            parent: function(card) {
                if (card.id === "free_masons") {
                    this.efficacy.negative = 0;
                }
                if (card.id === "einstein_followers") {
                    this.efficacy.positive *= 0.5;
                }
            }
        },
        church_nutrition: {
            effect: function(state) {
                state.supplies += this.efficacy.positive * 10;
            },
            child: function(card) {
                if (card.id === "children_newton") {
                    this.efficacy.positive *= 2;
                }
            },
            parent: function(card) {
                if (card.id === "aether_research") {
                    this.efficacy.negative = 0;
                }
                if (card.id === "children_newton") {
                    this.efficacy.positive *= 0.5;
                }
            }
        },
        dolphins: {
            effect: function(state) {
                state.navigation += this.efficacy.positive * 10;
            },
            child: function(card) {
                if (card.id === "priests_ra") {
                    this.efficacy.positive *= 2;
                }
            },
            parent: function(card) {
                if (card.id === "children_newton") {
                    this.efficacy.negative = 0;
                }
                if (card.id === "church_nutrition") {
                    this.efficacy.positive *= 0.5;
                }
            }
        },
        abbey_thelema: {
            effect: function(state) {
                state.shields += this.efficacy.positive * 10;
            },
            child: function(card) {
                if (card.id === "aether_research") {
                    this.efficacy.positive *= 2;
                }
            },
            parent: function(card) {
                if (card.id === "clockwork_council") {
                    this.efficacy.negative = 0;
                }
                if (card.id === "priests_ra") {
                    this.efficacy.positive *= 0.5;
                }
            }
        },
        free_masons: {
            effect: function(state) {
                state.supplies += this.efficacy.positive * 10;
            },
            child: function(card) {
                if (card.id === "illuminati") {
                    this.efficacy.positive *= 2;
                }
            },
            parent: function(card) {
                if (card.id === "priests_ra") {
                    this.efficacy.negative = 0;
                }
                if (card.id === "illuminati") {
                    this.efficacy.positive *= 0.5;
                }
            }
        },
        priests_ra: {
            effect: function(state) {
                state.navigation += this.efficacy.positive * 10;
            },
            child: function(card) {
                if (card.id === "church_nutrition") {
                    this.efficacy.positive *= 2;
                }
            },
            parent: function(card) {
                if (card.id === "abbey_thelema") {
                    this.efficacy.negative = 0;
                }
                if (card.id === "abbey_thelema") {
                    this.efficacy.positive *= 0.5;
                }
            }
        },
        clockwork_council: {
            effect: function(state) {
                state.thrust += this.efficacy.positive * 10;
            },
            child: function(card) {
                if (card.id === "dolphins") {
                    this.efficacy.positive *= 2;
                }
            },
            parent: function(card) {
                if (card.id === "einstein_followers") {
                    this.efficacy.negative = 0;
                }
                if (card.id === "dolphins") {
                    this.efficacy.positive *= 0.5;
                }
            }
        }
    };

    _.merge(cards, set);
})(cards, _);
