function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "datePicker/" + s : s.substring(0, index) + "/datePicker/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

module.exports = [ {
    isClass: true,
    priority: 10000.0002,
    key: "label",
    style: {
        font: {
            fontSize: "20",
            fontWeight: "normal"
        }
    }
}, {
    isClass: true,
    priority: 10000.0003,
    key: "button",
    style: {
        font: {
            fontSize: "18",
            fontWeight: "normal"
        }
    }
}, {
    isId: true,
    priority: 100000.0004,
    key: "win",
    style: {
        theme: "Theme.Transparent"
    }
} ];