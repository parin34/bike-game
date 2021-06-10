class Form{

    constructor(){
        this.greeting= createElement("h2")
        this.button = createButton("Play")
        this.input = createInput("NAME")
        this.reset = createButton("reset")
    }

 Hide(){
     this.greeting.hide()
     this.button.hide()
     this.input.hide()
 }    

    display() {
     var title = createElement('h1')
     title.html("Bike racing")
     title.position(displayWidth/2,20);
     this.input.position(displayWidth/2,displayHeight/2);
        this.reset.position(100, 100);
     this.button.position(displayWidth/2,displayHeight/2+100)
     this.button.mousePressed(()=>{
         this.input.hide();
         this.button.hide();
         player.name = this.input.value()
         playerCount=playerCount+1
         player.index = playerCount
         player.updateCount(playerCount);
         player.update();
       
         this.greeting.html("WELCOME "+player.name);
         this.greeting.position(displayWidth/2,displayHeight/2);
     })

     this.reset.mousePressed(()=>{
        player.updateCount(0);
         game.update(0)
         database.ref('/').update({
             players : null
         })
    })
    }
   


}