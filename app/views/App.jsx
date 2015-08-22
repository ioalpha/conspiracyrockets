App = (function(React, GraphRenderer, engine) {
    return React.createClass({
        card_pool: [null, null, null],
        deck: engine.get_card_deck(),
        conspiracy: {},
        launchstate: {
            funds: 40,
            fuel: 35,
            supplies: 75,
            thrust: 20,
            navigation: 5,
            shield: 100
        },
        getInitialState: function() {
            return {
                launchstate: this.launchstate,
                conspiracy: this.conspiracy,
                card_pool: this.card_pool
            };
        },
        refill_cards: function() {
            this.card_pool = this.card_pool.map(function(c) {
                console.log(this.deck);
                return c ? c : this.deck.pop();
            }.bind(this));

            this.setState({
                card_pool: this.card_pool
            });
        },
        componentDidMount: function() {
            this.refill_cards();
        },
        render: function() {
            return (
                <div className="app">
                    <h1>Conspiracy Rocket!!</h1>
                    <CardPool cards={this.state.card_pool}/>
                    <GraphRenderer />
                    <LaunchState
                        launchstate={this.state.launchstate}
                    />
                </div>
            );
        }
    });
})(React, GraphRenderer, engine);
