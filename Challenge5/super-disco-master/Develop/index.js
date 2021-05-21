//day.js Objects
var day = dayjs().date()
var month = dayjs().month();
var year = dayjs().year();
var date = dayjs().format('MMMM D YYYY');

//JQuery Objects
var today = $("#today");


today.text(date);

