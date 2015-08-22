Card = (function(React, cards) {
    return React.createClass({
        getInitialState: function() {
            return cards[this.props.id];
        },
        render: function() {

            return (
                React.createElement("div", {className: "card"}, 
                    React.createElement("h1", {className: "card__title"}, this.state.title), 
                    React.createElement("p", {className: "card__description"}, this.state.description)
                )
            );
        }
    });
})(React, cards);



