var itAssigner : ItAssigner;
function Update () {
	for(var c = 0; c <  itAssigner.players.Length; c++){
		if(itAssigner.players[c].it){
			transform.position = Vector3(itAssigner.players[c].transform.position.x,itAssigner.players[c].transform.position.y + 3,itAssigner.players[c].transform.position.z);
			transform.parent = itAssigner.players[c].transform;
		}	
	}
}