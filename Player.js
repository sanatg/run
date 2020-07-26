class Player{
    constructor(){
    } 
    display(){

    }
    saveName()
    {   
     
        gameStart = 1;
        gameStart2 = 1;
        var ref1 = database.ref('//name');
        var data1 = 
        {
         namePL1:input.value(),
         namePL2:input.value()
         //.value()
        } 
        ref1.push(data1);
    }
    updateScore(){
        var ref2 = database.ref('//distance');
        var data2 = {
        distance:playerDistance,
        distance2:playerDistance2
       }
       ref2.push(data2);
    }

    
}