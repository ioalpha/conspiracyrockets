LaunchState = (function(React, BarGraph) {
    return React.createClass({
        render: function() {
            return (
                React.createElement("div", {className: "launchstate"}, 
                    React.createElement("div", null, 
                        React.createElement("h2", null, "Funds"), 
                        React.createElement(BarGraph, {total: "100", current: this.props.funds})
                    ), 
                    React.createElement("div", null, 
                        React.createElement("h2", null, "Supplies"), 
                        React.createElement(BarGraph, {total: "100", current: this.props.supplies})
                    ), 
                    React.createElement("div", null, 
                        React.createElement("h2", null, "Thrust"), 
                        React.createElement(BarGraph, {total: "100", current: this.props.thrust})
                    ), 
                    React.createElement("div", null, 
                        React.createElement("h2", null, "Navigation"), 
                        React.createElement(BarGraph, {total: "100", current: this.props.navigation})
                    ), 
                    React.createElement("div", null, 
                        React.createElement("h2", null, "Shield"), 
                        React.createElement(BarGraph, {total: "100", current: this.props.shield})
                    )
                )
            );
        }
    });
})(React, BarGraph);

