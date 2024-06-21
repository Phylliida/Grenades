var currentPosition : Vector3;
currentPosition = transform.position;
function Update () {
	transform.position = currentPosition;
	rigidbody.velocity = Vector3(0,0,0);
	rigidbody.angularVelocity = Vector3(0,0,0);
}