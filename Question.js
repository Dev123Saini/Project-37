class Question{

    constructor(){
        this.input1 = createInput("Enter your name");
        this.input2 = createInput("Enter the option");
        this.button = createButton("Submit");
        this.title = createElement('h2');
        this.question = createElement('h3');
        this.option1 = createElement('h3');
        this.option2 = createElement('h3');
        this.option3 = createElement('h3');
        this.option4 = createElement('h3');
    
    }
    
    hide(){
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
        
    }
    
    display(){
    
    this.title.html("MyQuiz Game");
    this.title.position(350,0);
    
    this.question.html("Jude Felix is a famous Indian player in which of the fields?");
    this.question.position(150,60);
    
    this.option1.html("1: Volleyball ");
    this.option1.position(150,100);
    
    this.option2.html("2: Hockey");
    this.option2.position(150,120);
    
    this.option3.html("3: Cricket");
    this.option3.position(150,140);
    
    this.option4.html("4: Football");
    this.option4.position(150,160);
    
    this.input1.position(150,230);
    this.input2.position(350,230);
    
    this.button.position(310,290);
    
    this.button.mousePressed(()=>{
    
        this.title.hide();
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
    
        contestant.name = this.input1.value();
        contestant.answer = this.input2.value();
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
        
    
    
    
    
    
    
    
    
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    }