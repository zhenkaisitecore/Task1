// dom event part
var tracker = 0;
var imgNodes = document.querySelectorAll("img");
var prevSelected = imgNodes[0];
prevSelected.className = "selected";

for (var img of document.querySelectorAll("img"))
{
    img.onclick = function(event)
    {
        tracker = GetImagePos(event.target.title);
        UpdateSelected(event.target);
    }
}

// left right button event

document.querySelector("#leftBtn").onclick = function(event)
{
    tracker = (tracker-1>=0) ? tracker - 1 : imgNodes.length-1;
    UpdateSelected(imgNodes[tracker]);
}

document.querySelector("#rightBtn").onclick = function(event)
{
    tracker = (tracker + 1) % imgNodes.length;
    UpdateSelected(imgNodes[tracker]);
}

// useful functions

function UpdateSelected(target)
{
    if (target.className == "not-selected")
    {
        target.className = "selected";
        if (prevSelected !== null)
        {
            prevSelected.className = "not-selected";
        }
        prevSelected = target;
    }
}

function GetImagePos(imgTitle)
{
    for (var i=0; i<imgNodes.length; i++)
    {
        if (imgNodes[i].title === imgTitle) return i;
    }
}

