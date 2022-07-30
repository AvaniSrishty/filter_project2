function setup() {
    canvas = createCanvas(350, 300);
    canvas.position(450, 200);
    
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotposes);
    }

    function modelLoaded(){
      console.log("model is ready");
    }
    
   function gotposes(result){ 
     if(result.length > 0){
        console.log(result);
     }
    }

    function draw() {
    image(video, 0, 0, 350, 300);
    }
     function takesnapshot(){
        save("mysnap.png");
     }
    
    
     