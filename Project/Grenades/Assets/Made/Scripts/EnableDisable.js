var AlexMoverf;
AlexMoverf = GetComponent (AlexMover);
var audis;
audis = GetComponent (AudioListener);
var RickMoverf;
RickMoverf = GetComponent (RickMover);
var JennyMoverf;
JennyMoverf = GetComponent (JennyMover);
var MoverFollowerf;
MoverFollowerf = GetComponent (MoverFollower);
var MoverAlexf;
MoverAlexf = GetComponent (MoverAlex);
function Start () {
if (AlexMoverf){
	if (networkView.isMine)
	{
	AlexMoverf.enabled = true;
	}
	else
	{
	AlexMoverf.enabled = false;	
	}
}
if (audis){
	if (networkView.isMine)
	{
	audis.enabled = true;
	}
	else
	{
	audis.enabled = false;	
	}
}
if(RickMoverf){
	if (networkView.isMine)
	{
	RickMoverf.enabled = true;
	}
	else
	{
	RickMoverf.enabled = false;	
	}
}
if(JennyMoverf){
	if (networkView.isMine)
	{
	JennyMoverf.enabled = true;
	}
	else
	{
	JennyMoverf.enabled = false;	
	}
}
if(MoverFollowerf){
	if (networkView.isMine)
	{
	MoverFollowerf.enabled = true;
	}
	else
	{
	MoverFollowerf.enabled = false;	
	}
	
}	
if(MoverAlexf){
	if (networkView.isMine)
	{
	MoverAlexf.enabled = true;
	}
	else
	{
	MoverAlexf.enabled = false;	
	}
}
}