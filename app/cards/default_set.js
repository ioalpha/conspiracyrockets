cards = {};

(function(cards, _){

    var set = {
        children_newton: {
            title: "The Children of Newton",
            description: "Analytical, calculating, computing, dare we say mathematical. The Children of Newton are a force to be reckoned with!",
            effect: function(state) {
                state.shield += this.efficacy.positive * 10;
                state.funds += this.efficacy.positive * 10;
            },
            child: function(card, state) {
                if (card.id === "einstein_followers") {
                    this.efficacy.positive *= 2;
                }
                if (card.id === "abbey_thelema") {
                    state.navigation -= 5;
                }
            },
            parent: function(card, state) {
                if (card.id === "illuminati") {
                    this.efficacy.negative = 0;
                }
                if (card.id === "priests_ra") {
                    this.efficacy.positive *= 0.5;
                }
            }
        },
        einstein_followers: {
            title: "Einstein's Followers",
            description: "Published in 1915, Einstein’s General Theory of Relativity was a revelation. The ladies and gents who call themselves his followers are relatively certain they can put it to good use.",
            effect: function(state) {
                state.thrust += this.efficacy.positive * 10;
                state.funds += this.efficacy.positive * 10;
            },
            child: function(card, state) {
                if (card.id === "clockwork_council") {
                    this.efficacy.positive *= 2;
                }
                if (card.id === "dolphins") {
                    state.fuel -= 5;
                }
            },
            parent: function(card, state) {
                if (card.id === "illuminati") {
                    this.efficacy.negative = 0;
                }
                if (card.id === "clockwork_council") {
                    this.efficacy.positive *= 0.5;
                }
            }
        },
        illuminati: {
            title: "Illuminati",
            description: "It just wouldn’t be a conspiracy without the Illuminati. Ancient, all-powerful, and all-knowing, enlightenment is ensured if only you can survive their influence.",
            effect: function(state) {
                state.fuel += this.efficacy.positive * 10;
                state.funds += this.efficacy.positive * 10;
            },
            child: function(card, state) {
                if (card.id === "free_masons") {
                    this.efficacy.positive *= 2;
                }
                if (card.id === "priests_ra") {
                    state.supplies -= 5;
                }
            },
            parent: function(card, state) {
                if (card.id === "dolphins") {
                    this.efficacy.negative = 0;
                }
                if (card.id === "free_masons") {
                    this.efficacy.positive *= 0.5;
                }
            }
        },
        aether_research: {
            title: "Aether Research Society",
            description: "The world is all atwitter with the possibilities of this newly discovered substance. Buoyancy method, carrier of physical forces and possible window to the human soul, who knows what the Aether Research Society has discovered.",
            effect: function(state) {
                state.fuel += this.efficacy.positive * 15;
                state.fuel += this.efficacy.positive * 5;
            },
            child: function(card, state) {
                if (card.id === "abbey_thelema") {
                    this.efficacy.positive *= 2;
                }
                if (card.id === "clockwork_council") {
                    state.thrust -= 5;
                }
            },
            parent: function(card, state) {
                if (card.id === "free_masons") {
                    this.efficacy.negative = 0;
                }
                if (card.id === "einstein_followers") {
                    this.efficacy.positive *= 0.5;
                }
            }
        },
        church_nutrition: {
            title: "Most Holy Church of Nutrition",
            description: "An army marches on its stomach, as the Most Holy Church of Nutrition knows all too well. Rocketships won’t fly far without supplies either!",
            effect: function(state) {
                state.supplies += this.efficacy.positive * 10;
                state.funds += this.efficacy.positive * 10;
            },
            child: function(card, state) {
                if (card.id === "children_newton") {
                    this.efficacy.positive *= 2;
                }
                if (card.id === "free_masons") {
                    state.navigation -= 5;
                }
            },
            parent: function(card, state) {
                if (card.id === "aether_research") {
                    this.efficacy.negative = 0;
                }
                if (card.id === "children_newton") {
                    this.efficacy.positive *= 0.5;
                }
            }
        },
        dolphins: {
            title: "Dolphins",
            description: "They’re smarter than we think.",
            effect: function(state) {
                state.navigation += this.efficacy.positive * 10;
                state.funds += this.efficacy.positive * 10;
            },
            child: function(card, state) {
                if (card.id === "priests_ra") {
                    this.efficacy.positive *= 2;
                }
                if (card.id === "einstein_followers") {
                    state.shield -= 5;
                }
            },
            parent: function(card, state) {
                if (card.id === "children_newton") {
                    this.efficacy.negative = 0;
                }
                if (card.id === "church_nutrition") {
                    this.efficacy.positive *= 0.5;
                }
            }
        },
        abbey_thelema: {
            title: "Abbey of Thelema",
            description: "Aleister Crowley and his mystic monks are at it again. Séances, conjuring, magicks, power; a cornucopia of forbidden knowledge.",
            effect: function(state) {
                state.shields += this.efficacy.positive * 15;
                state.funds += this.efficacy.positive * 5;
            },
            child: function(card, state) {
                if (card.id === "aether_research") {
                    this.efficacy.positive *= 2;
                }
                if (card.id === "children_newton") {
                    state.thrust -= 5;
                }
            },
            parent: function(card, state) {
                if (card.id === "clockwork_council") {
                    this.efficacy.negative = 0;
                }
                if (card.id === "priests_ra") {
                    this.efficacy.positive *= 0.5;
                }
            }
        },
        free_masons: {
            title: "Freemasons",
            description: "Get out your square and compass and ensure building conditions are favorable and the ley lines are oriented correctly. ",
            effect: function(state) {
                state.supplies += this.efficacy.positive * 15;
                state.funds += this.efficacy.positive * 5;
            },
            child: function(card, state) {
                if (card.id === "illuminati") {
                    this.efficacy.positive *= 2;
                }
                if (card.id === "aether_research") {
                    state.fuel -= 5;
                }
            },
            parent: function(card, state) {
                if (card.id === "priests_ra") {
                    this.efficacy.negative = 0;
                }
                if (card.id === "illuminati") {
                    this.efficacy.positive *= 0.5;
                }
            }
        },
        priests_ra: {
            title: "High Priests of Amon-Ra",
            description: "Egyptology is no longer a new field, but it’s rumored that the followers of Amon-Ra have a completely new source of artefacts and relics; have they found the secret to eternal life?",
            effect: function(state) {
                state.navigation += this.efficacy.positive * 15;
                state.funds += this.efficacy.positive * 5;
            },
            child: function(card, state) {
                if (card.id === "church_nutrition") {
                    this.efficacy.positive *= 2;
                }
                if (card.id === "illuminati") {
                    state.supplies -= 5;
                }
            },
            parent: function(card, state) {
                if (card.id === "abbey_thelema") {
                    this.efficacy.negative = 0;
                }
                if (card.id === "abbey_thelema") {
                    this.efficacy.positive *= 0.5;
                }
            }
        },
        clockwork_council: {
            title: "Clockwork Council",
            description: "Cogs, gears, springs, steam, aether, ancient knowledge and newfangled gadgets; what’s the point if it can’t be put to practical use?",
            effect: function(state) {
                state.thrust += this.efficacy.positive * 15;
                state.funds += this.efficacy.positive * 5;
            },
            child: function(card, state) {
                if (card.id === "dolphins") {
                    this.efficacy.positive *= 2;
                }
                if (card.id === "church_nutrition") {
                    state.shield -= 5;
                }
            },
            parent: function(card, state) {
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
