var boss : Transform;
private var bossEnemyScript : BopableEnemyHurtable;
bossEnemyScript = boss.GetComponent(BopableEnemyHurtable);
private var bossHolderScript : RigidbodyHolder;
bossHolderScript = boss.GetComponent(RigidbodyHolder);
private var bossHealthScript : LifeCounter;
bossHealthScript = boss.GetComponent(LifeCounter);
var helper : Transform;
var helperAwayPosition : Transform;
private var helperHolderScript : RigidbodyHolder;
helperHolderScript = boss.GetComponent(RigidbodyHolder);
private var helperEnemyScript : BopableEnemy;
helperEnemyScript = boss.GetComponent(BopableEnemy);
var enemySpawner : EnemySpawner;
var amountOfEnemies = 10;
function Start () {
	bossEnemyScript.enabled = false;
	bossHolderScript.enabled = true;
	helperHolderScript.enabled = true;
	helperEnemyScript.enabled = false;
	helper.position = helperAwayPosition.position;
	
}