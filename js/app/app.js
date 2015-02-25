(function () {
    "use strict";

    var App = React.createClass({
        render: function () {
            return <div>Test data rendered!</div>;
        }
    });

    React.renderComponent(<App />, document.getElementById("app"));

})();