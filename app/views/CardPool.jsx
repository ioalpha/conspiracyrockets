CardPool = (function(React, Card) {
    return React.createClass({
        render: function() {
            return (
                <div className="cardpool">
                    {this.props.cards.map(function(c) {
                        return <Card name={c} />;
                    })}
                </div>
            );
        }
    });
})(React, Card);


