var cards = {
    mathematicians: {
        parent: function(card) {
            if (card.id === "farmers") {
                this.efficacy.positive *= 0.1;
            }
        },
        child: function(card) {},
        effect: function(state) {

            state.funds += this.efficacy.positive * 10;
            state.navigation += this.efficacy.positive * 15;
        }
    },
    physicists: {
        parent: function(card) {
            if (card.id === "mathematicians") {
                this.efficacy.positive *= 1.5;
            }
            if (card.id === "farmers") {
                this.efficacy.negative = 0;
            }
        },
        child: function(card) {
            if (card.id === "engineers") {
                this.efficacy.positive *= 1.2;
            }
        },
        effect: function(state) {
            state.thrust += this.efficacy.positive * 10;
            state.shield += this.efficacy.positive * 15;
            state.navigation += this.efficacy.positive * 5;

            state.funds -= this.efficacy.negative * 10;
        }
    },
    engineers: {
        child: function(card) {
            if (card.id === "physicists") {
                this.efficacy.positive *= 1.5;
            }
            if (card.id === "mathematicians") {
                this.efficacy.positive *= 2;
            }
        },
        effect: function(state) {
            state.thrust += this.efficacy.positive * 10;
        },
    },
    farmers: {
        effect: function(state) {
            state.supplies += this.efficacy.positive * 10;
        },
    }
}

function build_card(id) {
    var template = cards[id];
    var card = {
        id: id,
        efficacy: {
            positive: 1,
            negative: 1
        },
        apply_effect: template.effect || function() {},
        apply_parent: template.parent || function() {},
        apply_child: template.child || function() {},
    };

    return card;
}


function build_graph(conspiracy) {
    var i, card;
    var graph = [];

    for (i in conspiracy) {
        if (conspiracy.hasOwnProperty(i)) {
            card = build_card(i);
            card.children = build_graph(conspiracy[i]);
            graph.push(card);
        }
    }

    return graph;
}

function apply_children(card, child_cards) {
    var i;
    child_cards = child_cards || [];

    if (child_cards.length < 1) {
        return;
    }

    child_cards.forEach(function(child) {
        card.apply_child(child);
        apply_children(child.children);
    });
}

function apply_parents(card, parent_card) {
    parent_card = parent_card || card.parent;

    if (!parent_card) {
        return;
    }

    card.apply_parent(parent_card);

    apply_parents(card, parent_card.parent);
}

function apply_graph(state, graph) {
    var i;
    var new_state = {};

    for (i in state) {
        if (state.hasOwnProperty(i)) {
            new_state[i] = state[i];
        }
    }

    graph.forEach(function(card){

        apply_parents(card, card.parent);
        apply_children(card, card.children);
        card.apply_effect(new_state);
        apply_graph(state, card.children);
    });

    return new_state;
}







var state = {
    funds: 0,
    supplies: 0,
    thrust: 0,
    navigation: 0,
    shield: 0
};

var conspiracy = {
    "farmers": {
        "mathematicians": {},
        "physicists": {
        },
    },
    "engineers": {}
};
var graph = build_graph(conspiracy);

console.log("new state", apply_graph(state, graph));
