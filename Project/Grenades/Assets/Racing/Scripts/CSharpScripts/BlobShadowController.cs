using UnityEngine;
using System.Collections;

public class BlobShadowController : MonoBehaviour
{
	void Update()
	{
		transform.position = transform.parent.position + Vector3.up * 4;
		transform.rotation = Quaternion.LookRotation(-Vector3.up, transform.parent.forward);
	}
}
