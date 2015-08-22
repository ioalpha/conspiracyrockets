engine = (function() {

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

    function apply_children(card, child_cards, state) {
        var i;
        child_cards = child_cards || [];

        if (child_cards.length < 1) {
            return;
        }

        child_cards.forEach(function(child) {
            card.apply_child(child, state);
            apply_children(child.children, state);
        });
    }

    function apply_parents(card, parent_card, state) {
        parent_card = parent_card || card.parent;

        if (!parent_card) {
            return;
        }

        card.apply_parent(parent_card, state);
        apply_parents(card, parent_card.parent, state);
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


    return {
        get_new_state: function(state, conspiracy) {
            apply_graph(
                state,
                build_graph(conspiracy)
            );
        }
    };
})(cards);
