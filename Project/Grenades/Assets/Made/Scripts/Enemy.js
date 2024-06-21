var boundingboxlt :BoundingBox;
var boundingboxlb :BoundingBox;
var boundingboxrt :BoundingBox;
var boundingboxrb :BoundingBox;
var xmovement;
var ymovement;
var ywait = false;
var xwait = false;
var counter = 0.0;
var moveDirection;

Random.seed = 2;
function Start () {
	boundingboxlt.transform.parent = transform;
	boundingboxrt.transform.parent = transform;
	boundingboxrb.transform.parent = transform;
	boundingboxlb.transform.parent = transform;
	boundingboxlb.transform.localPosition =  Vector3(-1,-1,-1);
	boundingboxlt.transform.localPosition =  Vector3(-1,-1,1);
	boundingboxrb.transform.localPosition =  Vector3(1,-1,-1);
	boundingboxrt.transform.localPosition =  Vector3(1,-1,1);
	xmovement = Random.Range(-3, 3);
	ymovement = Random.Range(-3, 3);
}
function Update () {
	if(!boundingboxrt.istouching && !boundingboxlt.istouching && !boundingboxlb.istouching && !boundingboxrb.istouching){
		ywait = true;
		xwait = true;
	}
	if(!boundingboxrt.istouching && !boundingboxlt.istouching && !ywait){
		ymovement *= -1;
		ywait = true;
	}
	if(!boundingboxrb.istouching && !boundingboxlb.istouching && !ywait){
		ymovement *= -1;
		ywait = true;
	}
	if(!boundingboxrt.istouching && !boundingboxrb.istouching && !xwait){
		xmovement *= -1;
		xwait = true;
	}
	if(!boundingboxlt.istouching && !boundingboxlb.istouching && !xwait){
		xmovement *= -1;
		xwait = true;
	}
	xwait = false;
	ywait = false;
	counter += 1 * Time.deltaTime;
	if(counter >= 5){
		counter = 0.0;
		xmovement = Random.Range(-10, 10);
		ymovement = Random.Range(-10, 10);
	}
	moveDirection = Vector3(xmovement,0, ymovement);
	transform.Translate(moveDirection * Time.deltaTime);
	
			
}