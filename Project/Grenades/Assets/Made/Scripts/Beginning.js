function OnGUI () {
    // Register the window. We create two windows that use the same function
    // Notice that their IDs differ
 	if (GUI.Button (Rect (10,10,150,100), "Networking")) {
		Application.LoadLevel("loader");
	}
	if (GUI.Button (Rect (170,10,150,100), "Local")) {
		Application.LoadLevel("NNMain");
	}
}
