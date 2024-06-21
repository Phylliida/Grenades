var player = 1;
var spin = 3.0;
var speed = 10.0;
var gravity = 20;
var jump = 10;
var airControl = 0.1;
var speedDeterioration = 0.1;
var amountOfJumpsAllowed = 2;
var verticalAxis = "Vertical";
var horizontalAxis = "Horizontal";
var jumpButton = "space";
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
function Start () {
	spawnPointPosition = transform.position;
	spawnPointRotation = transform.rotation;
}
function Update () {
	transform.localEulerAngles = Vector3(0,transform.localEulerAngles.y,0); //prevent rotation around x axis and z axis because that could cause problems
	if(Physics.Raycast (transform.position, Vector3(0,-1,0), hitInfo, 1.1)){
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
	if(Input.GetKeyDown(jumpButton) && grounded){
		jumpAmount = jumpAmount + 1;
		rigidbody.velocity.y = jump;
	}	
	else{
		if(Input.GetKeyDown(jumpButton) && jumpAmount < amountOfJumpsAllowed){ //Double Jump!
			jumpAmount = jumpAmount + 1;
			rigidbody.velocity.y = jump;
		}
	}
	if(Input.GetAxis(horizontalAxis) != 0){
		actualSpeed = transform.InverseTransformDirection(rigidbody.velocity);
		transform.Rotate( 0 ,  Input.GetAxis(horizontalAxis) * Time.deltaTime * spin * 50, 0);
		actualSpeed = Vector3(0,rigidbody.velocity.y,actualSpeed.z);
		actualSpeed = transform.TransformDirection(actualSpeed);
		rigidbody.velocity = actualSpeed;
		
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
		if(Input.GetAxis(verticalAxis) != 0){
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
