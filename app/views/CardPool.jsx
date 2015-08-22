CardPool = (function(React, Card) {
    return React.createClass({
        getInitialState: function() {
            return {
                selected_index: -1
            };
        },
        onselect: function(card, index) {
            console.log('selected', card, index );
            this.setState({
                selected_index: index
            });
        },
        render: function() {
            return (
                <div className="cardpool">
                    {this.props.cards.map(function(c, i) {
                        var selected;
                        if (c) {
                            selected = i === this.state.selected_index ? " selected " : " ";
                            return <Card
                                id={c}
                                className={selected}
                                key={i}
                                index={i}
                                onselect={this.onselect}
                            />;
                        }
                    }.bind(this))}
                </div>
            );
        }
    });
})(React, Card);


