var player1On = false;
var player1Text  = "";
private var player1ToggleText = "";
var player1 : RigidbodyMover;
var player2On = false;
var player2Text = "";
private var player2ToggleText = "";
var player2 : RigidbodyMover;
var player3On = false;
var player3Text = "";
private var player3ToggleText = "";
var player3 : RigidbodyMover;
var player4On = false;
var player4Text  = "";
private var player4ToggleText = "";
var player4 : RigidbodyMover;
var TimeDelay = 5;
var player1WallJumping = false;
var player2WallJumping = false;
var player3WallJumping = false;
var player4WallJumping = false;
var itPlayer  = "Rick";
function OnGUI () {
    if(player1On){
		GUI.Box(Rect (0, 0, 300, 25), player1Text);
		if(!player1.it){
			TurnOff(TimeDelay, 1);
		}
		else{
			TurnOff(player1.timeOutWhenIt,1);
		}
    }
    if(player2On){
    	GUI.Box(Rect ((Screen.width / 2),0, 300, 25), player2Text);
		if(!player2.it){
			TurnOff(TimeDelay, 2);
		}
		else{
			TurnOff(player2.timeOutWhenIt,2);
		}
    }
	if(player3On){
		GUI.Box(Rect (0,(Screen.height / 2), 300, 25), player3Text);
		if(!player3.it){
			TurnOff(TimeDelay, 3);
		}
		else{
			TurnOff(player3.timeOutWhenIt,3);
		}
	}
	if(player4On){
		GUI.Box(Rect ((Screen.width / 2), (Screen.height / 2), 300, 25), player4Text);
		if(!player4.it){
			TurnOff(TimeDelay, 4);
		}
		else{
			TurnOff(player4.timeOutWhenIt,4);
		}
    }
	
    GUI.Box(Rect (Screen.width / 2,Screen.height / 2,180,30), itPlayer);
    if(player2){
	if (GUI.Button (Rect (Screen.width -180,Screen.height -90,180,30), player2ToggleText)) {
		if(player2.wallJumping){
			player2.wallJumping = false;
			player2ToggleText = "Alex Wall Jump Off";
		}
		else
		{
			player2.wallJumping = true;	
			player2ToggleText = "Alex Wall Jump On";
		}
	}
    }
	if(player1){
	if (GUI.Button (Rect (Screen.width -180 ,Screen.height  - 60,180,30), player1ToggleText)) {
		if(player1.wallJumping){
			player1.wallJumping = false;
			player1ToggleText = "Rick Wall Jump Off";
			
		}
		else
		{
			player1.wallJumping = true;
			player1ToggleText = "Rick Wall Jump On";	
		}
	}
	}
	if(player3){
	if (GUI.Button (Rect (Screen.width -180 ,Screen.height-30,180,30), player3ToggleText)) {
		if(player3.wallJumping){
			player3.wallJumping = false;
			player3ToggleText = "Jenny Wall Jump Off";
		}
		else
		{
			player3.wallJumping = true;	
			player3ToggleText = "Jenny Wall Jump On";
		}
	}
	}
	
}

function TurnOff (timeWait : float, playerNumber : float) {
		yield WaitForSeconds(timeWait);
		if(playerNumber == 1){
			player1On = false;
		}
		if(playerNumber == 2){
			player2On = false;
		}
		if(playerNumber == 3){
			player3On = false;
		}
		if(playerNumber == 4){
			player4On = false;
		}
		
}
function Update () {
	if(player1){
	if(player1.wallJumping){
		player1ToggleText = "Rick Wall Jump On";	
	}
	else{
		player1ToggleText = "Rick Wall Jump Off";
	}
	if(player1.it){
		itPlayer = "Rick";
	}
	if(player1.turnOnMessage && !player1On){
		player1On = true;
		player1Text = "Stunned! You were just tagged!";
		player1.turnOnMessage = false;
	}
	}
	if(player2){
	if(player2.wallJumping){
		player2ToggleText = "Alex Wall Jump On";	
	}
	else{
		player2ToggleText = "Alex Wall Jump Off";
	}
	if(player2.it){
		itPlayer = "Alex";
	}
	if(player2.turnOnMessage && !player2On){
		player2On = true;
		player2Text = "Stunned! You were just tagged!";
		player2.turnOnMessage = false;
	}
	}
	if(player3){
	if(player3.wallJumping){
		player3ToggleText = "Jenny Wall Jump On";	
	}
	else{
		player3ToggleText = "Jenny Wall Jump Off";
	}
	if(player3.it){
		itPlayer = "Jenny";
	}
	if(player3.turnOnMessage && !player3On){
		player3On = true;
		player3Text = "Stunned! You were just tagged!";
		player3.turnOnMessage = false;
	}
	}
}