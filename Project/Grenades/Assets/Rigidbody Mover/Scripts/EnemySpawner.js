var enemyArea : EnemyAreaScript;
var enemyPrefab : Transform;
var timeBetweenSpawns = 5;
var enemyCount = 0;
var enemyMax = 30;
function Start () {
	spawnEnemies(timeBetweenSpawns);
}
function spawnEnemies(timeWait : float){
	while (1 == 1){
		if(enemyCount <= enemyMax){
			var enemy : Transform;
			enemy = Instantiate(enemyPrefab, transform.position,transform.rotation);
			enemyCount = enemyCount + 1;
			var tempComponent : BopableEnemy;
			tempComponent = enemy.transform.GetComponent(BopableEnemy);
			if(tempComponent){
			tempComponent.enemyArea = enemyArea;
			tempComponent.parent = GetComponent(EnemySpawner);
			yield WaitForSeconds(timeWait);
			}
		}
	}
	
}