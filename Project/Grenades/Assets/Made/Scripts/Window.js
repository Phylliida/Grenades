var AlexMover : AlexMover;
function OnGUI () {
    // Register the window. We create two windows that use the same function
    // Notice that their IDs differ
    if (transform.parent.networkView.isMine)
	{
	
	GUI.Box (Rect (0, 0, 100, 25), "" + AlexMover.speed);
	}
	
}




// Make the contents of the window.
// The value of GUI.color is set to what it was when the window
// was created in the code above.
