var playerPrefab : Transform;
var playerMax = 50;
var playerAmount = 0;


function OnNetworkLoadedLevel ()
{
	playerAmount = playerAmount + 1;
	Network.Instantiate(playerPrefab, transform.position, transform.rotation, 0);
	
	
}

function OnPlayerDisconnected (player : NetworkPlayer)
{
	playerAmount = playerAmount - 1;
	Debug.Log("Server destroying player");
	Network.RemoveRPCs(player, 0);
	Network.DestroyPlayerObjects(player);
}
@script AddComponentMenu("Network/SpawnPrefab")