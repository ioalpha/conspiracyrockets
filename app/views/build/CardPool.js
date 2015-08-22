CardPool = (function(React, Card) {
    return React.createClass({
        render: function() {
            return (
                React.createElement("div", {className: "cardpool"}, 
                    this.props.cards.map(function(c, i) {
                        return React.createElement(Card, {name: c, key: i});
                    })
                )
            );
        }
    });
})(React, Card);


