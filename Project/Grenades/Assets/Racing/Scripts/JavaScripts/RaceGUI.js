var placeHolder : PlaceHolder;
function OnGUI () {
    
	GUI.Box (Rect (0, 0, 100, 25), "" + "Place: " + (placeHolder.place[0] + 1));
	GUI.Box (Rect (0, 25, 100, 25), "" + "Lap " + (placeHolder.lap[0] + 1));
	GUI.Box (Rect (0, 50, 100, 25), "" + "Section " + (placeHolder.section[0] + 1));
	GUI.Box (Rect (Screen.width / 2, (Screen.height / 2), 100, 25), "" + "Place: " + (placeHolder.place[0] + 1));
	GUI.Box (Rect (Screen.width / 2,(Screen.height / 2) + 25, 100, 25), "" + "Lap " + (placeHolder.lap[0] + 1));
	GUI.Box (Rect (0,(Screen.height / 2), 100, 25), "" + "Place: " + (placeHolder.place[2] + 1));
	GUI.Box (Rect (0,(Screen.height / 2) + 25, 100, 25), "" + "Lap " + (placeHolder.lap[2] + 1));
	
	
}
