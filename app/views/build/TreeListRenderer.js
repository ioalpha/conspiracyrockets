TreeListRenderer = (function(React, cards) {
    return React.createClass({
        onselect: function() {},
        renderNodes: function(nodes) {
            console.log(nodes);
            return (
                React.createElement("ul", null, 
                    _.forEach(nodes, function(children, id) {
                        var click = function() {
                            this.click(id);
                        }.bind(this);

                        var card = cards[id];
                        return (
                            React.createElement("li", {key: id}, React.createElement("span", {onClick: click}, card.title), 
                                this.renderNodes(children)
                            )
                        );
                    }.bind(this))
                )
            );
        },
        render: function() {
            return (
                React.createElement("div", {className: "treerenderer"}, 
                    this.renderNodes(this.props.conspiracy)
                )
            );
        }
    });
})(React, cards);


