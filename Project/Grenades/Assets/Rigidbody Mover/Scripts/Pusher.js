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
private var collisionTimer = 0.0;
private var startingCollisionTimer = 0.0;
private var startVeryStartCollisionTimer = true;
private var startCollisionTimer = true;
var waitAtVeryStart = 0.0;
private var doneWaiting = false;
var wait = true;
var waitTime = 1.0;
var waitAtStartSelf = false;
var timeWaitAtStartSelf = 5.0;
var waitAtEndSelf = false;
var timeWaitAtEndSelf = 5.0;
private var passedTime = 0.0;
private var startMove = true;
private var back = false;
var currentRotation;
var needToModify = false;
private var startMoving = false;
private var tempComponent : RigidbodyMover;
var frontHinge : Transform;
var backHinge : Transform;
//private var frontPlace : Vector3;
//private var backPlace : Vector3;
function Start() {
	rigidbody.useGravity = false;
	currentRotation = transform.rotation;
	
	/*if(frontHinge){
	frontPlace = Vector3(transform.position.x - frontHinge.transform.position.x,transform.position.y - frontHinge.transform.position.y,transform.position.z - frontHinge.transform.position.z);
	}
	if(backHinge){
	backPlace = Vector3(transform.position.x - backHinge.transform.position.x,transform.position.y - backHinge.transform.position.y,transform.position.z - frontHinge.transform.position.z);
	}
	*/
	
}

function Update () {
	/*
	if(backHinge){
		//backHinge.transform.position = Vector3(-backPlace.x + transform.position.x,-backPlace.y + transform.position.y,-backPlace.z + transform.position.z );
	}
	if(frontHinge){
		//frontHinge.transform.position = Vector3(-frontPlace.x + transform.position.x,-frontPlace.y + transform.position.y,-frontPlace.z + transform.position.z );
	}
	*/
	if(!doneWaiting){
		if(waitAtVeryStart > 0 && !startMoving && startVeryStartCollisionTimer){
			startingCollisionTimer = Time.timeSinceLevelLoad;
			startVeryStartCollisionTimer = false;
		}
		else{
			if(waitAtVeryStart <= 0){
				doneWaiting = true;
			}
			if(Time.timeSinceLevelLoad - startingCollisionTimer > waitAtVeryStart){
				doneWaiting = true;
			}
		}	
	}
	else{
		if(startMoving || (!wait && !waitAtStartSelf && !waitAtEndSelf)){
			if(startMove){
				if(!back){
					goto = currentTarget;
				}
				else{
					goto = pastTarget;
				}
				passedTime = Time.timeSinceLevelLoad;
				movex = (goto.x - transform.position.x) / time;
				movey = (goto.y - transform.position.y) / time;
				movez = (goto.z - transform.position.z) / time;
				startMove = false;
			}
			rigidbody.velocity = Vector3(movex, movey, movez);
			rigidbody.angularVelocity = Vector3(0,0,0);
			transform.rotation = currentRotation;
			if(!startMove){
				if(Time.timeSinceLevelLoad - passedTime >= time){
					
					rigidbody.velocity = Vector3(0,0,0);
					rigidbody.angularVelocity = Vector3(0,0,0);
					transform.rotation = currentRotation;
					transform.position = goto;
					startMove = true;
					if(back){
						back = false;
					}
					else{
						back = true;
					}
					startMoving = false;
					startCollisionTimer = true;
				}	
			}
		}
		else{
			rigidbody.velocity = Vector3(0, 0, 0);
			rigidbody.angularVelocity = Vector3(0,0,0);
			transform.rotation = currentRotation;
			
			
			if(waitAtStartSelf && !back){
				if(startCollisionTimer && !startMoving){
					collisionTimer = Time.timeSinceLevelLoad;
					startCollisionTimer = false;
				}
				else{
					if(Time.timeSinceLevelLoad - collisionTimer > timeWaitAtStartSelf){
						startMoving = true;
					}
				}
			}
			else{
				if(waitAtEndSelf && !waitAtStartSelf && !back){
				startMoving = true;
				}
			}
		
		
			if(waitAtEndSelf && back){
				if(startCollisionTimer && !startMoving){
					collisionTimer = Time.timeSinceLevelLoad;
					startCollisionTimer = false;
				}
				else{
					if(Time.timeSinceLevelLoad - collisionTimer > timeWaitAtEndSelf){
						startMoving = true;
					}
				}
			}
			else{
				if(waitAtStartSelf && !waitAtEndSelf && back){
					startMoving = true;
				}
			}
		
		
			if(!wait){
				if(!waitAtStartSelf && !back){
					startMoving = true;
				}
				if(!waitAtEndSelf && back){
					startMoving = true;
				}
				
			}
		
		}
	}
		
	
}

function OnCollisionExit (collision : Collision){
	tempComponent = collision.transform.GetComponent(RigidbodyMover);
	if(tempComponent){
		tempComponent.movingPlatform = null;
	}
}


function OnCollisionStay (collision : Collision){
	tempComponent = collision.transform.GetComponent(RigidbodyMover);
	if(tempComponent){
		tempComponent.modifiedVelocity = rigidbody.velocity;
		tempComponent.movingPlatform = transform;
		if(startCollisionTimer && !startMoving){
			/*
			if(!back){
				if(frontHinge){
				frontHinge.transform.Rotate(0,0,90);
				}
			}
			else{
				if(backHinge){
				backHinge.transform.Rotate(0,0,90);
				}
			}
			*/
		collisionTimer = Time.timeSinceLevelLoad;
		startCollisionTimer = false;
		}
		else{
			if(Time.timeSinceLevelLoad - collisionTimer > waitTime && !startMoving){
				startMoving = true;
				/*
				if(!back){
					if(frontHinge){
					frontHinge.transform.Rotate(0,0,-90);
					}
				}
				else{
					if(backHinge){
					backHinge.transform.Rotate(0,0,-90);
					}
				}
				*/
			}
		}
			
	}
}

function OnCollisionEnter (collision : Collision){
	tempComponent = collision.transform.GetComponent(RigidbodyMover);
	if(tempComponent){
		tempComponent.modifiedVelocity = rigidbody.velocity;
		tempComponent.movingPlatform = transform;
		if(!startMoving){
			startCollisionTimer = true;
		}
		//collision.transform.rigidbody.velocity = rigidbody.velocity;
	}
}
