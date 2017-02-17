function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function getData() {
        var passDate = {
            type: $.lbl,
            minDate: "1990,01,01"
        };
        Alloy.createWidget("datePicker", passDate).getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win = Ti.UI.createWindow({
        id: "win",
        backgroundColor: "white"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.lbl = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        text: "Label",
        id: "lbl"
    });
    $.__views.win.add($.__views.lbl);
    getData ? $.addListener($.__views.lbl, "click", getData) : __defers["$.__views.lbl!click!getData"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.win.open();
    __defers["$.__views.lbl!click!getData"] && $.addListener($.__views.lbl, "click", getData);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;