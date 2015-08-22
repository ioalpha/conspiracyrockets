Card = (function(React) {
    return React.createClass({
        render: function() {
            return (
                React.createElement("div", {className: "card"}, 
                    React.createElement("strong", null, this.props.name)
                )
            );
        }
    });
})(React);



