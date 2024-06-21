var wait = 3.0;
var Dentonator : Transform;

yield WaitForSeconds (3);
Instantiate(Dentonator, transform.position, transform.rotation);
Destroy(gameObject);