var gridSize = 100;
private var x = 0;
private var y = 0;
private var z = 0;
var block : Transform;
private var changeY = false;
private var changeX = false;
private var end = false;
var timeheld = 0.0;
function Update () {
if(!end){
	timeheld = timeheld + Time.deltaTime;
			if(timeheld >= 0.000001){
			timeheld = 0;
	if(x <= gridSize){
		if(changeX){
		x = x + 1;
		changeX = false;
		}
		if(y <= gridSize){
			if(changeY){
			y = y + 1;
			changeY = false;
			}
			if(z <= gridSize){
				z = z + 1;
				Instantiate(block, Vector3(transform.position.x +x,transform.position.y + y ,transform.position.z + z), transform.rotation);
			}
			else{
			z = 0;
			changeY = true;
			}
		}
		else{
		y = 0;
		changeX = true;
		}
	}
	else{
		end = true;
	}
			}
}
}