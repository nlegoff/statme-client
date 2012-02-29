function register(){
	if(checkRegister() == 0)
	{
		//Lancer WS création d'un user
	}
}

function checkRegister(){
	var nbError = 0;
	if($("input[type=text][name=login]").val() == "")
	{
		document.getElementById('error-register-login').innerHTML = "Login obligatoire";
		nbError++;
	}
	else document.getElementById('error-register-login').innerHTML ="";
	if($("input[type=text][name=nom]").val() == "")
	{
		document.getElementById('error-register-nom').innerHTML = "Nom obligatoire";
		nbError++;
	}
	else document.getElementById('error-register-nom').innerHTML ="";
	if($("input[type=text][name=prenom]").val() == "")
	{
		document.getElementById('error-register-prenom').innerHTML = "Pr\351nom obligatoire";
		nbError++;
	}
	else document.getElementById('error-register-prenom').innerHTML ="";
	if($("input[type=email][name=email]").val() == "")
	{
		document.getElementById('error-register-mail').innerHTML = "Email obligatoire";
		nbError++;
	}
	else if(mailIsOk() == false)
	{
		document.getElementById('error-register-mail').innerHTML = "Email invalide";
		nbError++;
	}
	else document.getElementById('error-register-mail').innerHTML ="";
	if(dateIsOk() == false)
	{
		document.getElementById('error-register-birthday').innerHTML = "Date invalide";
		nbError++;
	}
	else document.getElementById('error-register-birthday').innerHTML = "";
	if($("input[type=password][name=password1]").val() == '' && $("input[type=password][name=password2]").val() == '')
	{
		document.getElementById('error-register-password').innerHTML = "Mot de passe obligatoire";
		nbError++;
	}
	else if($("input[type=password][name=password1]").val() != $("input[type=password][name=password2]").val())
	{
		document.getElementById('error-register-password').innerHTML = "Mots de passe diff\351rents";
		nbError++;
	}
	else document.getElementById('error-register-password').innerHTML = "";
	return nbError;
}

function dateIsOk() {
	var today = new Date;
    var amin=1900;
    var amax=today.getFullYear();
    var j=$("#select-choice-day").val();
    var m=$("#select-choice-month").val();
    var a=$("#select-choice-year").val();
    var ok=true;
    if (((isNaN(j))||(j<1)||(j>31)) && (ok==true) )
    	ok=false;
    if (((isNaN(m))||(m<1)||(m>12)) && (ok==true) )
    	ok=false;
    if (((isNaN(a))||(a<amin)||(a>amax)) && (ok==true))
    	ok=false;
    if (ok==true) {
       var d2=new Date(a,m-1,j);
       j2=d2.getDate();
       m2=d2.getMonth()+1;
       a2=d2.getFullYear();
       if (a2<=100) 
    	   a2=1900+a2;
       if ((j!=j2)||(m!=m2)||(a!=a2))
    	   ok=false;
    }
    return ok;
 }

function mailIsOk(){
	var emailStr = $("input[type=email][name=email]").val();
	var checkTLD = 1;
	var knownDomsPat = /^(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum|fr)$/;
	var emailPat = /^(.+)@(.+)$/;
	var specialChars = "\\(\\)><@,;:\\\\\\\"\\.\\[\\]";
	var validChars = "\[^\\s" + specialChars + "\]";
	var quotedUser = "(\"[^\"]*\")";
	var ipDomainPat = /^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/;
	var atom = validChars + '+';
	var word = "(" + atom + "|" + quotedUser + ")";
	var userPat = new RegExp("^" + word + "(\\." + word + ")*$");
	var domainPat = new RegExp("^" + atom + "(\\." + atom +")*$");
	var matchArray = emailStr.match(emailPat);
	if (matchArray == null) { return false; }
	var user = matchArray[1];
	var domain = matchArray[2];
	for (i=0; i<user.length; i++) {
		if (user.charCodeAt(i) > 127) { return false; }
	}
	for (i=0; i<domain.length; i++) {
		if (domain.charCodeAt(i) > 127) { return false; }
	}
	if (user.match(userPat) == null) { return false; }
	var IPArray=domain.match(ipDomainPat);
	if (IPArray != null) {
		for (var i=1; i<=4; i++) {
			if (IPArray[i] > 255) { return false; }
		}
		return true;
	}
	var atomPat = new RegExp("^" + atom + "$");
	var domArr = domain.split(".");
	var len = domArr.length;
	for (i=0; i<len; i++) {
		if (domArr[i].search(atomPat) == -1) { return false; }
	}
	if (checkTLD && domArr[domArr.length-1].length!=2 && domArr[domArr.length-1].search(knownDomsPat)==-1) { return false; }
	if (len < 2) { return false; }
	return true;
}

function fillRegisterFields(){
	document.getElementById('register').reset();
	document.getElementById('error-register-login').innerHTML ="";
	document.getElementById('error-register-nom').innerHTML ="";
	document.getElementById('error-register-prenom').innerHTML ="";
	document.getElementById('error-register-mail').innerHTML ="";
	document.getElementById('error-register-password').innerHTML = "";
	document.getElementById('error-register-birthday').innerHTML ="";
}