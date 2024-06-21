var playerCollider : PlayerCollider;

function Update () {
	transform.LookAt(playerCollider.PlaceHolder.sections[playerCollider.PlaceHolder.section[playerCollider.referenceNumber]].transform.position, Vector3(0,0,1));
}