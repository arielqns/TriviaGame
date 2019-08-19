$('#start').on('click',function(){ 
    game.start();     
})

    $(document).on('click','#end', function(){
        game.done();
    })

var questions =[{  //2. questiosn array with objects with questions answers and correct answers
    questions:"1. Which planet has the largest mountain in existence that we know of?",  
    answers:["Mars", "Venus", "Pluto", "Uranus"],
    correctAnswer:"Mars"
},{
    questions:"2. The Eiffel Tower was originally intended for what city?",
    answers:["London", "New York", "Barcelona", "Buenos Aires"],
    correctAnswer:"Barcelona"
},{
    questions:"3. What mountain is nicknamed ‘Savage Mountain’?",
    answers:["Mount St. Helene","Mount Godwin-Austen","Mount Everest","Mount Kilimanjaro"],
    correctAnswer:"Mount Godwin-Austen"
},{
    questions:"4. Santiago is the capital of which country?",
    answers:["Dominican Republic", "Chile","Spain", "Venezuela"],
    correctAnswer:"Chile"
},{
    questions:"5. What is the only US state that is made up entirely of islands?",
    answers:["Puerto Rico", "US Virgin Islands", "Hawaii","Rhode Island"],
    correctAnswer:"Hawaii"
},{
    questions:"6. Mount Everest is in which country?", 
    answers:["Nepal", "India", "Pakistan", "United States"],
    correctAnswer:"Nepal"
},{
    questions:"7. What country consumes the most electricity in the world?", 
    answers:["United States", "Russian", "China", "India"],
    correctAnswer:"China"
},{
    questions:"8. There is an island called ‘Christmas Island’. True or false?",  
    answers:["True", "False"],
    correctAnswer:"True"
},{
    questions:"9. Augusta is the capital of which US state?", 
    answers:["Montana", "North Dakota", "New Hampshire", "Maine"],
    correctAnswer:"Maine"
},{
    questions:"10. Kuala Lumpur is the capital of which Asian country?", 
    answers:["Thailand", "East Timor", "Malaysia", "Cambodia"],
    correctAnswer:"Malaysia"
}];

//4 create object (game) with properties and methods for the game
var game = {
    correct: 0,  //count number of correct aswers
    incorrect: 0, //count number of incorrect answers
    counter: 5, //start at 120 seconds and counts back when player start
    countdown: function(){ //function that decreases the counter by one and change the element on page
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter <= 0){            //game ends
            console.log("Time is up!");
            game.done();
        }                            
    },
    start: function(){
        timer = setInterval(game.countdown,1000); //timer running the game.counter value by 1 (1 sec)
        $('#subwrapper').prepend('<h2>Time Remaining: <spam id="counter"></spam> Seconds</h2>'); //add the time remaining to the game
        $('#start').remove();//1 start buttom revomed after 1st click 
        for(var i=0;i<questions.length;i++){ //3a for loop function - for each questions 
            $('#subwrapper').append('<h2>'+questions[i].questions+'</h2>'); //3b append subwrapper into header, questions
            for(var j=0; j<questions[i].answers.length;j++){ //3c sub loop 
                $('#subwrapper').append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j]); //3d append each question w a name = num of question and value = answer
            }  
        }    
        $('#subwrapper').append('<br><button id="end">DONE</button>')
    },
    done: function(){//check if wheter asnwers was correct or not
        $.each($('input[name ="question-0]":checked'),function(){ //each element mentioned in the () any iput type that has the name of question 1
            if($(this).val()==questions[0].correctAnswer){
                game.correct++;
            }   else {
                    game.incorrect++;
            }
        });
        $.each($('input[name ="question-1]":checked'),function(){ 
            if($(this).val()==questions[1].correctAnswer){
                game.correct++;
            }   else {
                    game.incorrect++;
            }
        }),
        $.each($('input[name ="question-2]":checked'),function(){ 
            if($(this).val()==questions[2].correctAnswer){
                game.correct++;
            }   else {
                    game.incorrect++;
            }
        }),
        $.each($('input[name ="question-3]":checked'),function(){ 
            if($(this).val()==questions[3].correctAnswer){
                game.correct++;
            }   else {
                    game.incorrect++;
            }
        }),
        $.each($('input[name ="question-4]":checked'),function(){ 
            if($(this).val()==questions[4].correctAnswer){
                game.correct++;
            }   else {
                    game.incorrect++;
            }
        }),
        $.each($('input[name ="question-5]":checked'),function(){ 
            if($(this).val()==questions[5].correctAnswer){
                game.correct++;
            }   else {
                    game.incorrect++;
            }
        }),
        $.each($('input[name ="question-6]":checked'),function(){ 
            if($(this).val()==questions[6].correctAnswer){
                game.correct++;
            }   else {
                    game.incorrect++;
            }
        }),
        $.each($('input[name ="question-1]":checked'),function(){ 
            if($(this).val()==questions[2].correctAnswer){
                game.correct++;
            }   else {
                    game.incorrect++;
            }
        }),
        $.each($('input[name ="question-7]":checked'),function(){ 
            if($(this).val()==questions[7].correctAnswer){
                game.correct++;
            }   else {
                    game.incorrect++;
            }
        }),
        $.each($('input[name ="question-8]":checked'),function(){ 
            if($(this).val()==questions[8].correctAnswer){
                game.correct++;
            }   else {
                    game.incorrect++;
            }
        }),
        $.each($('input[name ="question-9]":checked'),function(){ 
            if($(this).val()==questions[9].correctAnswer){
                game.correct++;
            }   else {
                    game.incorrect++;
            }
        }),  
        $.each($('input[name ="question-10]":checked'),function(){ 
            if($(this).val()==questions[10].correctAnswer){
                game.correct++;
            }   else {
                    game.incorrect++;
            }
        });   
        
        this.result(); //print the results of the game
    },

        result: function(){
            clearInterval(timer);
            $('#subwrapper h2').remove();

            $('#subwrapper').html("<h2>All done!</h2>");
            $('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
            $('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
            $('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
        }
}