// script.js 

let questions = [ 
	{ 
		prompt: `What is the name of the Curse occupying Yuji Itadori's body in "Jujutsu Kaisen"`, 
		options: [ 
			"Ryomen sukuna", 
			"saturo gojo", 
			"shuguro geto", 
			"kenjaku", 
		], 
		answer: "Ryomen sukuna", 
	}, 

	{ 
		prompt: `What two colors are used in the Amestris flag in "Fullmetal Alchemist?
`, 
		options: [ 
			"red and white", 
			"black and white", 
			"red and black", 
			"yellow and black", 
		], 
		answer: "yellow and black", 
	}, 

	{ 
		prompt: `Whose body gained the properties of rubber after unintentionally eating a Devil Fruit?`, 
		options: [ 
			"gojo saturo", 
			"goku", 
			"zoro", 
			"monkey.d.luffy", 
		], 
		answer: "monkey.d.luffy", 
	}, 

	{ 
		prompt: `In the anime ‘Hunter X Hunter’, which family is famous for being assassins?`, 
		options: [
            "killua family",
            "uzumaki family",
            "kamikaze family",
            "zenin family",
    
    ], 
		answer: "killua family", 
	}, 

	{ 
		prompt: `Lord Boros is the leader of what group in "One-Punch Man"?`, 
		options: [ 
			"the pirates", 
			"dark matter thieves", 
			"saitama group", 
			"alienation", 
		], 
		answer: "dark matter thieves", 
	}, 

    {
        prompt: `who is the strongest hero in hero association in one punch man`,
        options: [
            "garou",
            "saitama",
            "genos",
            "watch-dog man",
        ],
        answer: "saitama"
    },

    {
        prompt: `which family is the richest family in jjk universe?`,
        options: [
            "zenin",
            "gojo",
            "inumaki",
            "kamikaze"
        ],
        answer: "gojo"
    },

    {
        prompt: `who killed gojo first time in jjk?`,
        options: [
            "toji",
            "inumaki",
            "geto",
            "tengen sama",
        ],
        answer: "toji"
    },

	{
		prompt: `Nme the creator of Dragon-Ball series?`,
		options: [
			"gege akutami",
			"Akira toriyama",
			"junichi kouchi",
			"seitaro kitayama",
		],
		answer: "Akira toriyama"
	},

	{
		prompt: `in which year anime was introduced?`,
		options: [
			"1917",
			"1930",
			"1970",
			"2000",
		],
		answer: "1917"
	},

	{
		prompt: `how saitama got his power in one-punch man?`,
		options: [
			"born with it",
			"100 pushup,situps and weight-lifting",
			"he is god gifted",
			"He is not human",
		],
		answer: "100 pushup,situps and weight-lifting"

	},

	{
		prompt: `In spyxfamily what is Anya's mission?`,
		options :[
			"friendship with damian and help her father loid in his mission",
			"kill people of west",
			"revenge on scientist who did experiments on her",
			"Happily live with loid and yorr",
		],
		answer: "frienship with damian and help her father with his mission"
	},

	{
		prompt: `In spyXfamily what is anya"s and bond superpower?`,
		options: [
			"mind reading and predict future",
			"time travel and combat",
			"stop time and super strength",
			"create black holes and mind reading",
		],
		answer: "mind reading and predict future"
	},

	{
		prompt: `who is the protaganist of demon slayer?`,
		options: [
			"Tanjiro",
			"Zenitsu",
			"Nezuko",
			"Inosuke",
		],
		answer: "Tanjiro"
	},

]; 

// Get Dom Elements 

let questionsEl = 
	document.querySelector( 
		"#questions"
	); 
let timerEl = 
	document.querySelector("#timer"); 
let choicesEl = 
	document.querySelector("#options"); 
let submitBtn = document.querySelector( 
	"#submit-score"
); 
let startBtn = 
	document.querySelector("#start"); 
let nameEl = 
	document.querySelector("#name"); 
let feedbackEl = document.querySelector( 
	"#feedback"
); 
let reStartBtn = 
	document.querySelector("#restart"); 

// Quiz's initial state 
let currentQuestionIndex = 0; 
let time = questions.length * 9; 
let timerId; 

// Start quiz and hide frontpage 

function quizStart() { 
	timerId = setInterval( 
		clockTick, 
		1000
	); 
	timerEl.textContent = time; 
	let landingScreenEl = 
		document.getElementById( 
			"start-screen"
		); 
	landingScreenEl.setAttribute( 
		"class", 
		"hide"
	); 
	questionsEl.removeAttribute( 
		"class"
	); 
	getQuestion(); 
} 

// Loop through array of questions and 
// Answers and create list with buttons 
function getQuestion() { 
	let currentQuestion = 
		questions[currentQuestionIndex]; 
	let promptEl = 
		document.getElementById( 
			"question-words"
		); 
	promptEl.textContent = 
		currentQuestion.prompt; 
	choicesEl.innerHTML = ""; 
	currentQuestion.options.forEach( 
		function (choice, i) { 
			let choiceBtn = 
				document.createElement( 
					"button"
				); 
			choiceBtn.setAttribute( 
				"value", 
				choice 
			); 
			choiceBtn.textContent = 
				i + 1 + ". " + choice; 
			choiceBtn.onclick = 
				questionClick; 
			choicesEl.appendChild( 
				choiceBtn 
			); 
		} 
	); 
} 

// Check for right answers and deduct 
// Time for wrong answer, go to next question 

function questionClick() { 
	if ( 
		this.value !== 
		questions[currentQuestionIndex] 
			.answer 
	) { 
		time -= 10; 
		if (time < 0) { 
			time = 0; 
		} 
		timerEl.textContent = time; 
		feedbackEl.textContent = `Wrong! The correct answer was 
		${questions[currentQuestionIndex].answer}.`; 
		feedbackEl.style.color = "red"; 
	} else { 
		feedbackEl.textContent = 
			"Correct!"; 
		feedbackEl.style.color = 
			"green"; 
	} 
	feedbackEl.setAttribute( 
		"class", 
		"feedback"
	); 
	setTimeout(function () { 
		feedbackEl.setAttribute( 
			"class", 
			"feedback hide"
		); 
	}, 2000); 
	currentQuestionIndex++; 
	if ( 
		currentQuestionIndex === 
		questions.length 
	) { 
		quizEnd(); 
	} else { 
		getQuestion(); 
	} 
} 

// End quiz by hiding questions, 
// Stop timer and show final score 

function quizEnd() { 
	clearInterval(timerId); 
	let endScreenEl = 
		document.getElementById( 
			"quiz-end"
		); 
	endScreenEl.removeAttribute( 
		"class"
	); 
	let finalScoreEl = 
		document.getElementById( 
			"score-final"
		); 
	finalScoreEl.textContent = time; 
	questionsEl.setAttribute( 
		"class", 
		"hide"
	); 
} 

// End quiz if timer reaches 0 

function clockTick() { 
	time--; 
	timerEl.textContent = time; 
	if (time <= 0) { 
		quizEnd(); 
	} 
} 

// Save score in local storage 
// Along with users' name 

function saveHighscore() { 
	let name = nameEl.value.trim(); 
	if (name !== "") { 
		let highscores = 
			JSON.parse( 
				window.localStorage.getItem( 
					"highscores"
				) 
			) || []; 
		let newScore = { 
			score: time, 
			name: name, 
		}; 
		highscores.push(newScore); 
		window.localStorage.setItem( 
			"highscores", 
			JSON.stringify(highscores) 
		); 
		alert( 
			"Your Score has been Submitted"
		); 
	} 
} 

// Save users' score after pressing enter 

function checkForEnter(event) { 
	if (event.key === "Enter") { 
		saveHighscore(); 
		alert( 
			"Your Score has been Submitted"
		); 
	} 
} 
nameEl.onkeyup = checkForEnter; 

// Save users' score after clicking submit 

submitBtn.onclick = saveHighscore; 

// Start quiz after clicking start quiz 

startBtn.onclick = quizStart;
