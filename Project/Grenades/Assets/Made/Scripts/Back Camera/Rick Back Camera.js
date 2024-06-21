var camera1;
camera1 = GetComponent(Camera);
function Update () {
	if(Input.GetKey("e")){
		camera1.enabled = true;
	}
	else{
		camera1.enabled = false;
	}
	
}