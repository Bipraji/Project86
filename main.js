var canvas = new fabric.Canvas('myCanvas');
 var x = document.getElementById("myAudio");

 hbd_obj = "";

function new_image()
{
    
    //what color is ur BUGATTI//
    fabric.Image.fromURL("BirthdayImage.jpg", function(Img){
        hbd_obj = Img;
        hbd_obj.scaleToWidth(700);
        hbd_obj.scaleToHeight(510);
        hbd_obj.set({

            top: 0,
            left: 0,

        });
    canvas.add(hbd_obj);
    });
	
}

function ply(){
	x.play();
}
