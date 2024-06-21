function OnGUI () {
    // Register the window. We create two windows that use the same function
    // Notice that their IDs differ
 	if (GUI.Button (Rect (0,10,150,100), "Platformer")) {
		Application.LoadLevel("Rigidbody Mover");
	}
	if (GUI.Button (Rect (Screen.width /4,10,150,100), "Racing Course")) {
		Application.LoadLevel("TestRace");
	}
	if (GUI.Button (Rect (Screen.width / 2,10,150,100), "Racing Terrain")) {
		Application.LoadLevel("Terrain Race");
	}
	if (GUI.Button (Rect (Screen.width / 2 + Screen.width/4,10,150,100), "Original Racing")) {
		Application.LoadLevel("2P");
	}
}
