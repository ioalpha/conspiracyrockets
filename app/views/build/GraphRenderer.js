GraphRenderer = (function(React) {
    return React.createClass({

        dummyObject :   {
            "name": "Top Level",
            "parent": "null",
            "children": [
                {
                "name": "Level 2: A",
                "parent": "Top Level",
                "children": [
                    {
                    "name": "Son of A",
                    "parent": "Level 2: A",
                    "children":[]
                },
                {
                    "name": "Daughter of A",
                    "parent": "Level 2: A",
                    "children":[]
                }
                ]
            },
            {
                "name": "Level 2: B",
                "parent": "Top Level",
                "children":[]
            }
            ]
        },

        find: function(haystack, needle) {
            if (haystack.name === needle) return haystack;
            for (var i = 0; i < haystack.children.length; i ++) {
                var result = this.find(haystack.children[i], needle);
                if (result) return result;
            }
            return null;
        },

        create: function(state){
            // tbd
            var el = this.getDOMNode();

            this.svg = d3.select(this.getDOMNode()).append("svg")
            .attr("width","100%")
            .attr("height",el.clientHeight+"px")
            .append("g")
            .attr("width","200px")
            .attr("height","500px")
            .attr("transform", "translate(100,0)");

            this.update(state);
        },

        update: function(state){

            var el = this.getDOMNode();
            var self = this;

            var tree = d3.layout.tree()
            .size([200, 500]);

            var diagonal = d3.svg.diagonal()
            .projection(function(d) { return [d.y, d.x]; });

            // prepare data
            var untouchedData = state.data;
            var treeData = _.clone(untouchedData, true);

            //remove old graph
            d3.selectAll('g > *').remove();

            var nodes = tree.nodes(treeData).reverse();
            var links = tree.links(nodes);

            // Declare the nodes…
            var node = this.svg.selectAll("g.node")
            .data(nodes);

            // Enter the nodes.
            var nodeEnter = node.enter().append("g")
            .attr("class", "node")
            .attr("transform", function(d) { 
                return "translate(" + d.y + "," + d.x + ")"; });

                nodeEnter.append("circle")
                .attr("r", 10)
                .style("fill", "#fff")
                .on("click", function(d){
                    var new_node = {"name" : "random new node", "children" : []};
                    self.find(untouchedData,d.name).children.push(new_node);
                    var root_node = _.clone(untouchedData,true);
                    self.update({'data':root_node});
                });

                // TODO: hier muss das neue Objekt nach außen gereicht werden

                nodeEnter.append("text")
                .attr("x", function(d) { 
                    return d.children || d._children ? -13 : 13; })
                    .attr("dy", ".35em")
                    .attr("text-anchor", function(d) { 
                        return d.children || d._children ? "end" : "start"; })
                        .text(function(d) { return d.name; })
                        .style("fill-opacity", 1);

                        // Declare the links…
                        var link = this.svg.selectAll("path.link")
                        .data(links);

                        // Enter the links.
                        link.enter().insert("path", "g")
                        .attr("class", "link")
                        .attr("d", diagonal);


        },

        componentDidMount: function() {
            this.create(this.getChartState());
        },

        componentDidUpdate: function() {
            this.update(this.getChartState());
        },

        getChartState: function() {
            /*return {
data: this.props.data,
};*/
        return {
data : this.dummyObject
        }
},

            render: function() {
                return (
                    React.createElement("div", {className: "graphrenderer"}
                        
                    )
                );
            }
        });
    })(React);


