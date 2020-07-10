class User{
    constructor(){
        this.index=null;
        this.name=null;
        this.email=null;
        this.radio=null
        this.radio1=null
        this.radio2=null
        this.radio3=null
    }

    updateCount(count){
        database.ref('/').update({
          UserCount : count
        });
      }

    update(vote){
      var userIndex = "user"+this.index
      database.ref(userIndex).set({
          name:this.name,
          email:this.email,
          ans:vote
      })
      
    }

}