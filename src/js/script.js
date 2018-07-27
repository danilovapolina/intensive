function myFirstApp(name, age) {

	alert("Привет, меня зовут " + name + ", и это моя первая программа");

	function showSkills() {

		let skills = ["html", "css", "js"];

		for (let i = 0; i < skills.length; i++) {
			document.write("Я владею " + skills[i] + "<br>");
		}

	};
	
	function checkAge() {

		if (age >= 18) {
			alert("Поздравляю! Вам больше 18!");
		} else {
			alert("Извините. Вам еще нет 18.");
		}

	};

	function calcPow(num) {

		let pow = Math.pow(num, 2);
		console.log(pow);

	};

	showSkills();
	checkAge();
	calcPow(age);

};

myFirstApp("Полина", 19);