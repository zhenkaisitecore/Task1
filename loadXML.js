// load xml part
function LoadXML(xmlPath)
{
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", xmlPath, false);
    xhttp.send();
    return xhttp.responseXML;
}

var xml = LoadXML("cats.xml");


var xsl = LoadXML("cats.xsl");
var proc = new XSLTProcessor();
proc.importStylesheet(xsl);
resultDoc = proc.transformToFragment(xml, document);
var htmlBody = document.querySelector("body");
htmlBody.insertBefore(resultDoc, htmlBody.childNodes[0]);

// var htmlBody = document.querySelector("body");
// var ulNode = document.createElement("ul");
// var imgNode = null;
// var liNode = null;
// ulNode.className = "gallery";
// for (var cat of xml.querySelectorAll("cat"))
// {
//     liNode = document.createElement("li");
//     imgNode = document.createElement("img");
//     imgNode.setAttribute("src", cat.querySelector("url").innerHTML);
//     imgNode.setAttribute("title", cat.querySelector("name").innerHTML);
//     imgNode.setAttribute("alt", cat.querySelector("alt").innerHTML);
//     imgNode.setAttribute("class", "not-selected");
//     liNode.appendChild(imgNode);
//     ulNode.appendChild(liNode);
// }
