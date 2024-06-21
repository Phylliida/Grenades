var trackBlock : Transform;
var waitTime = 5.0;
private var currentTime = 0.0;
private var startTimer = true;

function Start () {
	
	currentTime = Time.timeSinceLevelLoad;	
	
}
function Update () {
	
	if((Time.timeSinceLevelLoad - currentTime) >= waitTime){
		Instantiate(trackBlock,Vector3(transform.position.x, transform.position.y - 2.75, transform.position.z + 6.5),transform.rotation);
		currentTime = Time.timeSinceLevelLoad;
	}
	
}