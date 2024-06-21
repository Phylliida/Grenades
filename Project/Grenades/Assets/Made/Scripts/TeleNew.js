var goto : Transform;

function OnTriggerEnter (other : Collider) {
	Instantiate(other,goto.transform.position , goto.transform.rotation );
    Destroy(other);
}
