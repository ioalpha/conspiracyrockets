main = (function(engine, cards, App, React) {

    return function() {
        React.render(React.createElement(App), document.getElementById("app"));
    };

})(engine, cards, App, React)
