$.win.open();

function getData(e) {
	var passDate = {
		"type" : $.lbl,
		"minDate" : "1990,01,01",
	};
	Alloy.createWidget('datePicker', passDate).getView().open();
}
