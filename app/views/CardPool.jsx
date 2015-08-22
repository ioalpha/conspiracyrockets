CardPool = (function(React, Card) {
    return React.createClass({
        render: function() {
            return (
                <div className="cardpool">
                    {this.props.cards.map(function(c, i) {
                        return <Card name={c} key={i}/>;
                    })}
                </div>
            );
        }
    });
})(React, Card);


