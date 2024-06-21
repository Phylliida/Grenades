//How far behind the object the camera is
var watcherBehindDistance = -3.0;
//How far above the object the camera is
var watcherAboveDistance = 5.0;
var rotation = 10;
//An x rotation of 10 is recommended for best effects, but you can change it if you desire.
var target : Transform;
//this camera will follow it's parent, so parent it to something by dragging in on an object in the Hierarchy

function Start () {
	transform.localPosition = Vector3(0,  watcherAboveDistance, watcherBehindDistance);
	transform.localEulerAngles = Vector3(rotation,0,0);
	transform.LookAt(target);
	
	transform.localEulerAngles.x = transform.localEulerAngles.x + -10;
    //transform.LookAt(target);
}

