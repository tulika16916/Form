var f,user,UserCount=0;


function setup() {
  createCanvas(1000,800);
  database = firebase.database();
  f = new Form()
  user=new User()
}

function draw() {
  background(198,210,130);  
 f.display();
 
}