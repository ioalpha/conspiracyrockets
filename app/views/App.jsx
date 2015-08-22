App = (function(React, GraphRenderer) {
    return React.createClass({
        render: function() {
            return (
                <div className="app">
                    <h1>Conspiracy Rocket!!</h1>
                    <CardPool cards={["Foo", "Bar", "Derp"]}/>
                    <GraphRenderer />
                    <LaunchState
                        funds="34"
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
