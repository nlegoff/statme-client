function createBirthdayList(){
	var selJour = document.getElementById('select-choice-day'),
    selMois = document.getElementById('select-choice-month'),
    selAnnee = document.getElementById('select-choice-year'),
    today = new Date;
	
	$('#select-choice-day').find('option').remove().end().append('<option value="0" selected>Jour</option>');
	for (var i = 1; i <= 31; i++) {
        var monOption = document.createElement('option');
        monOption.innerHTML = i;
        monOption.value = i;
        selJour.appendChild(monOption);
    }
	$('#select-choice-month').find('option').remove().end().append('<option value="0" selected>Mois</option>');
	for (var i = 1; i <= 12; i++) {
        var monOption = document.createElement('option');
        monOption.innerHTML = i;
        monOption.value = i;
        selMois.appendChild(monOption);
    }
	$('#select-choice-year').find('option').remove().end().append('<option value="0" selected>Ann\351e</option>');
	for (var i = today.getFullYear(); i >= 1900; i--) {
        var monOption = document.createElement('option');
        monOption.innerHTML = i;
        monOption.value = i;
        selAnnee.appendChild(monOption);
    }
}