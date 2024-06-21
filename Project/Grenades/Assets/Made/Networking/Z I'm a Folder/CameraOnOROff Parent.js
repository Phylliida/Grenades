
function Start () {
	if (transform.parent.networkView.isMine)
	{
	camera.enabled = true;	
	}
	else{
	camera.enabled = false;
	}
	
}

@script AddComponentMenu("Network/Camera")