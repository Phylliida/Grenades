var camera1;
camera1 = GetComponent(Camera);
function Update () {
	if(Input.GetKey("[1]")){
		Debug.Log("Hit!");
		camera1.enabled = true;
	}
	else{
		camera1.enabled = false;
	}
	
}