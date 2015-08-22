Card = (function(React) {
    return React.createClass({
        render: function() {
            return (
                <div className="card">
                    <strong>{this.props.name}</strong>
                </div>
            );
        }
    });
})(React);



