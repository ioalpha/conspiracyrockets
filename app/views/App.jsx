App = (function(React, GraphRenderer) {
    return React.createClass({
        render: function() {
            return (
                <div className="app">
                    <h1>Conspiracy Rocket!!</h1>
                    <CardPool cards={["aether_research", "illuminati", "church_nutrition"]}/>
                    <GraphRenderer />
                    <LaunchState
                        funds="34"
                        fuel="85"
                        supplies="50"
                        thrust="12"
                        navigation="97"
                        shield="65"
                    />
                </div>
            );
        }
    });
})(React, GraphRenderer);
