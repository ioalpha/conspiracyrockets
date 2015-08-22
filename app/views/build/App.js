App = (function(React) {
    return React.createClass({
        render: function() {
            return (
                React.createElement("div", {className: "app"}, 
                    React.createElement("h1", null, "Conspiracy Rocket!!")
                )
            );
        }
    });
})(React);
