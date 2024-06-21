var target : Transform;
private var currentTarget : Vector3;
currentTarget = target.transform.position;
private var pastTarget : Vector3;
pastTarget =  transform.position;
private var goto : Vector3;
private var movex = 0.0;
private var movey = 0.0;
private var movez = 0.0;
var time = 5.0;
private var passedTime = 0.0;
private var startMove = true;
private var back = false;
function Update () {
	
	if(startMove){
		if(!back){
			goto = currentTarget;
		}
		else{
			goto = pastTarget;
		}
		passedTime = Time.timeSinceLevelLoad;
		movex = (goto.x - transform.position.x) / time;
		//movey = (goto.y - transform.position.y) / time;
		movez = (goto.z - transform.position.z) / time;
		startMove = false;
	}
	transform.position =  Vector3(transform.position.x + movex * Time.deltaTime,transform.position.y,transform.position.z);
	if(!startMove){
		if(Time.timeSinceLevelLoad - passedTime >= time){
			transform.position = Vector3(goto.x,transform.position.y,transform.position.z);
			startMove = true;
			if(back){
				back = false;
			}
			else{
				back = true;
			}
		}
	}
	
	
}