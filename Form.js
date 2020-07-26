class Form{
  constructor()
  {
    // this.input = createInput("Name");
    this.playButton = createButton("play");
    this.greeting = createElement();
  }

    display()
    {
        this.playButton.mousePressed(()=>{
          showCanvas = 1;
        player.saveName();
        input.hide();
        input2.hide();
        this.playButton.hide();
        this.greeting.html("Hello,"+input.value()+" get Ready and "+input2.value()+" also get ready");
        canvas.show();
      });
    }
}