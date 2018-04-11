// ARRAY OF OBJECTS
//*****************************************************************************************/
var questions = [
	{
		question: "What is the Capital of Italy?", 
	    answers: ["Sana'a", "Rome", "Cairo", "Madrid"],
		correctAnswer: "Sana'a",
	    image: "assets/images/rome.jpg"
	 },
	 {
	 	question: "What is the Capital of Greece?", 
		answers: ["Athens", "Seoul", "Lisbon", "Rome"],
		correctAnswer: "Athens",
	    image: "assets/images/athens.jpg"
	 }, 
	 {
	 	question: "What is the Capital of Iraq?", 
		answers: ["Dubai", "Jeddah", "Baghdad", "Tahran" ],
		correctAnswer:  "Baghdad",
	    image: "assets/images/Baghdad.jpg"
	}, 
	{
		question: "What is the Capital of Egypt?", 
		answers: ["Hanoi", "Suva", "Cairo", "Madrid" ],
		correctAnswer: "Cairo",
	    image: "assets/images/cairo.jpg"
	}, 
	{
		question: "What is the Capital of United Kingdom?", 
		answers: ["Stockholm", "Kingston", "Seoul", "London" ],
		correctAnswer: "London",
	    image: "assets/images/london.jpg"
	}, 
	{
		question: "What is the Capital of Spain?", 
		answers: ["Caracas", "Madrid", "Athens", "Dublin" ],
		correctAnswer: "Madrid",
	    image: "assets/images/madrid.jpg"
	}, 
	{
		question: "What is the Capital of France?", 
		answers: ["Caracas", "Paris", "Brussels", "Nairobi" ],
		correctAnswer: "Paris",
	    image: "assets/images/paris.jpg"
	}, 
	{
		question: "What is the Capital of Russia?", 
		answers: ["Moscow", "Athens", "Dublin", "Nairobi" ],
		correctAnswer:"Moscow",
	    image: "assets/images/Moscow.jpg"
	}, 
	{
		question: "What is the Capital of Thailand?", 
		answers: ["Caracas", "Paris", "Brussels", "Bangkok" ],
		correctAnswer: "Bangkok",
	    image: "assets/images/bangkok.jpg"
	}, 
	{
		question: "What is the Capital of Japan?", 
		answers: ["Tokyo", "Kiev", "Cardiff", "Seoul" ],
		correctAnswer:"Tokyo",
	    image: "assets/images/tokyo.jpg"
    }];
    console.log(questions);

    // OBJECT
//*****************************************************************************************/






// MAIN PROCESSES
//*****************************************************************************************/
// Starts the game the First Time.

$("#start").on("click",function() {
    $("#start").remove();
    
})