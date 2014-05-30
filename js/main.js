$(document).ready(function(){
	var totalScore = 0;
	var totalQuestions = 0;

	// Set all radio buttons to empty
	$("input[type='radio']").prop('checked', false);

	// If clicking on a radio button hide the error message if it is there
	$("input[type='radio']").click(function(){
		$('[data-role=error]').addClass('hidden');
	});

	// On clicking onto next question
	$('[data-role=submit-answer]').click(function(event){
		// event.preventDefault();
		var thisButton = $(this);
		var thisAnswer = $("input[type='radio']:checked");

		// If they have answered
		if (thisAnswer.length > 0) {
			thisAnswer = thisAnswer.val();
			var correctAnswer = answers()[thisButton.data('question') - 1];

			console.log(totalScore);
			if (thisAnswer === correctAnswer) {
				if (localStorage.totalScore) {
					totalScore = localStorage.totalScore;
				}
				totalScore++;
				localStorage.setItem('totalScore', totalScore);
			}
			if (localStorage.totalQuestions) {
				totalQuestions = localStorage.totalQuestions;
			}
			totalQuestions ++;
			localStorage.setItem('totalQuestions', totalQuestions);
		}
		// Otherwise show an error
		else {
			event.preventDefault();
			$('[data-role=error]').removeClass('hidden');
		}
	});

	//Play again and reset
	$('[data-role=reset]').click(function(event){
		localStorage.setItem('totalScore', 0);
		localStorage.setItem('totalQuestions', 0);
	});

	// Fill in scores
	if ($('[data-role=score]')) {
		$('[data-role="score"]').html(localStorage.totalScore + ' out of ' + localStorage.totalQuestions);
	}

	// The answers!
	function answers() {
		return [
		"2",
		"3",
		"2",
		"2",
		"1"
		];
	}

});