function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "datePicker/" + s : s.substring(0, index) + "/datePicker/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function setTopString(day, month, date, year) {
        switch (day) {
          case 0:
            day = "Sun";
            break;

          case 1:
            day = "Mon";
            break;

          case 2:
            day = "Tue";
            break;

          case 3:
            day = "Wed";
            break;

          case 4:
            day = "Thu";
            break;

          case 5:
            day = "Fri";
            break;

          case 6:
            day = "Sat";
        }
        switch (month) {
          case 1:
            month = "Jan";
            break;

          case 2:
            month = "Feb";
            break;

          case 3:
            month = "Mar";
            break;

          case 4:
            month = "Apr";
            break;

          case 5:
            month = "May";
            break;

          case 6:
            month = "Jun";
            break;

          case 7:
            month = "Jul";

          case 8:
            month = "Aug";
            break;

          case 9:
            month = "Sep";
            break;

          case 10:
            month = "Oct";
            break;

          case 11:
            month = "Nov";
            break;

          case 12:
            month = "Dec";
        }
        $.currentDate.text = day + ", " + month + " " + date + ", " + year;
    }
    function getDatePicker() {
        FinalDateIs = dateOfBirth.value;
        FinalDateIs.getDay();
        var dateVal = FinalDateIs.getDate();
        var monthVal = FinalDateIs.getMonth() + 1;
        var yearVal = FinalDateIs.getFullYear();
        FinalDateIs = dateVal + "/" + monthVal + "/" + yearVal;
        Ti.API.info("dateVal :" + dateVal + " monthVal: " + monthVal + "  yearVal: " + yearVal);
        $.win.close();
        FinalDateIs && ("Ti.UI.Label" == args.type.apiName ? args.type.text = FinalDateIs : "Ti.UI.TextField" == args.type.apiName && (args.type.title = FinalDateIs));
    }
    new (require("alloy/widget"))("datePicker");
    this.__widgetId = "datePicker";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win = Ti.UI.createWindow({
        theme: "Theme.Transparent",
        id: "win",
        title: "",
        backgroundColor: "transparent"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.backView = Ti.UI.createView({
        height: "100%",
        width: "100%",
        backgroundColor: "transparent",
        id: "backView"
    });
    $.__views.win.add($.__views.backView);
    $.__views.__alloyId0 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        backgroundColor: "#f2f2f2",
        width: "90%",
        id: "__alloyId0"
    });
    $.__views.win.add($.__views.__alloyId0);
    $.__views.currentDate = Ti.UI.createLabel({
        font: {
            fontSize: "20",
            fontWeight: "normal"
        },
        id: "currentDate",
        height: 50,
        top: 10,
        color: "#32A8D3",
        bottom: 10,
        left: 20
    });
    $.__views.__alloyId0.add($.__views.currentDate);
    $.__views.__alloyId1 = Ti.UI.createView({
        height: 2,
        left: 0,
        right: 0,
        backgroundColor: "#32A8D3",
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.pickerView = Ti.UI.createView({
        id: "pickerView",
        height: Ti.UI.SIZE
    });
    $.__views.__alloyId0.add($.__views.pickerView);
    $.__views.__alloyId2 = Ti.UI.createView({
        height: 1,
        left: 0,
        right: 0,
        backgroundColor: "#BDBDBD",
        id: "__alloyId2"
    });
    $.__views.__alloyId0.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createView({
        height: "40dp",
        id: "__alloyId3"
    });
    $.__views.__alloyId0.add($.__views.__alloyId3);
    $.__views.doneButton = Ti.UI.createLabel({
        font: {
            fontSize: "18",
            fontWeight: "normal"
        },
        text: "Done",
        id: "doneButton",
        backgroundColor: "transparent",
        textAlign: "center",
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        color: "#000"
    });
    $.__views.__alloyId3.add($.__views.doneButton);
    getDatePicker ? $.addListener($.__views.doneButton, "click", getDatePicker) : __defers["$.__views.doneButton!click!getDatePicker"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    Ti.API.info("args is : " + JSON.stringify(args));
    var miniDate = args.minDate;
    var dateOfBirth = Ti.UI.createPicker({
        type: Ti.UI.PICKER_TYPE_DATE,
        minDate: new Date(miniDate),
        maxDate: new Date()
    });
    $.pickerView.add(dateOfBirth);
    var dateIs = new Date();
    var FinalDateIs = null;
    var day = dateIs.getDay();
    var date = dateIs.getDate();
    var year = dateIs.getFullYear();
    var month = dateIs.getMonth() + 1;
    setTopString(day, month, date, year);
    dateOfBirth.addEventListener("change", function(e) {
        var FinalDateIs = e.value;
        var dayVal = FinalDateIs.getDay();
        var dateVal = FinalDateIs.getDate();
        var monthVal = FinalDateIs.getMonth() + 1;
        var yearVal = FinalDateIs.getFullYear();
        setTopString(dayVal, monthVal, dateVal, yearVal);
    });
    exports.open = function() {
        $.win.open();
    };
    $.win.addEventListener("click", function(e) {
        "backView" == e.source.id && $.win.close();
    });
    __defers["$.__views.doneButton!click!getDatePicker"] && $.addListener($.__views.doneButton, "click", getDatePicker);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;