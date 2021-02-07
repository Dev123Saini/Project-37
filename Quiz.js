class Quiz{

constructor(){}

getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question();
      question.display();
    }
  }

  play(){

  question.hide();

  background("yellow");

  textSize(30);
  text("Result of the quiz",350,40);

  Contestant.getContestantInfo();

  if(allContestants !== undefined){

    var display_position = 210;

    for(var plr in allContestants){

       
        var correctAns = "2";
      
        if(correctAns === allContestants[plr].answer){
            fill("green");
        }
        else{
            fill("red");
        }

        

        display_position+=20;
        textSize(21);
        text(allContestants[plr].name + ": " + allContestants[plr].answer,310,display_position);

    }

   

    













  }








  }























}