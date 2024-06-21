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
var currentX;
var aKey = false;
var sKey = false;
var dKey = false;
var wKey = false;
var spaceKey = false;
var brakeKey = false;
var AiController : AIControllerPlane;
AiController = GetComponent(AIControllerPlane);
private var currentSpeed = 0.0;
function GetInput(){
	aKey = AiController.aKey;
	dKey = AiController.dKey;
	wKey = AiController.wKey;
	sKey = AiController.sKey;
	spaceKey = true;
	brakeKey = false;
		
	

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
		transform.Rotate(-upTurn * Time.deltaTime, 0,0);
	}
	if(sKey){
		transform.Rotate(upTurn * Time.deltaTime, 0,0);
		
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
	amountMove = transform.TransformDirection (0, 0,currentSpeed);
	rigidbody.velocity = amountMove;
	transform.localEulerAngles.z = 0;
}