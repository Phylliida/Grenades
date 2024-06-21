var speed = 10;
var gravity = 10;
var spin = 180;
Random.seed = 1;
private var moveDirection = Vector3.zero;
function Update () {
	
	var controller : CharacterController = GetComponent(CharacterController);
	
	
	transform.Rotate(  0 ,   Time.deltaTime * Random.Range(-spin, spin) ,0  );
	
	moveDirection.z = 1;
	transform.localEulerAngles.x = 0;
	transform.localEulerAngles.z = 0;
	moveDirection = transform.TransformDirection(moveDirection);
	moveDirection.z *= speed * Time.deltaTime * 10;
	moveDirection.y -= gravity * Time.deltaTime;
	 
	controller.Move(moveDirection * Time.deltaTime);
}
