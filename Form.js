class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Submit");
        this.email = createInput("Email ID")
        this.greeting = createElement('h2');
        this.title = createElement('h2');
        this.q1= createElement('h2'," Q1.WOULD YOU LIKE TO JOIN SAVE THE POOR KIDS SANSTHAN ")
        this.radio=createRadio('h3') 
        this.radio.option('NO')
        //this.radio1=createRadio('h3') 
        this.radio.option('YES')
        this.q2= createElement('h2'," Q2.HOW MUCH WOULD YOU CONTRIBUTE ")
        this.radio1=createRadio('h3') 
        this.radio1.option('500')
       // this.radio4=createRadio('h3') 
        this.radio1.option('100')
        //this.radio9=createRadio('h3') 
        this.radio1.option('MORE')
        this.q3= createElement('h2'," Q3.WOULD YOU LIKE TO VOLUNTEER THE PROGRAMS OF POOR KIDS SANSTHAN  ")
        this.radio2=createRadio('h3') 
        this.radio2.option('NO')
        //this.radio6=createRadio('h3') 
        this.radio2.option('YES')
        this.q4= createElement('h2'," Q4.PLEASE SPECIFY YOUR AGE GROUP")
        this.radio3=createRadio('h3') 
        this.radio3.option('18-35')
        //this.radio8=createRadio('h3') 
        this.radio3.option('45-70')
        this.done = createButton("DONE");
        this.thanks= createElement('h2',"THANK YOU")
    }

    display(){
       
       this.input.position(50,50);
       this.email.position(420,50);
       this.button.position(300,80);
       //this.q1.hide()
       this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        this.email.hide()
        this.greeting.html("WELCOME TO THE SURVEY")
        this.greeting.position(200,10)
        
        this.q1.position(20,50)
        this.radio.position(20,120)
       

        this.q2.position(20,200)
        this.radio1.position(20,280)
        

        this.q3.position(20,350)
        this.radio2.position(20,420)
        

        this.q4.position(20,500)
        this.radio3.position(20,570)
        
        this.done.position(200,700)

        
      });

      this.done.mousePressed(()=>{
        this.greeting.hide()
        
        this.q1.hide()
        this.radio.hide()
       

        this.q2.hide()
        this.radio1.hide()
        

        this.q3.hide()
        this.radio2.hide()
       

        this.q4.hide()
        this.radio3.hide()
        
        this.done.hide()

        this.thanks.position(400,430)


        user.name=this.input.value()
        user.email=this.email.value()
        UserCount+=1
        user.index=UserCount
       // user.update()
        user.updateCount(UserCount)
        user.radio=this.radio.value()
        user.radio1=this.radio1.value()
        user.radio2=this.radio2.value()
        user.radio3=this.radio3.value()
        var answer=[user.radio,user.radio1,user.radio2,user.radio3]
        user.update(answer)

      })
    }
}
    
