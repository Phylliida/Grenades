var sections : Checkpoint[];
var racers : PlayerCollider[];
var lap: int[];
lap = new int[racers.Length];
var place : int[];
place = new int[racers.Length];
var section : int[];
section = new int[racers.Length];
var order : Transform[];
people = new Transform[racers.Length];
var placeList : PlayerCollider[];
placeList = new PlayerCollider[racers.Length];
function Start () {
		for(var c = 0; c <  racers.Length; c++){
				racers[c].referenceNumber = c;
				sections[0].AddToWaitingList (racers[c].collider);
				placeList[c] = racers[c];
				place[c] = c;
		}
		for(var i = 0; i < sections.Length; i++){
				sections[i].number = i;
		}
		Debug.Log(sections[0].waitingList);
	
}
function Update () {
	
	
}