export function getArrayItemById(array, id) {
	for (var i = array.length - 1; i >= 0; i--) {
		if(array[i].id == id) {
			return array[i];
		}
	}
}
