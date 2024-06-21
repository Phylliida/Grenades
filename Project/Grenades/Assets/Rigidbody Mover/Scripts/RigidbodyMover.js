var player = 1;
var spin = 3.0;
var speed = 10.0;
var gravity = 20;
var jump = 10;
var airControl = 0.1;
var speedDeterioration = 0.1;
var amountOfJumpsAllowed = 1;
var verticalAxis = "Vertical";
var horizontalAxis = "Horizontal";
var jumpButton = "space";
var wallJumpToggleButton = "q";
private var actualSpeed : Vector3;
private var moveDirection;
private var a = 1;
private var grounded = false;
private var jumpAmount = 0;
private var hitInfo : RaycastHit;
var ignoreTheseVariablesBelow : String;
var spawnPointPosition : Vector3;
var spawnPointRotation : Quaternion;
var modifiedVelocity : Vector3;
var movingPlatform : Transform;
var wallJumpCollider : WallJumpCollider;
private var wallJumpTimer = 0.0;
var wallJumping = true;
var it = false;
var waitingOnceIt = false;
var timeOutWhenIt = 5;
var turnOnMessage = false;
function Start () {
	spawnPointPosition = transform.position;
	spawnPointRotation = transform.rotation;
}
function Update () {
if(!waitingOnceIt){
	transform.localEulerAngles = Vector3(0,transform.localEulerAngles.y,0); //prevent rotation around the x and z axis - that causes problems
	if(Physics.Raycast (transform.position, Vector3(0,-1,0), hitInfo, 1)){
        if (!hitInfo.collider.isTrigger){
            grounded = true;
            if(hitInfo.collider.material.name == "Ice"){
                speedDeterioration = hitInfo.collider.material.dynamicFriction;
                Debug.Log(speedDeterioration);
            }
            else{
                speedDeterioration = 1;
            }
            jumpAmount = 1;
        }
        else{
            grounded = false;
        }
	}
	else{
		grounded = false;
	}
	if(Input.GetKeyDown(jumpButton) && grounded){
		jumpAmount = 2;
		rigidbody.velocity.y = jump;
	}	
	else{
		if(Input.GetKeyDown(jumpButton) && jumpAmount < amountOfJumpsAllowed){ //Double Jump!
			jumpAmount = jumpAmount + 1;
			if(rigidbody.velocity.y > jump){
				rigidbody.velocity.y += jump;
			}
			else{
				rigidbody.velocity.y = jump;	
			}
		}
	}
	if(Input.GetAxis(horizontalAxis) != 0 && Time.timeSinceLevelLoad - wallJumpTimer > 1){
		actualSpeed = transform.InverseTransformDirection(rigidbody.velocity);
		transform.Rotate( 0 ,  Input.GetAxis(horizontalAxis) * Time.deltaTime * spin * 50, 0);
		actualSpeed = Vector3(0,rigidbody.velocity.y,actualSpeed.z);
		actualSpeed = transform.TransformDirection(actualSpeed);
		rigidbody.velocity = actualSpeed;
		
	}
	else{
		if(Input.GetAxis(horizontalAxis) != 0){
			transform.Rotate( 0 ,  Input.GetAxis(horizontalAxis) * Time.deltaTime * spin * 50, 0);
		}
	}
	if(Input.GetAxis(verticalAxis) != 0 && grounded){
		
		var currentSpeed = Input.GetAxis(verticalAxis) * Time.deltaTime * speed * 50;
		moveDirection = Vector3(0,0,currentSpeed);
		moveDirection = transform.TransformDirection(moveDirection);
		actualSpeed = transform.InverseTransformDirection(rigidbody.velocity);
		if((Input.GetAxis(verticalAxis) > 0 && actualSpeed.z < speed) || (Input.GetAxis(verticalAxis) < 0 && actualSpeed.z > -speed)){
			
		rigidbody.velocity += Vector3(moveDirection.x, 0, moveDirection.z);
		}
	}
	else{
		if(Input.GetAxis(verticalAxis) != 0 && Time.timeSinceLevelLoad - wallJumpTimer > 1){
			var currentSpeedInAir = Input.GetAxis(verticalAxis) * Time.deltaTime * (speed * airControl) * 50.0 ;
			moveDirection = Vector3(0,0,currentSpeedInAir);
			moveDirection = transform.TransformDirection(moveDirection);
			actualSpeed = transform.InverseTransformDirection(rigidbody.velocity);
			if((Input.GetAxis(verticalAxis) > 0 && actualSpeed.z < speed) || (Input.GetAxis(verticalAxis) < 0 && actualSpeed.z > -speed)){
				rigidbody.velocity += Vector3(moveDirection.x, 0, moveDirection.z);
			}
		}
		else{
			if(grounded){ //if on ground, deteriorate speed
				actualSpeed = transform.InverseTransformDirection(rigidbody.velocity);
				if(Mathf.Abs(actualSpeed.z) > 0){
					var newz = (Mathf.Abs(actualSpeed.z) - Mathf.Abs(actualSpeed.z) * speedDeterioration * Time.deltaTime) * (actualSpeed.z / Mathf.Abs(actualSpeed.z)); // speed - speedDeterioration * speed; (makes speed smaller);
						actualSpeed = Vector3(0,rigidbody.velocity.y,newz);
						actualSpeed = transform.TransformDirection(actualSpeed);
						rigidbody.velocity = actualSpeed;
				}
			}
		}
		
		
	}
	if(wallJumping){
		if(wallJumpCollider.hit && !wallJumpCollider.grounded && wallJumpCollider.hitCollider.gameObject.name != "Exclude"){
			if(Input.GetKey(jumpButton)){
				if(jumpAmount == 1){
					jumpAmount = 2;	
				}
				var hitLocation : Vector3;
				hitLocation = wallJumpCollider.hitCollider.ClosestPointOnBounds(transform.position);
				//if(rigidbody.SweepTest (transform.forward, hitInfo, 1) || rigidbody.SweepTest (transform.forward, hitInfo, -1)){
					moveDirection = hitLocation - transform.position;
					//transform.rigidbody.AddExplosionForce(1000, hitLocation, 5, 0);
 					//transform.rigidbody.AddForceAtPosition(moveDirection.normalized, transform.position);
					actualSpeed = transform.InverseTransformDirection(rigidbody.velocity);
					moveDirection = Vector3(0,0,-speed);
					var currentRotation : Quaternion;
					currentRotation = transform.rotation;
					transform.LookAt(hitLocation);
					//if(Physics.SphereCast (Vector3(transform.position.x,transform.position.y + 1.5,transform.position.z),1, transform.forward, hitInfo, 2)  || Physics.SphereCast (Vector3(transform.position.x,transform.position.y - 1.5,transform.position.z),1, transform.forward, hitInfo, 2)){
						moveDirection = transform.TransformDirection(moveDirection);
						rigidbody.velocity = Vector3(moveDirection.x, jump, moveDirection.z);
						transform.rotation = currentRotation;
						wallJumpTimer = Time.timeSinceLevelLoad;
					//}
					//else{
						//transform.rotation = currentRotation;
					//}
				//}
			}
		}
	}
	if(Input.GetKeyDown(wallJumpToggleButton)){
		if(wallJumping){
			wallJumping = false;
		}
		else{
			wallJumping = true;
		}
	}	
	if(movingPlatform){
		actualSpeed = transform.InverseTransformDirection(modifiedVelocity);
		var otherActualSpeed = transform.InverseTransformDirection(rigidbody.velocity);
		actualSpeed = Vector3(actualSpeed.x,rigidbody.velocity.y,otherActualSpeed.z);
		actualSpeed = transform.TransformDirection(actualSpeed);
		rigidbody.velocity = actualSpeed;
	}
	rigidbody.velocity.y = rigidbody.velocity.y -  gravity * Time.deltaTime; //gravity
	rigidbody.angularVelocity = rigidbody.angularVelocity * 0;//prevent Rotational Velocity (causes problems)
}
else{
	rigidbody.velocity = Vector3(0,0,0);
	rigidbody.angularVelocity = Vector3(0,0,0);	
	transform.localEulerAngles = Vector3(0,transform.localEulerAngles.y,0); //prevent rotation around the x and z axis - that causes problems
	transform.Rotate( 0 ,  Input.GetAxis(horizontalAxis) * Time.deltaTime * spin * 50, 0);
}	
}
function OnCollisionEnter(collision : Collision) {
	var tempComponent : RigidbodyMover;
	tempComponent = collision.transform.GetComponent(RigidbodyMover);
	if(tempComponent){
		if(tempComponent.it && !tempComponent.waitingOnceIt){
			tempComponent.it = false;
			MakeIt();	
		}
	}	
}
function MakeIt(){
	turnOnMessage = true;
	waitingOnceIt = true;
	it = true;
	yield WaitForSeconds(timeOutWhenIt);	
	waitingOnceIt = false;
}