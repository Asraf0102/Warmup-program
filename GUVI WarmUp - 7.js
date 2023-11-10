/* Create a function that takes height and width and finds the perimeter of a rectangle. */

let perimeter = findPerimeter(6, 7)

function findPerimeter(heigth, width) {
	return (heigth + width) * 2
}
console.log(perimeter)
/*
Lines For TestCase
findPerimeter(6, 7); 
findPerimeter(20, 10);
findPerimeter(2, 9);
*/