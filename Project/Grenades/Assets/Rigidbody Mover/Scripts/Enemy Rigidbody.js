var enemyArea : EnemyAreaScript;
var speed = 10;
private var currentVelocity : Vector3;
private var currentY = 0.0;
function Start () {
	currentY = transform.position.y;
}
function Update () {
	transform.position.y = currentY;
	transform.localEulerAngles = Vector3(0,transform.localEulerAngles.y,0);
	if(Physics.Raycast (transform.position, Vector3(0,-1,0), 1.1)){
		if(enemyArea.playerTarget){
			transform.LookAt(enemyArea.playerTarget.position);
			transform.localEulerAngles = Vector3(0, transform.localEulerAngles.y,0);
			currentVelocity = Vector3(0,0,speed);
			currentVelocity = transform.TransformDirection(currentVelocity);
			rigidbody.velocity = currentVelocity;
		}	
		else{
			if(Vector3.Distance(transform.position,enemyArea.transform.position) > 5){			
				transform.LookAt(enemyArea.transform.position);
				transform.localEulerAngles = Vector3(0, transform.localEulerAngles.y,0);
				currentVelocity = Vector3(0,0,speed);
				currentVelocity = transform.TransformDirection(currentVelocity);
				rigidbody.velocity = currentVelocity;
			}
		}
	}
	else{
		if(Vector3.Distance(transform.position,enemyArea.transform.position) > 5){	
			transform.LookAt(enemyArea.transform.position);
			transform.localEulerAngles = Vector3(0, transform.localEulerAngles.y,0);
			currentVelocity = Vector3(0,0,speed);
			currentVelocity = transform.TransformDirection(currentVelocity);
			rigidbody.velocity = currentVelocity;
		}
	}
	
}
function OnCollisionEnter(collisionInfo : Collision) {
	var tempComponent : PlayerCollider;
	tempComponent = collisionInfo.transform.GetComponent(PlayerCollider);
	if(tempComponent){
		currentVelocity = Vector3(0,2,-speed - 1);
		currentVelocity = collisionInfo.transform.TransformDirection(currentVelocity);
		collisionInfo.rigidbody.velocity = currentVelocity;
	}
}