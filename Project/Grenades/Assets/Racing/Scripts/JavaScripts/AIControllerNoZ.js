var vertical = 1;
var horizontal = 0;
var jump = false;
var reset = false;
var placeHolder : PlaceHolder;
var colliderScript : PlayerCollider;
var checked = false;
var startedTime = false;
function Update () {
	var oldx = transform.localEulerAngles.x;
	var oldy = transform.localEulerAngles.y;
	var oldz = transform.localEulerAngles.z;
	transform.LookAt(placeHolder.sections[(placeHolder.section[colliderScript.referenceNumber])].selfTransform.position);
	transform.localEulerAngles.x = oldx;
	//var newy = transform.localEulerAngles.y;
	//transform.localEulerAngles.y = oldy;
	var newz = transform.localEulerAngles.z; 
	/*if(vertical == 1){
		if( ((oldy - newy) > 0)){
			horizontal = -1;
		}
		if( ((oldy - newy) < 0)){
			horizontal = 1;
		}
	}
	if(vertical == -1){
		if( ((oldy - newy) < 0)){
			horizontal = -1;
		}
		if( ((oldy - newy) > 0)){
			horizontal = 1;
		}
	}
	var tempRigidbody = GetComponent(Rigidbody);
	if(rigidbody.velocity.z <= 2000){
		
		if(!checked && vertical == 1){
			var checked = true;
			var tempTime = Time.timeSinceLevelLoad;
			Debug.Log("TimerStarted");
		}
		if((Time.timeSinceLevelLoad - tempTime) > 1.00 && vertical == 1){
			vertical = -1;
			var tempTime2 = Time.timeSinceLevelLoad;
			Debug.Log("BackingUp!");
		}
	}
	if(vertical == -1){
		if((Time.timeSinceLevelLoad - tempTime2) > 10.000){
			 vertical = 1;
			 
		}
	}
	if(vertical == 1 && checked == true){
		if(!startedTime){
			startedTime = true;
			var tempTime3 = Time.timeSinceLevelLoad;
		}
		if((Time.timeSinceLevelLoad - tempTime3) > 4){
			checked = false;
			startedTime = false;
		}
	}
	*/
	
	
	
	
}