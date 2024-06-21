var Bombonbc: Collider;
var bunnyChasec: Collider;
var imBluec: Collider;
var bombons: AudioSource;
var bunnychase: AudioSource;
var imblue: AudioSource;
var pitchchange = 0.1;
private var bombplay = false;
private var bunnyplay = false;
private var imblueplay = false;
private var trueorfalse = false;

function Update ()
{
	trueorfalse = bombons.audio.isPlaying;
    if (trueorfalse && bombplay){
    
    	if (Input.GetKey ("v")) {
    		bombons.audio.Pause();
    	}
    	if (Input.GetKey ("g")) {
    		bombons.audio.pitch += pitchchange;
    	}
    	if (Input.GetKey ("h")) {
    		bombons.audio.pitch -= pitchchange;
    	}
    }
     if (!trueorfalse && bombplay){
    if (Input.GetKey ("b")) {
    		bombons.audio.Play();
    	}
    	
     }
    	trueorfalse = bunnychase.audio.isPlaying;
    	
    	if (trueorfalse && bunnyplay){
    
    	if (Input.GetKey ("v")) {
    		bunnychase.audio.Pause();
    	}
    	if (Input.GetKey ("g")) {
    		bunnychase.audio.pitch += pitchchange;
    	}
    	if (Input.GetKey ("h")) {
    		bunnychase.audio.pitch -= pitchchange;
    	}
    }
     if (!trueorfalse && bunnyplay){
    if (Input.GetKey ("b")) {
    		bunnychase.audio.Play();
    	}
     }
  trueorfalse = imblue.audio.isPlaying;
  
  if (trueorfalse && imblueplay){
    
    	if (Input.GetKey ("v")) {
    		imblue.audio.Pause();
    	}
    	if (Input.GetKey ("g")) {
    		imblue.audio.pitch += pitchchange;
    	}
    	if (Input.GetKey ("h")) {
    		imblue.audio.pitch -= pitchchange;
    	}
  }
     if (!trueorfalse && imblueplay){
    if (Input.GetKey ("b")) {
    		imblue.audio.Play();
    	}
     }
}

function OnTriggerEnter (other : Collider)  {    
   if (other==Bombonbc) { 
      imblue.audio.Stop(); 
      imblueplay = false;
      bunnychase.audio.Stop();
      bunnyplay = false;
      bombons.audio.Play();
      bombplay = true;
      bombons.audio.pitch = 1;
      imblue.audio.pitch = 1;
      bunnychase.audio.pitch = 1;
   } 
   if (other==bunnyChasec) {  
   	   imblue.audio.Stop(); 
   	   imblueplay = false;
      bunnychase.audio.Play();
      bunnyplay = true;
      bombons.audio.Stop();
      bombplay = false;
      bombons.audio.pitch = 1;
      imblue.audio.pitch = 1;
      bunnychase.audio.pitch = 1;
   } 
   if (other==imBluec) { 
      imblue.audio.Play(); 
      imblueplay = true;
      bunnychase.audio.Stop();
      bunnyplay = false;
      bombons.audio.Stop();
      bombplay = false;      
      bombons.audio.pitch = 1;
      imblue.audio.pitch = 1;
      bunnychase.audio.pitch = 1;
   } 
}	

     
        
        