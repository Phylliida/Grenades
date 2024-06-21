var target : NetworkView;

function Start () {
	if (target.isMine)
	{
	camera.enabled = true;	
	}
	else{
	camera.enabled = false;
	}
}
@script AddComponentMenu("Network/Camera Target Init")