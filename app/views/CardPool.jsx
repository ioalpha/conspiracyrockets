CardPool = (function(React, Card) {
    return React.createClass({
        render: function() {
            return (
                <div className="cardpool">
                    {this.props.cards.map(function(c, i) {
                        return <Card id={c} key={i}/>;
                    })}
                </div>
            );
        }
    });
})(React, Card);


