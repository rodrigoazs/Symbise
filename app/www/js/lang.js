var langs = ['en', 'pt'];
var langCode = '';

var translate = function (jsdata)
{
	$("[tkey]").each (function (index)
	{
		var strTr = jsdata [$(this).attr ('tkey')];
	    $(this).html (strTr);
	});
}

function changeLanguage(l) {
	if(Number.isInteger(l))
	{
		langCode = langs[l];
	}else {
		langCode = l;
	}
  if (langs.includes(langCode)){
  	$.getJSON('lang/'+langCode+'.json', translate);
  }else{
  	$.getJSON('lang/en.json', translate);
	}
}

langCode = navigator.language.substr (0, 2);
changeLanguage(langCode);
