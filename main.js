// JavaScript Document
/*jslint node: true*/
/*global document*/
"use strict";

function duplicateMenu() {
    var menu = document.querySelectorAll('ul#primaryNavigation li a');
    var i = 0;
    var bottomMenu = document.createElement("ul");
    
    for (i; i < menu.length; i += 1) {
        var temp1 = menu[i].getAttribute('href');
        var temp2 = menu[i].text;

        var bottomAnchors = document.createElement("A");
        var bottomList = document.createElement("li");
        bottomAnchors.setAttribute("href", temp1);
        bottomAnchors.innerHTML = temp2;
        bottomList.appendChild(bottomAnchors);
        bottomMenu.appendChild(bottomList);

        document.getElementById("smallNavArea").appendChild(bottomMenu);
    }
}

duplicateMenu();