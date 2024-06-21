var enemyArea : EnemyAreaScript;
var speed = 5;
var launchAwaySpeed = 10;
var launchUpSpeed = 5;
var bopUpAmount = 5;
private var currentVelocity : Vector3;
private var currentY = 0.0;
var topCollider : EnemyCollider;
var bottomCollider : EnemyCollider;
var parent : EnemySpawner;
var lifeCounter : LifeCounter;
function Start () {
	currentY = transform.position.y;
}
function Update () {
	if(topCollider.hitPerson){
		topCollider.hitPerson.transform.rigidbody.velocity = Vector3(topCollider.hitPerson.transform.rigidbody.velocity.x,bopUpAmount,topCollider.hitPerson.transform.rigidbody.velocity.z);
		if(lifeCounter){
			lifeCounter.DecreaseLife();
		}
		else{
			gameObject.Destroy(transform.parent.gameObject);
		}
		if(parent){
			parent.enemyCount = parent.enemyCount - 1;
		}
	}
	if(bottomCollider.hitPerson){
		var desiredVelocity : Vector3;
		desiredVelocity = Vector3(0,launchUpSpeed,launchAwaySpeed);
		transform.LookAt(bottomCollider.hitPerson.transform.position);
		transform.localEulerAngles = Vector3(0, transform.localEulerAngles.y,0);
		desiredVelocity = transform.TransformDirection(desiredVelocity);
		bottomCollider.hitPerson.transform.rigidbody.velocity = desiredVelocity;
	}
	
	
	
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
			else{
				rigidbody.velocity = Vector3(0,0,0);
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
		else{
			rigidbody.velocity = Vector3(0,0,0);
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