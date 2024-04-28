if (!audio) {
	var newTask = false; 
	var window_focus = true; 
	window.onblur = function() { window_focus = false; }; 
	window.onfocus = function() { 
		if (newTask) { 
			if (confirm("NOVA TAREFA, BORA TRABALHAR!!")) {
				stop(); newTask = false;
			} else {
				stop(); newTask = false;
			}; 
		} window_focus = true;
	}; 

	var audio = document.createElement('audio');
	audio.src = 'https://marcoshenzel.github.io/script/diversos/sounds/Tones%20and%20I%20-%20Dance%20Monkey%20(Metalcover%20by%20Agordas).mp3';
	audio.type = 'audio/mp3';
	audio.play();
	audio.loop = true;
	audio.muted =true;

	function play(){
		audio.currentTime = 0;
		audio.muted = false;
	}

	function stop(){ audio.muted = true; }
	function addClassNameListener(elemId) {
		var elem = document.querySelector(elemId);
		var lastClassName = elem.className;
		
		window.setInterval( function() {
			var className = elem.className;
			if (className !== lastClassName) {
				if (elem.classList.contains("enabled")){
					play(); setTimeout(function(){ 
						if (window_focus) { 
							if (confirm("NOVA TAREFA, BORA TRABALHAR!!")) {
								stop();
							} else {
								stop();
							};
						} else {
							newTask = true;
						}
					},1000);
				}lastClassName = className;
			}
		},10);
	}

	addClassNameListener(".start-button");
	console.log('%c WeAds Contato:', 'background: #00ff40; color: black; font-size: 10px;', '💬 https://wa.me/5553991227225');
	console.log('%c script ATIVO! ', 'background: #222; color: #bada55; font-size: 40px;');
} else { 
	console.log('%c O script já está ATIVO! ', 'background: red; color: white; font-size: 20px;');
}
