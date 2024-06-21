var lighta : Light;
var RickMover : RickMover;
var AlexMover : AlexMover;
var JennyMover : JennyMover;
var startPosition : Transform;
var stringalex = "Alex Auto Respawn On";
var stringjenny = "Jenny Auto Respawn On";
var stringrick = "Rick Auto Respawn On";
function OnGUI () {
    // Register the window. We create two windows that use the same function
    // Notice that their IDs differ
    
	
	if (GUI.Button (Rect (Screen.width -180,Screen.height -90,180,30), stringalex)) {
		if(AlexMover.isReset){
			AlexMover.isReset = false;
			stringalex = "Alex Auto Respawn On";
		}
		else
		{
			AlexMover.startPosition = startPosition.position;
			AlexMover.isReset = true;	
			stringalex = "Alex Auto Respawn Off";
		}
	}
	if (GUI.Button (Rect (Screen.width -180 ,Screen.height  - 60,180,30), stringrick)) {
		if(RickMover.isReset){
			RickMover.isReset = false;
			stringrick = "Rick Auto Respawn On";
			
		}
		else
		{
			RickMover.startPosition = startPosition.position;
			RickMover.isReset = true;
			stringrick = "Rick Auto Respawn Off";	
		}
	}
	if (GUI.Button (Rect (Screen.width -180 ,Screen.height-30,180,30), stringjenny)) {
		if(JennyMover.isReset){
			JennyMover.isReset = false;
			stringjenny = "Jenny Auto Respawn On";
		}
		else
		{
			JennyMover.startPosition = startPosition.position;
			JennyMover.isReset = true;	
			stringjenny = "Jenny Auto Respawn Off";
		}
	}
	if (GUI.Button (Rect (Screen.width -210,Screen.height -90,30,30), "")) {
		AlexMover.Restart();
		
	}
	if (GUI.Button (Rect (Screen.width -210,Screen.height -60,30,30), "")) {
		RickMover.Restart();
		
	}
	if (GUI.Button (Rect (Screen.width -210,Screen.height -30,30,30), "")) {
		JennyMover.Restart();
		
	}

	GUI.Box (Rect (0, 0, 100, 25), "" + RickMover.speed);
	GUI.Box (Rect (Screen.width / 2, 0, 100, 25), "" + AlexMover.speed);
	GUI.Box (Rect (0,Screen.height / 2, 100, 25), "" + JennyMover.speed);
	
	
}




// Make the contents of the window.
// The value of GUI.color is set to what it was when the window
// was created in the code above.
