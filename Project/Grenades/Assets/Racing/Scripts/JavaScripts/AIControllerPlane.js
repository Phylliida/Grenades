var aKey = false;
var sKey = false;
var dKey = false;
var wKey = false;
var placeHolder : PlaceHolder;
var colliderScript : PlayerCollider;
var planeAI1 : PlaneAI;
planeAI1 = GetComponent(PlaneAI);
private var lookAt : Vector3;
function Update () {
	var oldx : int = transform.localEulerAngles.x;
	var oldy : int = transform.localEulerAngles.y;
	var oldz : int = transform.localEulerAngles.z;
	transform.LookAt(placeHolder.sections[(placeHolder.section[colliderScript.referenceNumber])].selfTransform.position);
	
	transform.localEulerAngles.z = oldz;
		/*if( ((oldy - newy) > 0)){
			aKey = true;
			dKey = false;
		}
		if( ((oldy - newy) < 0)){
			dKey = true;
			aKey = false;
		}
		
		if( ((oldx - newx) > 0)){
			wKey = true;
			sKey = false;
		}
		if( ((oldx - newx) < 0)){
			sKey = true;
			wKey = false;
		}*/
		
	

	
	
	
	
	
	
}