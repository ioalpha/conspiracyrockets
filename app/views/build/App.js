App = (function(React, GraphRenderer) {
    return React.createClass({
        render: function() {
            return (
                React.createElement("div", {className: "app"}, 
                    React.createElement("h1", null, "Conspiracy Rocket!!"), 
                    React.createElement(CardPool, {cards: ["aether_research", "illuminati", "church_nutrition"]}), 
                    React.createElement(GraphRenderer, null), 
                    React.createElement(LaunchState, {
                        funds: "34", 
                        fuel: "85", 
                        supplies: "50", 
                        thrust: "12", 
                        navigation: "97", 
                        shield: "65"}
                    )
                )
            );
        }
    });
})(React, GraphRenderer);
