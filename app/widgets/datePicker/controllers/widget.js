var args = arguments[0] || {};
Ti.API.info('args is : ' + JSON.stringify(args));

var miniDate=args.minDate;

	var dateOfBirth = Ti.UI.createPicker({
	    type: Ti.UI.PICKER_TYPE_DATE,
	    minDate:new Date(miniDate),
    	maxDate:new Date(),
	});


$.pickerView.add(dateOfBirth);
var dateIs = new Date();
var FinalDateIs = null;
var day = dateIs.getDay();
var date = dateIs.getDate();
var year = dateIs.getFullYear();
var month = dateIs.getMonth() + 1;

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
		break;
	};

	$.currentDate.text = day + ", " + month + " " + date + ", " + year;
}

setTopString(day, month, date, year);

function getDatePicker(e) {
	FinalDateIs = dateOfBirth.value;
	var dayVal = FinalDateIs.getDay();
	var dateVal = FinalDateIs.getDate();
	var monthVal = FinalDateIs.getMonth() + 1;
	var yearVal = FinalDateIs.getFullYear();
	FinalDateIs = dateVal + "/" + monthVal + "/" + yearVal;
	Ti.API.info("dateVal :" + dateVal + " monthVal: " + monthVal + "  yearVal: " + yearVal);
	$.win.close();
	if (FinalDateIs) {
		if (args.type.apiName == "Ti.UI.Label") {
			args.type.text = FinalDateIs;
		} else if (args.type.apiName == "Ti.UI.TextField") {
			args.type.title = FinalDateIs;
		}

	}
}

	dateOfBirth.addEventListener('change', function(e) {
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

$.win.addEventListener('click', function(e) {
	if (e.source.id == 'backView')
		$.win.close();
});
