LaunchState = (function(React, BarGraph) {
    return React.createClass({
        render: function() {
            return (
                React.createElement("div", {className: "launchstate"}, 
                    React.createElement("div", null, 
                        React.createElement("h2", null, "Funds"), 
                        React.createElement(BarGraph, {total: "100", current: this.props.launchstate.funds})
                    ), 
                    React.createElement("div", null, 
                        React.createElement("h2", null, "Fuel"), 
                        React.createElement(BarGraph, {total: "100", current: this.props.launchstate.fuel})
                    ), 
                    React.createElement("div", null, 
                        React.createElement("h2", null, "Supplies"), 
                        React.createElement(BarGraph, {total: "100", current: this.props.launchstate.supplies})
                    ), 
                    React.createElement("div", null, 
                        React.createElement("h2", null, "Thrust"), 
                        React.createElement(BarGraph, {total: "100", current: this.props.launchstate.thrust})
                    ), 
                    React.createElement("div", null, 
                        React.createElement("h2", null, "Navigation"), 
                        React.createElement(BarGraph, {total: "100", current: this.props.launchstate.navigation})
                    ), 
                    React.createElement("div", null, 
                        React.createElement("h2", null, "Shield"), 
                        React.createElement(BarGraph, {total: "100", current: this.props.launchstate.shield})
                    )
                )
            );
        }
    });
})(React, BarGraph);

