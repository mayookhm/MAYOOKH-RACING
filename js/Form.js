class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.age = createInput("Age");
    this.reset = createButton('RESET');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.age.hide();
    this.reset.hide();
  }

  display(){
    var title = createElement('h2')
    fill("red");
    title.html("MAYOOKH'S SUPER RUNNER");
    title.position(displayWidth/2-510, 0);
this.age.position(displayWidth/2-40,displayHeight/2-50);
    this.input.position(displayWidth/2-40,displayHeight/2-80);
    this.button.position(displayWidth/2+30,displayHeight/2);
this.reset.position(displayWidth/2+100,displayHeight/2);
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.age.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      textSize(50);
      fill("red");
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2-510,displayHeight/4);
    });

  }
}
