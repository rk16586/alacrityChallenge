"use strict";

class Person {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
}

var alice = new Person('Alice', 20);
var bob = new Person('Bob', 25);
var carol = new Person('Carol', 30);
var dave = new Person('Dave', 35);
var group = [alice, bob, carol, dave];

$( document ).ready(function() {//runs after reading html
	var collectiveAge = 0;
	for(var i = 0; i < group.length; i++){
		collectiveAge += group[i].age;
	}

	group.sort(function(a, b){return a.age - b.age});
	//console.log("Youngest person: " + group[0].name);
	//console.log("Oldest person: " + group[group.length - 1].name);
	var groupList = document.getElementById("groupList");
	for(var i = 0; i < group.length; i++){
		groupList.innerHTML += group[i].name + " " + group[i].age + "<br>";
	}

	var aveAge = collectiveAge / (group.length);
	//console.log(aveAge);
	var aveText = document.getElementById("ave");
	aveText.innerHTML = "Average Age: " + aveAge + ".";

	var youngDet = document.getElementById("youngDet");
	youngDet.innerHTML = "The youngest person is: " + group[0].name + ", age " + group[0].age + ".<br>";
	var oldDet = document.getElementById("oldDet");
	oldDet.innerHTML = "The oldest person is: " + group[group.length - 1].name + ", age " + group[group.length - 1].age + ".<br>";
});

function refresh(){ //try not to duplicate?
	var aveText = document.getElementById("ave");
	aveText.innerHTML = " ";
	var groupList = document.getElementById("groupList");
	groupList.innerHTML = " ";
	var youngDet = document.getElementById("youngDet");
	youngDet.innerHTML = " ";
	var oldDet = document.getElementById("oldDet");
	oldDet.innerHTML = " ";

	group.sort(function(a, b){return a.age - b.age});
	for(var i = 0; i < group.length; i++){
		groupList.innerHTML += group[i].name + " " + group[i].age + "<br>";
	}
	var collectiveAge = 0;
	for(var i = 0; i < group.length; i++){
		collectiveAge += parseInt(group[i].age);
	}
	var aveAge = collectiveAge / (group.length);
	aveText.innerHTML = "Average Age: " + aveAge + ".";

	youngDet.innerHTML = "The youngest person is: " + group[0].name + ", age " + group[0].age + ".<br>";
	oldDet.innerHTML = "The oldest person is: " + group[group.length - 1].name + ", age " + group[group.length - 1].age + ".<br>";
}

function findIndiv(){
	group.sort(function(a, b){return a.age - b.age});
	var name = document.getElementById("individ").elements[0].value;
	for(var i = 0; i < group.length; i++){
		if(group[i].name == name){
			var text = document.getElementById("indivDet");
			text.innerHTML = "Name: " + group[i].name + "<br>Age: " + group[i].age + "<br>";
			if(i == 0){
				text.innerHTML += group[i].name + " is the youngest person in the group.";
			}
			else if(i == (group.length - 1)){
				text.innerHTML += group[i].name + " is the oldest person in the group.";
			}
			else{
				text.innerHTML += group[i].name + " is neither the youngest nor oldest person in the group.";
			}
		}
	}
}

function addPerson(){
	var person = document.getElementById("addPerson");
	var newPerson = new Person(person.elements[0].value, person.elements[1].value);
	group.push(newPerson);
	refresh();
}
