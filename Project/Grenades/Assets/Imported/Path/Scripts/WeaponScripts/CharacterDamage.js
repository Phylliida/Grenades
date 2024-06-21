var hitPoints = 100.0;
var deadReplacement : Transform;
var dieSound : AudioClip;

function ApplyDamage (damage : float) {
	// We already have less than 0 hitpoints, maybe we got killed already?
	if (hitPoints <= 0.0)
		return;

	hitPoints -= damage;
	if (hitPoints <= 0.0)
	{
		Detonate();
	}
}

function Detonate () {
	// Destroy ourselves
	Destroy(gameObject);
	
	// Play a dying audio clip
	if (dieSound)
		PlayAudioClip(dieSound, transform.position, 1,0.1);
		//AudioSource.maxVolume = 0.5;

	// Replace ourselves with the dead body
	if (deadReplacement) {
		var dead : Transform = Instantiate(deadReplacement, transform.position, transform.rotation);
		
		// Copy position & rotation from the old hierarchy into the dead replacement
		CopyTransformsRecurse(transform, dead);
	}
}

static function CopyTransformsRecurse (src : Transform,  dst : Transform) {
	dst.position = src.position;
	dst.rotation = src.rotation;
	
	for (var child : Transform in dst) {
		// Match the transform with the same name
		var curSrc = src.Find(child.name);
		if (curSrc)
			CopyTransformsRecurse(curSrc, child);
	}
}
function PlayAudioClip (clip : AudioClip, position : Vector3, volume : float, max : float)
{
    var go = new GameObject ("One shot audio");
    go.transform.position = position;
    var source : AudioSource = go.AddComponent (AudioSource);
    source.clip = clip;
    source.volume = volume;
    source.Play ();
    Destroy (go, clip.length);
    return source;
}