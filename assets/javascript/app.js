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
    //console.log(questions);

    // OBJECT
//*****************************************************************************************/

var game = {
      // Create countdown method to set timer
      // variable counter with initial time remaining set to 30 secs.
      counter: 5,
      correct: 0,
      incorrect: 0,
      unanswered: 0,
      questions: 0,
      currentQuestion:0,

      countdown: function() {
        game.counter--;
        //populate the decremental values of counter in html
        $("#counter").html(game.counter);
        if(game.counter <= 0) {
            console.log("TIME UP!");
            game.timeUp();
            
           
        }
    },

      loadQuestion: function() {
          // alert("loadQuesion method works");
          
          //populate the html with id = counter
          $("#subwrapper").html("<h5> TIME REMAINING <span id = 'counter'> 30 </span> Seconds </h5>");
          // create the countdown time for each second
          timer = setInterval(game.countdown, 1000);
          // select value of property question from the array questions of index value zero
          // and append to html.
          $("#subwrapper").append("<h2>" + questions[game.currentQuestion].
            question + "</h2>");
            //append all the answers of the question selected
            var numOfTotalAnswers = questions[game.currentQuestion].answers.length;
            for(var i = 0; i < numOfTotalAnswers; i++) {
                //create the buttons and store the answers in the button using "data-name"
                $('#subwrapper').append('<button class = "answer-button" id = "button-'+ 
                i + '" data-name = "' +questions[game.
                currentQuestion].answers[i]+'">' + questions[game.
                currentQuestion].answers[i]+'</button>' );
            }
      },
      nextQuestion: function() {
        game.counter = 30;
        $("#counter").html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();
    },
    timeUp: function() {
        clearInterval(timer);
                    setTimeout(game.nextQuestion,3*1000);
    
    },

    clicked: function(e) {
        clearInterval(timer);
        if($(e.target).data("name")==questions[game.currentQuestion].correctAnswer) {
            game.answeredCorrectly();                
        }
        else {
            game.answeredIncorrectly();
        }

    },
    answeredCorrectly: function() {
        console.log("YOU GOT IT!");
        clearInterval(timer);
        game.correct++;
        $("#subwrapper").html("<h2> YOU GOT IT RIGHT! </h2>");
                

        $("#subwrapper").append('<img src="' + questions[game.currentQuestion].image + '" />');
        if(game.currentQuestion == questions.length-1) {
            setTimeout(game.results, 3*1000);
        }
        else {
            setTimeout(game.nextQuestion,3*1000);
        }

    },
    answeredIncorrectly: function () {
        console.log("WRONG !");
        clearInterval(timer);
        game.incorrect++;
        console.log(game.incorrect);
        $("#subwrapper").html("<h2 style = 'color:red;'' > YOU GOT IT WRONG! </h2>");
        $("#subwrapper").append("<h3> The Correct Answer Was:"+
        questions[game.currentQuestion].correctAnswer+ " </h3>");
        $("#subwrapper").append('<img src="' + questions[game.currentQuestion].image + '" />');
        if(game.currentQuestion == questions.length-1) {
            setTimeout(game.results, 3*1000);
        }
        else {
            setTimeout(game.nextQuestion,3*1000);
        }
    },
}





// MAIN PROCESSES
//*****************************************************************************************/
// Starts the game the First Time.

$("#start").on("click",function() {
    $("#start").remove();
    game.loadQuestion();
    
})
$(document).on("click", ".answer-button", function(e) {
    game.clicked(e);

})