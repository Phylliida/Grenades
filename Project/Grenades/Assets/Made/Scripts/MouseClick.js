var ray;
ray = Camera.main.ScreenPointToRay (Input.mousePosition);
var hit : RaycastHit;
if (Physics.Raycast (ray, hit, 100)) {
    Debug.DrawLine (ray.origin, hit.point);
}