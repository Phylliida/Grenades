private var rigidBody : Rigidbody;
rigidBody = GetComponent(Rigidbody);
var acceleration = 20;
var gravity = 20;
var sideTurn = 20;
var upTurn = 20;
var maxSpeed = 100;
private var velocityOfPlane : Vector3;
private var amountMove : Vector3;
var airResistance = 10;
var brakeAmount = 20;
private var currentX;
private var aKey;
private var sKey;
private var dKey;
private var wKey;
private var spaceKey;
private var brakeKey;
private var currentSpeed = 0.0;
private var gravityamount = 0.0;
var gravityBreakSpeed = 50;
function GetInput(){
	aKey = Input.GetKey("a");
	dKey = Input.GetKey("d");
	wKey = Input.GetKey("w");
	sKey = Input.GetKey("s");
	spaceKey = Input.GetKey("b");
	brakeKey = Input.GetKey("n");
		
	

}
function Update () {
	GetInput();
		
	if(aKey){
		transform.Rotate(0, -sideTurn * Time.deltaTime,0);
		
	}
	if(dKey){
		transform.Rotate(0, sideTurn * Time.deltaTime,0);
	}
	if(wKey){
		transform.Rotate(0, 0,-upTurn * Time.deltaTime);
	}
	if(sKey){
		transform.Rotate(0, 0,upTurn * Time.deltaTime);
		
	}
	if(spaceKey){
		if(currentSpeed < maxSpeed){
		currentSpeed = currentSpeed + acceleration * Time.deltaTime;
		}
		else{
			currentSpeed = maxSpeed;
			
		}
		
		
	}
	else{
		//amountMove = transform.TransformDirection (0,-gravity,0);
		//var currentSpeed = currentSpeed - gravity;
		if(currentSpeed > 0){
			currentSpeed = currentSpeed - airResistance * Time.deltaTime;
			
			
			
		}
		else{
			currentSpeed = 0;
			
		}
		
		
	}
	
	if(brakeKey){
		if(currentSpeed > 0){
				currentSpeed = currentSpeed - brakeAmount * Time.deltaTime;
			}
			else{
				currentSpeed = 0;
			}
	}
	if(currentSpeed >= gravityBreakSpeed){
			gravityAmount = 0.0;
	}
	else{
			gravityAmount = ((gravityBreakSpeed - currentSpeed) / gravityBreakSpeed) * gravity;
			amountMove = transform.TransformDirection (0,-gravityAmount,0);
			currentSpeed = currentSpeed - amountMove.x * Time.deltaTime;
		}
	amountMove = transform.TransformDirection (currentSpeed, -gravityAmount,0);
	rigidbody.velocity = amountMove;
	transform.localEulerAngles.x = 0;
}