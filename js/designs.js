

// Calls function to create grid

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
	// creates grid 
	for (var i = 1; i <= x; i++) {
		$('#pixelCanvas').append('<tr id=tableRow' + i + '></tr>');
		for (var j = 1; j <= y; j++) {
			$('#tableRow' + i).append('<td></td>');
		}
	}

	// add color to cell
	$('td').click(function addColor() {
		// Select color input
		const color = $('#colorPicker').val();

		if ($(this).attr('style')) {
			$(this).removeAttr('style');
		} else {
			$(this).attr('style', 'background-color:' + color);
		}
	});
}
