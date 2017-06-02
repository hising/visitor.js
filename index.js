const DEEP_VISIT = 10;
const RETURNING_VISITOR = 1;

function VisitorSession() {
    this.views = 0;  // TODO: get from sessionStorage or new
    this.started = new Date().getTime(); // TODO: get from sessionStorage or new
}

function VisitorStorage() {
    // TODO: If no session - increase visits
    this.visits = 0; // TODO: Get from localStorage or new
}

function Visitor(options) {

    var defaultOptions = {
        deep: DEEP_VISIT,
        returning: RETURNING_VISITOR
    };

    this.options = Object.assign(defaultOptions, options);

    var self = this;
    this.session = new VisitorSession();
    this.storage = new VisitorStorage();

    window.addEventListener("beforeunload", function (event) {
        self.onBeforeUnload();
    });
}

Visitor.prototype.onBeforeUnload = function () {
    // TODO: Save views to sessionStorage
    // TODO: Save started to sessionStorage
};

Visitor.prototype.getVisits = function () {
    return this.storage.visits;
};

Visitor.prototype.isDeepVisit = function () {
    return (this.session.views > this.options.deep);
};

Visitor.prototype.isReturningUser = function () {
    return (this.storage.visits > this.options.returning);
};

Visitor.prototype.getViews = function () {
    return this.session.views;
};

module.exports = new Visitor();
