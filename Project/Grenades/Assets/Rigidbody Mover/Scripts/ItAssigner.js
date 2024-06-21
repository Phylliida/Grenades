var players : RigidbodyMover[];
private var selectedNumber : float;
function Start () {
	selectedNumber = Random.Range(0,players.Length - 1);
	for(var c = 0; c <  players.Length; c++){
		if(c == selectedNumber){
			players[c].it = true;
		}
		else{
			players[c].it = false;
		}
			
	}
	
}