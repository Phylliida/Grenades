var goto : Transform;

function OnTriggerEnter (other : Collider) {
    other.transform.position = goto.transform.position;
}
