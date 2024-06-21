private var startAndStayPosition : Vector3;
startAndStayPosition = transform.position;
var resistance = 3;
private var tilty = 0.0;
tilty = transform.localEulerAngles.y;
private var tiltx = 0.0;
tiltx = transform.localEulerAngles.x;
var allowedAmount = 45.0;
function FixedUpdate () {
	transform.localEulerAngles = Vector3(tiltx,tilty,transform.localEulerAngles.z);
	transform.position = startAndStayPosition;
	rigidbody.velocity = Vector3(0,0,0);
	if(transform.localEulerAngles.z > allowedAmount){
		transform.localEulerAngles.z = allowedAmount;
	}
	if(transform.localEulerAngles.z < (360 - allowedAmount) && transform.localEulerAngles.z > allowedAmount){
		transform.localEulerAngles.z = 360 - allowedAmount;
	}
}