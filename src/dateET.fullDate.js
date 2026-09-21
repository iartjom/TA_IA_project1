function dateFormattedET () {
	let timeNow = new Date ();
	let hourNow = timeNow.getHours ();
	let minuteNow = timeNow.getMinutes ();
	let secondNow = timeNow.getSeconds ();
	let timeFormattedET = hourNow + ":" + minuteNow + ':' + secondNow ;
	return timeFormattedET;
	
function dateFormattedET () {
	let timeNow = new Date ();
	let dateNow = timeNow.getDate (); 
	let monthNow = timeNow.getMonth ();
	let yearNow = timeNow.getYear ();
	// let yearNow = timeNow.getFullYear ();
	const monthNamesET = ['jaanuar', 'veebruar', 'märts', 'aprill', 'mai', 'juuni', 'juuli', 'august', 'september', 'oktoober', 'november', 'detsember'];
	// return dateNow + '.' + (monthNow + 1) + '.' + yearNow;
	return dateNow + '.' + monthNamesET[monthNow] + '.' + yearNow;
}	