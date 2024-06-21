var grenade : GameObject;

function Update () {
if (Input.GetButtonDown("Fire1")) {
	bomb = Instantiate(grenade, transform.position, transform.rotation);
	}
	}