var destinationScene = "Level Name";


function OnTriggerStay (other : Collider) {
	Debug.Log("HIT!");
    Application.LoadLevel (destinationScene);
	
}