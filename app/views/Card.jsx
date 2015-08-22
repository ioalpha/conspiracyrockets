Card = (function(React, cards) {
    return React.createClass({
        getInitialState: function() {
            return cards[this.props.id];
        },
        render: function() {

            return (
                <div className="card">
                    <h1 className="card__title">{this.state.title}</h1>
                    <p className="card__description">{this.state.description}</p>
                </div>
            );
        }
    });
})(React, cards);



