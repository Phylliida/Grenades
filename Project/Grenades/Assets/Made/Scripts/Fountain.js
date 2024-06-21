var speed = 6.0;
var jumpSpeed = 8.0;
var gravity = 20.0;
var spin = 5;
var grenade : Transform;

private var moveDirection = Vector3.zero;

function Update() {
//if (Input.GetButtonDown("Fire1")) {
	//Instantiate(grenade, transform.position, transfrom.rotation);
	Instantiate(grenade, transform.position, transform.rotation);
	//Random.Range(-10, 10)
//}
}