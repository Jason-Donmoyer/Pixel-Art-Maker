// Select color input
const color = $('#colorPicker');

// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function (event) {
	event.preventDefault();
	// variables to store height and width input values
	const height = $('#inputHeight').val();
	const width = $('#inputWeight').val();
	makeGrid(height, width);
});

// Main function to create grid

function makeGrid(x, y) {
	// remove any grid elements currently being displayed
	$('tr').remove();


}
