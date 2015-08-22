Card = (function(React, cards) {
    return React.createClass({
        getInitialState: function() {
            return cards[this.props.id];
        },
        click: function() {
            console.log(this.props);
            this.props.onselect(this.props.id, this.props.index);
        },
        render: function() {

            return (
                React.createElement("div", {className: this.props.className + "card", onClick: this.click}, 
                    React.createElement("h1", {className: "card__title"}, this.state.title), 
                    React.createElement("p", {className: "card__description"}, this.state.description)
                )
            );
        }
    });
})(React, cards);



