LaunchState = (function(React, BarGraph) {
    return React.createClass({
        render: function() {
            return (
                <div className="launchstate">
                    <div>
                        <h2>Funds</h2>
                        <BarGraph total="100" current={this.props.launchstate.funds} />
                    </div>
                    <div>
                        <h2>Fuel</h2>
                        <BarGraph total="100" current={this.props.launchstate.fuel} />
                    </div>
                    <div>
                        <h2>Supplies</h2>
                        <BarGraph total="100" current={this.props.launchstate.supplies} />
                    </div>
                    <div>
                        <h2>Thrust</h2>
                        <BarGraph total="100" current={this.props.launchstate.thrust} />
                    </div>
                    <div>
                        <h2>Navigation</h2>
                        <BarGraph total="100" current={this.props.launchstate.navigation} />
                    </div>
                    <div>
                        <h2>Shield</h2>
                        <BarGraph total="100" current={this.props.launchstate.shield} />
                    </div>
                </div>
            );
        }
    });
})(React, BarGraph);

