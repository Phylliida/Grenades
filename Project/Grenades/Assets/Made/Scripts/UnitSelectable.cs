using UnityEngine;
using System.Collections;

public class UnitSelectable : MonoBehaviour
{
	public Rect m_SelectionWindowRect = new Rect (10.0f, 10.0f, 300.0f, 100.0f);
	
	public void OnMouseDown ()
	{
		SelectionManagerg.Select (gameObject, !SelectionManagerg.IsSelected (gameObject));
	}
	
	public void OnDisable ()
	{
		SelectionManagerg.Deselect (gameObject);
	}
	
	public void Update ()
	{
		renderer.material.color = SelectionManagerg.IsSelected (gameObject) ? Color.green : Color.white;
	}
	
	public void OnGUI ()
	{
		if (SelectionManagerg.IsSelected (gameObject))
		{
			m_SelectionWindowRect = GUI.Window (GetInstanceID (), m_SelectionWindowRect, SelectionWindow, gameObject.name);
		}
	}
	
	void SelectionWindow (int id)
	{
		GUILayout.Box ("I am the selection and my name is " + gameObject.name);
		GUI.DragWindow ();
	}
}

public class SelectionManagerg
{
	private static GameObject s_ActiveSelection;
	
	public static GameObject ActiveSelection
	{
		get
		{
			return s_ActiveSelection;
		}
		set
		{
			s_ActiveSelection = value;
		}
	}
	
	public static void Select (GameObject gameObject, bool selectionValue)
	{
		if (selectionValue)
		{
			Select (gameObject);
			//UnitMover moverscript = gameObject.GetComponent<UnitMover>();
			//if(moverscript){
        //moverscript.enabled = true;;
			//}
		}
		else
		{
			Deselect (gameObject);
		}
	}
	
	public static void Select (GameObject gameObject)
	{
		ActiveSelection = gameObject;
	}
	
	public static void Deselect (GameObject gameObject)
	{
		if (ActiveSelection == gameObject)
		{
			ActiveSelection = null;
		}
	}
	
	public static bool IsSelected (GameObject gameObject)
	{
		return ActiveSelection == gameObject;
	}
}
