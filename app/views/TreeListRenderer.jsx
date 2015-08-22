TreeListRenderer = (function(React, cards) {
    return React.createClass({
        onselect: function() {},
        renderNodes: function(nodes) {
            console.log(nodes);
            return (
                <ul>
                    {_.forEach(nodes, function(children, id) {
                        var click = function() {
                            this.click(id);
                        }.bind(this);

                        var card = cards[id];
                        return (
                            <li key={id}><span onClick={click}>{card.title}</span>
                                {this.renderNodes(children)}
                            </li>
                        );
                    }.bind(this))}
                </ul>
            );
        },
        render: function() {
            return (
                <div className="treerenderer">
                    {this.renderNodes(this.props.conspiracy)}
                </div>
            );
        }
    });
})(React, cards);


