var vertical = 1;
var horizontal = 0;
var jump = false;
var reset = false;
var placeHolder : PlaceHolder;
var colliderScript : PlayerCollider;
var checked = false;
var startedTime = false;
private var amountNeeded = 0.0;
private var checkedIfTurning = false;
private var turnTime = 0.0;
private var turnAmount1 = 7;
var canDrive = false;
private var tempTransform : Transform;
function Update () {
	if(placeHolder.sections[(placeHolder.section[colliderScript.referenceNumber])].others.Length > 0){
	if(!checkedIfTurning){
		/*var tempPoint : Vector3;
		tempPoint = Vector3(0,0,Random.Range(-10,10));
		tempPoint = placeHolder.sections[(placeHolder.section[colliderScript.referenceNumber])].selfTransform.TransformDirection(tempPoint);
		tempPoint = tempPoint + placeHolder.sections[(placeHolder.section[colliderScript.referenceNumber])].selfTransform.position;
		*/
		var oldx = transform.localEulerAngles.x;
		var oldy = transform.localEulerAngles.y;
		var oldz = transform.localEulerAngles.z;
		transform.LookAt(placeHolder.sections[(placeHolder.section[colliderScript.referenceNumber])].selfTransform.position);
		transform.localEulerAngles.x = oldx;
		var newy = transform.localEulerAngles.y;
		transform.localEulerAngles.y = oldy;
		transform.localEulerAngles.z = oldz;
		amountNeeded = newy - oldy;
		turnTime = 0;
		checkedIfTurning = true; 
	}
	if(checkedIfTurning){
		turnTime = turnTime + 1;
		if(turnTime <= turnAmount1){
			 transform.localEulerAngles.y = transform.localEulerAngles.y + (amountNeeded / turnAmount1);
			
			vertical = 1;
			
		}
		else{
			checkedIfTurning = false;
		}
	}
	}
	else{
		tempTransform = placeHolder.sections[(placeHolder.section[colliderScript.referenceNumber])].transform;
		if(!checkedIfTurning){
		/*var tempPoint : Vector3;
		tempPoint = Vector3(0,0,Random.Range(-10,10));
		tempPoint = placeHolder.sections[(placeHolder.section[colliderScript.referenceNumber])].selfTransform.TransformDirection(tempPoint);
		tempPoint = tempPoint + placeHolder.sections[(placeHolder.section[colliderScript.referenceNumber])].selfTransform.position;
		*/
		var oldx2 = transform.localEulerAngles.x;
		var oldy2 = transform.localEulerAngles.y;
		var oldz2 = transform.localEulerAngles.z;
		transform.LookAt(tempTransform);
		transform.localEulerAngles.x = oldx2;
		var newy2 = transform.localEulerAngles.y;
		transform.localEulerAngles.y = oldy2;
		transform.localEulerAngles.z = oldz2;
		amountNeeded = newy2 - oldy2;
		turnTime = 0;
		checkedIfTurning = true; 
	}
	if(checkedIfTurning){
		turnTime = turnTime + 1;
		if(turnTime <= turnAmount1){
			 transform.localEulerAngles.y = transform.localEulerAngles.y + (amountNeeded / turnAmount1);
			
			vertical = 1;
			
		}
		else{
			checkedIfTurning = false;
		}
	}
	}
	
}
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
	
	
	
	
