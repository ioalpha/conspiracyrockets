LaunchState = (function(React, BarGraph) {
    return React.createClass({
        render: function() {
            return (
                <div className="launchstate">
                    <div>
                        <h2>Funds</h2>
                        <BarGraph total="100" current={this.props.funds} />
                    </div>
                    <div>
                        <h2>Fuel</h2>
                        <BarGraph total="100" current={this.props.fuel} />
                    </div>
                    <div>
                        <h2>Supplies</h2>
                        <BarGraph total="100" current={this.props.supplies} />
                    </div>
                    <div>
                        <h2>Thrust</h2>
                        <BarGraph total="100" current={this.props.thrust} />
                    </div>
                    <div>
                        <h2>Navigation</h2>
                        <BarGraph total="100" current={this.props.navigation} />
                    </div>
                    <div>
                        <h2>Shield</h2>
                        <BarGraph total="100" current={this.props.shield} />
                    </div>
                </div>
            );
        }
    });
})(React, BarGraph);

