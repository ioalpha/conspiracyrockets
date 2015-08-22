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
                <div className={this.props.className + "card"} onClick={this.click}>
                    <h1 className="card__title">{this.state.title}</h1>
                    <p className="card__description">{this.state.description}</p>
                </div>
            );
        }
    });
})(React, cards);



