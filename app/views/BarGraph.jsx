BarGraph = (function(React) {
    return React.createClass({
        render: function() {
            var percent = this.props.current / this.props.total * 100;
            var smooth = this.props.smooth ? " smooth " : " ";
            var required = this.props.required ? this.props.required : 0.5 * this.props.total;
            var ok = this.props.current >= required ? " ok " : " ";

            return <div
                className={"bargraph" + smooth + ok + this.props.color}
                data-progress={percent}
                >
                <div className="fill" style={{right: (100-percent) + "%"}}></div>
            </div>
        }
    });
})(React);
