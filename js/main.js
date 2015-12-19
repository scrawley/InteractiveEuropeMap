function AusStat () {
	$("#Austria_Stats").hide();	
	$(".austria_hover").css("opacity","0").css("filter","alpha(opacity=0)");
};
	
$(document).ready(function() {
	$("#Austria_Stats").hide();
	
	$(".austria_label, .austria_hover").hover(function () {
		$(".austria_hover").css("opacity","100").css("filter","alpha(opacity=100)");
	});
	
	$(".austria_label, .austria_hover").mouseleave(function () {
		if ( $("#Austria_Stats").css('display') == 'table') {
			$(".austria_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
		
		else if ( $("#Austria_Stats").css('display') == 'block') {
			$(".austria_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
			
		else {
			$(".austria_hover").css("opacity","0").css("filter","alpha(opacity=0)");
			}	
	});
	
	$(".austria_label").click(function () {
		$("#Austria_Stats").show();
		$(".austria_hover").css("opacity","100").css("filter","alpha(opacity=100)");
	});
	
	$(".belgium_label, .belgium_hover, .bulgaria_label, .bulgaria_hover, .croatia_label, .croatia_hover, .cyprus_label, .cyprus_hover, .czech_republic_label, .czech_republic_hover, .denmark_label, .denmark_hover, .estonia_label, .estonia_hover, .finland_label, .finland_hover, .france_label, .france_hover, .germany_label, .germany_hover, .greece_label, .greece_hover, .hungary_label, .hungary_hover, .iceland_label, .iceland_hover, .ireland_label, .ireland_hover, .italy_label, .italy_hover, .latvia_label, .latvia_hover, .lithuania_label, .lithuania_hover, .luxembourg_label, .luxembourg_hover, .malta_label, .malta_hover, .netherlands_label, .the_netherlands_hover, .norway_label, .norway_hover, .poland_label, .poland_hover, .portugal_label, .portugal_hover, .romania_label, .romania_hover, .slovak_republic_label, .slovak_republic_hover, .slovenia_label, .slovenia_hover, .spain_label, .spain_hover, .sweden_label, .sweden_hover, .switzerland_label, .switzerland_hover, .united_kingdom_label, .united_kingdom_hover").click(function () {
		$("#Austria_Stats").hide();
		$(".austria_hover").css("opacity","0").css("filter","alpha(opacity=0)");
	});
	
	
	});
	
function Aus () {
	$("#Austria_Stats").show();
	};




function BelStat () {
	$("#Belgium_Stats").hide();	
	$(".belgium_hover").css("opacity","0").css("filter","alpha(opacity=0)");
};
	
$(document).ready(function() {
	$("#Belgium_Stats").hide();
	
	$(".belgium_label, .belgium_hover").hover(function () {
		$(".belgium_hover").css("opacity","100").css("filter","alpha(opacity=100)");
	});
	
	$(".belgium_label, .belgium_hover").mouseleave(function () {
		if ( $("#Belgium_Stats").css('display') == 'table') {
			$(".belgium_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
			
			else if ( $("#Belgium_Stats").css('display') == 'block') {
			$(".belgium_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
			
		else {
			$(".belgium_hover").css("opacity","0").css("filter","alpha(opacity=0)");
			}	
	});
	
	$(".belgium_label").click(function () {
		$("#Belgium_Stats").show();
		$(".belgium_hover").css("opacity","100").css("filter","alpha(opacity=100)");
	});
	
	
	$(".austria_label, .austria_hover, .bulgaria_label, .bulgaria_hover, .croatia_label, .croatia_hover, .cyprus_label, .cyprus_hover, .czech_republic_label, .czech_republic_hover, .denmark_label, .denmark_hover, .estonia_label, .estonia_hover, .finland_label, .finland_hover, .france_label, .france_hover, .germany_label, .germany_hover, .greece_label, .greece_hover, .hungary_label, .hungary_hover, .iceland_label, .iceland_hover, .ireland_label, .ireland_hover, .italy_label, .italy_hover, .latvia_label, .latvia_hover, .lithuania_label, .lithuania_hover, .luxembourg_label, .luxembourg_hover, .malta_label, .malta_hover, .netherlands_label, .the_netherlands_hover, .norway_label, .norway_hover, .poland_label, .poland_hover, .portugal_label, .portugal_hover, .romania_label, .romania_hover, .slovak_republic_label, .slovak_republic_hover, .slovenia_label, .slovenia_hover, .spain_label, .spain_hover, .sweden_label, .sweden_hover, .switzerland_label, .switzerland_hover, .united_kingdom_label, .united_kingdom_hover").click(function () {
		$("#Belgium_Stats").hide();
		$(".belgium_hover").css("opacity","0").css("filter","alpha(opacity=0)");
	});
		
	});
	
function Bel () {
	$("#Belgium_Stats").show();
	};
	




function BulStat () {
	$("#Bulgaria_Stats").hide();	
	$(".bulgaria_hover").css("opacity","0").css("filter","alpha(opacity=0)");
};
	
$(document).ready(function() {
	$("#Bulgaria_Stats").hide();
	
	$(".bulgaria_label, .bulgaria_hover").hover(function () {
		$(".bulgaria_hover").css("opacity","100").css("filter","alpha(opacity=100)");
	});
	
	$(".bulgaria_label, .bulgaria_hover").mouseleave(function () {
		if ( $("#Bulgaria_Stats").css('display') == 'table') {
			$(".bulgaria_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
			
		else if ( $("#Bulgaria_Stats").css('display') == 'block') {
			$(".bulgaria_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
			
		else {
			$(".bulgaria_hover").css("opacity","0").css("filter","alpha(opacity=0)");
			}	
	});
	
	$(".bulgaria_label").click(function () {
		$("#Bulgaria_Stats").show();
	});
	
	
	$(".austria_label, .austria_hover, .belgium_label, .belgium_hover, .croatia_label, .croatia_hover, .cyprus_label, .cyprus_hover, .czech_republic_label, .czech_republic_hover, .denmark_label, .denmark_hover, .estonia_label, .estonia_hover, .finland_label, .finland_hover, .france_label, .france_hover, .germany_label, .germany_hover, .greece_label, .greece_hover, .hungary_label, .hungary_hover, .iceland_label, .iceland_hover, .ireland_label, .ireland_hover, .italy_label, .italy_hover, .latvia_label, .latvia_hover, .lithuania_label, .lithuania_hover, .luxembourg_label, .luxembourg_hover, .malta_label, .malta_hover, .netherlands_label, .the_netherlands_hover, .norway_label, .norway_hover, .poland_label, .poland_hover, .portugal_label, .portugal_hover, .romania_label, .romania_hover, .slovak_republic_label, .slovak_republic_hover, .slovenia_label, .slovenia_hover, .spain_label, .spain_hover, .sweden_label, .sweden_hover, .switzerland_label, .switzerland_hover, .united_kingdom_label, .united_kingdom_hover").click(function () {
		$("#Bulgaria_Stats").hide();
		$(".bulgaria_hover").css("opacity","0").css("filter","alpha(opacity=0)");
	});
	
	});
	
function Bul () {
	$("#Bulgaria_Stats").show();
	};
	



function CroStat () {
	$("#Croatia_Stats").hide();	
	$(".croatia_hover").css("opacity","0").css("filter","alpha(opacity=0)");
	$(".croatia_label").css("color","#1f5f99");
};
	
$(document).ready(function() {
	$("#Croatia_Stats").hide();
	
	$(".croatia_label, .croatia_hover").hover(function () {
		$(".croatia_hover").css("opacity","100").css("filter","alpha(opacity=100)");
	});
	
	$(".croatia_label, .croatia_hover").mouseleave(function () {
		if ( $("#Croatia_Stats").css('display') == 'table') {
			$(".croatia_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
		
		else if ( $("#Croatia_Stats").css('display') == 'block') {
			$(".croatia_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
			
		else {
			$(".croatia_hover").css("opacity","0").css("filter","alpha(opacity=0)");
			$(".croatia_label").css("color","#1f5f99");
			}	
	});
	
	$(".croatia_label").click(function () {
		$("#Croatia_Stats").show();
	});
	
	
	$(".austria_label, .austria_hover, .belgium_label, .belgium_hover, .bulgaria_label, .bulgaria_hover, .cyprus_label, .cyprus_hover, .czech_republic_label, .czech_republic_hover, .denmark_label, .denmark_hover, .estonia_label, .estonia_hover, .finland_label, .finland_hover, .france_label, .france_hover, .germany_label, .germany_hover, .greece_label, .greece_hover, .hungary_label, .hungary_hover, .iceland_label, .iceland_hover, .ireland_label, .ireland_hover, .italy_label, .italy_hover, .latvia_label, .latvia_hover, .lithuania_label, .lithuania_hover, .luxembourg_label, .luxembourg_hover, .malta_label, .malta_hover, .netherlands_label, .the_netherlands_hover, .norway_label, .norway_hover, .poland_label, .poland_hover, .portugal_label, .portugal_hover, .romania_label, .romania_hover, .slovak_republic_label, .slovak_republic_hover, .slovenia_label, .slovenia_hover, .spain_label, .spain_hover, .sweden_label, .sweden_hover, .switzerland_label, .switzerland_hover, .united_kingdom_label, .united_kingdom_hover").click(function () {
		$("#Croatia_Stats").hide();
		$(".croatia_hover").css("opacity","0").css("filter","alpha(opacity=0)");
		$(".croatia_label").css("color","#1f5f99");
	});
	
	});
	
function Cro () {
	$("#Croatia_Stats").show();
	};





function CyStat () {
	$("#Cyprus_Stats").hide();	
	$(".cyprus_hover").css("opacity","0").css("filter","alpha(opacity=0)");
	$(".cyprus_label").css("color","#1f5f99");
};
	
$(document).ready(function() {
	$("#Cyprus_Stats").hide();
	
	$(".cyprus_label, .cyprus_hover").hover(function () {
		$(".cyprus_hover").css("opacity","100").css("filter","alpha(opacity=100)");
		$(".cyprus_label").css("color","#0d2f44");
	});
	
	$(".cyprus_label, .cyprus_hover").mouseleave(function () {
		if ( $("#Cyprus_Stats").css('display') == 'table') {
			$(".cyprus_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
		
		else if ( $("#Cyprus_Stats").css('display') == 'block') {
			$(".cyprus_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
			
		else {
			$(".cyprus_hover").css("opacity","0").css("filter","alpha(opacity=0)");
			$(".cyprus_label").css("color","#1f5f99");
			}	
	});
	
	$(".cyprus_label").click(function () {
		$("#Cyprus_Stats").show();
	});
	
	$(".austria_label, .austria_hover, .belgium_label, .belgium_hover, .bulgaria_label, .bulgaria_hover, .croatia_label, .croatia_hover, .czech_republic_label, .czech_republic_hover, .denmark_label, .denmark_hover, .estonia_label, .estonia_hover, .finland_label, .finland_hover, .france_label, .france_hover, .germany_label, .germany_hover, .greece_label, .greece_hover, .hungary_label, .hungary_hover, .iceland_label, .iceland_hover, .ireland_label, .ireland_hover, .italy_label, .italy_hover, .latvia_label, .latvia_hover, .lithuania_label, .lithuania_hover, .luxembourg_label, .luxembourg_hover, .malta_label, .malta_hover, .netherlands_label, .the_netherlands_hover, .norway_label, .norway_hover, .poland_label, .poland_hover, .portugal_label, .portugal_hover, .romania_label, .romania_hover, .slovak_republic_label, .slovak_republic_hover, .slovenia_label, .slovenia_hover, .spain_label, .spain_hover, .sweden_label, .sweden_hover, .switzerland_label, .switzerland_hover, .united_kingdom_label, .united_kingdom_hover").click(function () {
		$("#Cyprus_Stats").hide();
		$(".cyprus_hover").css("opacity","0").css("filter","alpha(opacity=0)");
		$(".cyprus_label").css("color","#1f5f99");
	});
	
	
	});
	
function Cy () {
	$("#Cyprus_Stats").show();
	};





function CzechStat () {
	$("#Czech_Republic_Stats").hide();	
	$(".czech_republic_hover").css("opacity","0").css("filter","alpha(opacity=0)");
};
	
$(document).ready(function() {
	$("#Czech_Republic_Stats").hide();
	
	$(".czech_republic_label, .czech_republic_hover").hover(function () {
		$(".czech_republic_hover").css("opacity","100").css("filter","alpha(opacity=100)");
	});
	
	$(".czech_republic_label, .czech_republic_hover").mouseleave(function () {
		if ( $("#Czech_Republic_Stats").css('display') == 'table') {
			$(".czech_republic_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
		
		else if ( $("#Czech_Republic_Stats").css('display') == 'block') {
			$(".czech_republic_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
			
		else {
			$(".czech_republic_hover").css("opacity","0").css("filter","alpha(opacity=0)");
			}	
	});
	
	$(".czech_republic_label").click(function () {
		$("#Czech_Republic_Stats").show();
	});
	
	$(".austria_label, .austria_hover, .belgium_label, .belgium_hover, .bulgaria_label, .bulgaria_hover, .croatia_label, .croatia_hover, .cyprus_label, .cyprus_hover, .denmark_label, .denmark_hover, .estonia_label, .estonia_hover, .finland_label, .finland_hover, .france_label, .france_hover, .germany_label, .germany_hover, .greece_label, .greece_hover, .hungary_label, .hungary_hover, .iceland_label, .iceland_hover, .ireland_label, .ireland_hover, .italy_label, .italy_hover, .latvia_label, .latvia_hover, .lithuania_label, .lithuania_hover, .luxembourg_label, .luxembourg_hover, .malta_label, .malta_hover, .netherlands_label, .the_netherlands_hover, .norway_label, .norway_hover, .poland_label, .poland_hover, .portugal_label, .portugal_hover, .romania_label, .romania_hover, .slovak_republic_label, .slovak_republic_hover, .slovenia_label, .slovenia_hover, .spain_label, .spain_hover, .sweden_label, .sweden_hover, .switzerland_label, .switzerland_hover, .united_kingdom_label, .united_kingdom_hover").click(function () {
		$("#Czech_Republic_Stats").hide();
		$(".czech_republic_hover").css("opacity","0").css("filter","alpha(opacity=0)");
	});
	
	
	});
	
function Czech () {
	$("#Czech_Republic_Stats").show();
	};


	
	


function DenStat () {
	$("#Denmark_Stats").hide();	
	$(".denmark_hover").css("opacity","0").css("filter","alpha(opacity=0)");
	$(".denmark_label").css("color","#1f5f99");
};
	
$(document).ready(function() {
	$("#Denmark_Stats").hide();
	
	$(".denmark_label, .denmark_hover").hover(function () {
		$(".denmark_hover").css("opacity","100").css("filter","alpha(opacity=100)");
		$(".denmark_label").css("color","#0d2f44");
	});
	
	$(".denmark_label, .denmark_hover").mouseleave(function () {
		if ( $("#Denmark_Stats").css('display') == 'table') {
			$(".denmark_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
		
		else if ( $("#Denmark_Stats").css('display') == 'block') {
			$(".denmark_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
			
		else {
			$(".denmark_hover").css("opacity","0").css("filter","alpha(opacity=0)");
			$(".denmark_label").css("color","#1f5f99");
			}	
	});
	
	$(".denmark_label").click(function () {
		$("#Denmark_Stats").show();
	});
	
	
	$(".austria_label, .austria_hover, .belgium_label, .belgium_hover, .bulgaria_label, .bulgaria_hover, .croatia_label, .croatia_hover, .cyprus_label, .cyprus_hover, .czech_republic_label, .czech_republic_hover, .estonia_label, .estonia_hover, .finland_label, .finland_hover, .france_label, .france_hover, .germany_label, .germany_hover, .greece_label, .greece_hover, .hungary_label, .hungary_hover, .iceland_label, .iceland_hover, .ireland_label, .ireland_hover, .italy_label, .italy_hover, .latvia_label, .latvia_hover, .lithuania_label, .lithuania_hover, .luxembourg_label, .luxembourg_hover, .malta_label, .malta_hover, .netherlands_label, .the_netherlands_hover, .norway_label, .norway_hover, .poland_label, .poland_hover, .portugal_label, .portugal_hover, .romania_label, .romania_hover, .slovak_republic_label, .slovak_republic_hover, .slovenia_label, .slovenia_hover, .spain_label, .spain_hover, .sweden_label, .sweden_hover, .switzerland_label, .switzerland_hover, .united_kingdom_label, .united_kingdom_hover").click(function () {
		$("#Denmark_Stats").hide();
		$(".denmark_hover").css("opacity","0").css("filter","alpha(opacity=0)");
		$(".denmark_label").css("color","#1f5f99");
	});
	
	
	});
	
function Den () {
	$("#Denmark_Stats").show();
	};

	
	
	
	
function EstonStat () {
	$("#Estonia_Stats").hide();	
	$(".estonia_hover").css("opacity","0").css("filter","alpha(opacity=0)");
	$(".estonia_label").css("color","#2078ba");
};
	
$(document).ready(function() {
	$("#Estonia_Stats").hide();
	
	$(".estonia_label, .estonia_hover").hover(function () {
		$(".estonia_hover").css("opacity","100").css("filter","alpha(opacity=100)");
		$(".estonia_label").css("color","#0d2f44");
	});
	
	$(".estonia_label, .estonia_hover").mouseleave(function () {
		if ( $("#Estonia_Stats").css('display') == 'table') {
			$(".estonia_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
		
		else if ( $("#Estonia_Stats").css('display') == 'block') {
			$(".estonia_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
			
		else {
			$(".estonia_hover").css("opacity","0").css("filter","alpha(opacity=0)");
			$(".estonia_label").css("color","#2078ba");
			}	
	});
	
	$(".estonia_label").click(function () {
		$("#Estonia_Stats").show();
	});
	
	
	$(".austria_label, .austria_hover, .belgium_label, .belgium_hover, .bulgaria_label, .bulgaria_hover, .croatia_label, .croatia_hover, .cyprus_label, .cyprus_hover, .czech_republic_label, .czech_republic_hover, .denmark_label, .denmark_hover, .finland_label, .finland_hover, .france_label, .france_hover, .germany_label, .germany_hover, .greece_label, .greece_hover, .hungary_label, .hungary_hover, .iceland_label, .iceland_hover, .ireland_label, .ireland_hover, .italy_label, .italy_hover, .latvia_label, .latvia_hover, .lithuania_label, .lithuania_hover, .luxembourg_label, .luxembourg_hover, .malta_label, .malta_hover, .netherlands_label, .the_netherlands_hover, .norway_label, .norway_hover, .poland_label, .poland_hover, .portugal_label, .portugal_hover, .romania_label, .romania_hover, .slovak_republic_label, .slovak_republic_hover, .slovenia_label, .slovenia_hover, .spain_label, .spain_hover, .sweden_label, .sweden_hover, .switzerland_label, .switzerland_hover, .united_kingdom_label, .united_kingdom_hover").click(function () {
		$("#Estonia_Stats").hide();
		$(".estonia_hover").css("opacity","0").css("filter","alpha(opacity=0)");
		$(".estonia_label").css("color","#2078ba");
	});
	
	
	
	});
	
function Eston () {
	$("#Estonia_Stats").show();
	};	
	

	


function FinStat () {
	$("#Finland_Stats").hide();	
	$(".finland_hover").css("opacity","0").css("filter","alpha(opacity=0)");
};
	
$(document).ready(function() {
	$("#Finland_Stats").hide();
	
	$(".finland_label, .finland_hover").hover(function () {
		$(".finland_hover").css("opacity","100").css("filter","alpha(opacity=100)");
	});
	
	$(".finland_label, .finland_hover").mouseleave(function () {
		if ( $("#Finland_Stats").css('display') == 'table') {
			$(".finland_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
		
		
		else if ( $("#Finland_Stats").css('display') == 'block') {
			$(".finland_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
	
		
		else {
			$(".finland_hover").css("opacity","0").css("filter","alpha(opacity=0)");
			}	
	});
	
	$(".finland_label").click(function () {
		$("#Finland_Stats").show();
		$(".finland_hover").css("opacity","100").css("filter","alpha(opacity=100)");
	});
	
	
	$(".austria_label, .austria_hover, .belgium_label, .belgium_hover, .bulgaria_label, .bulgaria_hover, .croatia_label, .croatia_hover, .cyprus_label, .cyprus_hover, .czech_republic_label, .czech_republic_hover, .denmark_label, .denmark_hover, .estonia_label, .estonia_hover, .france_label, .france_hover, .germany_label, .germany_hover, .greece_label, .greece_hover, .hungary_label, .hungary_hover, .iceland_label, .iceland_hover, .ireland_label, .ireland_hover, .italy_label, .italy_hover, .latvia_label, .latvia_hover, .lithuania_label, .lithuania_hover, .luxembourg_label, .luxembourg_hover, .malta_label, .malta_hover, .netherlands_label, .the_netherlands_hover, .norway_label, .norway_hover, .poland_label, .poland_hover, .portugal_label, .portugal_hover, .romania_label, .romania_hover, .slovak_republic_label, .slovak_republic_hover, .slovenia_label, .slovenia_hover, .spain_label, .spain_hover, .sweden_label, .sweden_hover, .switzerland_label, .switzerland_hover, .united_kingdom_label, .united_kingdom_hover").click(function () {
		$("#Finland_Stats").hide();
		$(".finland_hover").css("opacity","0").css("filter","alpha(opacity=0)");
	});
	
	});
	
function Fin () {
	$("#Finland_Stats").show();
	};







function FranStat () {
	$("#France_Stats").hide();	
	$(".france_hover").css("opacity","0").css("filter","alpha(opacity=0)");
};
	
$(document).ready(function() {
	$("#France_Stats").hide();
	
	$(".france_label, .france_hover").hover(function () {
		$(".france_hover").css("opacity","100").css("filter","alpha(opacity=100)");
	});
	
	$(".france_label, .france_hover").mouseleave(function () {
		if ( $("#France_Stats").css('display') == 'table') {
			$(".france_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
		
		else if ( $("#France_Stats").css('display') == 'block') {
			$(".france_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
			
		else {
			$(".france_hover").css("opacity","0").css("filter","alpha(opacity=0)");
			}	
	});
	
	$(".france_label").click(function () {
		$("#France_Stats").show();
	});
	
	
	$(".austria_label, .austria_hover, .belgium_label, .belgium_hover, .bulgaria_label, .bulgaria_hover, .croatia_label, .croatia_hover, .cyprus_label, .cyprus_hover, .czech_republic_label, .czech_republic_hover, .denmark_label, .denmark_hover, .estonia_label, .estonia_hover, .finland_label, .finland_hover, .germany_label, .germany_hover, .greece_label, .greece_hover, .hungary_label, .hungary_hover, .iceland_label, .iceland_hover, .ireland_label, .ireland_hover, .italy_label, .italy_hover, .latvia_label, .latvia_hover, .lithuania_label, .lithuania_hover, .luxembourg_label, .luxembourg_hover, .malta_label, .malta_hover, .netherlands_label, .the_netherlands_hover, .norway_label, .norway_hover, .poland_label, .poland_hover, .portugal_label, .portugal_hover, .romania_label, .romania_hover, .slovak_republic_label, .slovak_republic_hover, .slovenia_label, .slovenia_hover, .spain_label, .spain_hover, .sweden_label, .sweden_hover, .switzerland_label, .switzerland_hover, .united_kingdom_label, .united_kingdom_hover").click(function () {
		$("#France_Stats").hide();
		$(".france_hover").css("opacity","0").css("filter","alpha(opacity=0)");
	});
	
	
	});
	
function Fran () {
	$("#France_Stats").show();
	};	
	
	



function GermStat () {
	$("#Germany_Stats").hide();	
	$(".germany_hover").css("opacity","0").css("filter","alpha(opacity=0)");
};
	
$(document).ready(function() {
	$("#Germany_Stats").hide();
	
	$(".germany_label, .germany_hover").hover(function () {
		$(".germany_hover").css("opacity","100").css("filter","alpha(opacity=100)");
	});
	
	$(".germany_label, .germany_hover").mouseleave(function () {
		if ( $("#Germany_Stats").css('display') == 'table') {
			$(".germany_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
		
		else if ( $("#Germany_Stats").css('display') == 'block') {
			$(".germany_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
			
		else {
			$(".germany_hover").css("opacity","0").css("filter","alpha(opacity=0)");
			}	
	});
	
	$(".germany_label").click(function () {
		$("#Germany_Stats").show();
	});
	
	
	$(".austria_label, .austria_hover, .belgium_label, .belgium_hover, .bulgaria_label, .bulgaria_hover, .croatia_label, .croatia_hover, .cyprus_label, .cyprus_hover, .czech_republic_label, .czech_republic_hover, .denmark_label, .denmark_hover, .estonia_label, .estonia_hover, .finland_label, .finland_hover, .france_label, .france_hover, .greece_label, .greece_hover, .hungary_label, .hungary_hover, .iceland_label, .iceland_hover, .ireland_label, .ireland_hover, .italy_label, .italy_hover, .latvia_label, .latvia_hover, .lithuania_label, .lithuania_hover, .luxembourg_label, .luxembourg_hover, .malta_label, .malta_hover, .netherlands_label, .the_netherlands_hover, .norway_label, .norway_hover, .poland_label, .poland_hover, .portugal_label, .portugal_hover, .romania_label, .romania_hover, .slovak_republic_label, .slovak_republic_hover, .slovenia_label, .slovenia_hover, .spain_label, .spain_hover, .sweden_label, .sweden_hover, .switzerland_label, .switzerland_hover, .united_kingdom_label, .united_kingdom_hover").click(function () {
		$("#Germany_Stats").hide();
		$(".germany_hover").css("opacity","0").css("filter","alpha(opacity=0)");
	});
	
	
	
	});
	
function Germ () {
	$("#Germany_Stats").show();
	};	






function GreeStat () {
	$("#Greece_Stats").hide();	
	$(".greece_hover").css("opacity","0").css("filter","alpha(opacity=0)");
	$(".greece_label").css("color","#3fa4c2");
};
	
$(document).ready(function() {
	$("#Greece_Stats").hide();
	
	$(".greece_label, .greece_hover").hover(function () {
		$(".greece_hover").css("opacity","100").css("filter","alpha(opacity=100)");
		$(".greece_label").css("color","#0d2f44");
	});
	
	$(".greece_label, .greece_hover").mouseleave(function () {
		if ( $("#Greece_Stats").css('display') == 'table') {
			$(".greece_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
		
		else if ( $("#Greece_Stats").css('display') == 'block') {
			$(".greece_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
			
		else {
			$(".greece_hover").css("opacity","0").css("filter","alpha(opacity=0)");
			$(".greece_label").css("color","#3fa4c2");
			}	
	});
	
	$(".greece_label").click(function () {
		$("#Greece_Stats").show();
	});
	
	
	$(".austria_label, .austria_hover, .belgium_label, .belgium_hover, .bulgaria_label, .bulgaria_hover, .croatia_label, .croatia_hover, .cyprus_label, .cyprus_hover, .czech_republic_label, .czech_republic_hover, .denmark_label, .denmark_hover, .estonia_label, .estonia_hover, .finland_label, .finland_hover, .france_label, .france_hover, .germany_label, .germany_hover, .hungary_label, .hungary_hover, .iceland_label, .iceland_hover, .ireland_label, .ireland_hover, .italy_label, .italy_hover, .latvia_label, .latvia_hover, .lithuania_label, .lithuania_hover, .luxembourg_label, .luxembourg_hover, .malta_label, .malta_hover, .netherlands_label, .the_netherlands_hover, .norway_label, .norway_hover, .poland_label, .poland_hover, .portugal_label, .portugal_hover, .romania_label, .romania_hover, .slovak_republic_label, .slovak_republic_hover, .slovenia_label, .slovenia_hover, .spain_label, .spain_hover, .sweden_label, .sweden_hover, .switzerland_label, .switzerland_hover, .united_kingdom_label, .united_kingdom_hover").click(function () {
		$("#Greece_Stats").hide();
		$(".greece_hover").css("opacity","0").css("filter","alpha(opacity=0)");
		$(".greece_label").css("color","#3fa4c2");
	});
	
	
	});
	
function Gree () {
	$("#Greece_Stats").show();
	};	



	



function HungStat () {
	$("#Hungary_Stats").hide();	
	$(".hungary_hover").css("opacity","0").css("filter","alpha(opacity=0)");
};
	
$(document).ready(function() {
	$("#Hungary_Stats").hide();
	
	$(".hungary_label, .hungary_hover").hover(function () {
		$(".hungary_hover").css("opacity","100").css("filter","alpha(opacity=100)");
	});
	
	$(".hungary_label, .hungary_hover").mouseleave(function () {
		if ( $("#Hungary_Stats").css('display') == 'table') {
			$(".hungary_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
		
		else if ( $("#Hungary_Stats").css('display') == 'block') {
			$(".hungary_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
			
		else {
			$(".hungary_hover").css("opacity","0").css("filter","alpha(opacity=0)");
			}	
	});
	
	$(".hungary_label").click(function () {
		$("#Hungary_Stats").show();
	});
	
	
	$(".austria_label, .austria_hover, .belgium_label, .belgium_hover, .bulgaria_label, .bulgaria_hover, .croatia_label, .croatia_hover, .cyprus_label, .cyprus_hover, .czech_republic_label, .czech_republic_hover, .denmark_label, .denmark_hover, .estonia_label, .estonia_hover, .finland_label, .finland_hover, .france_label, .france_hover, .germany_label, .germany_hover, .greece_label, .greece_hover, .iceland_label, .iceland_hover, .ireland_label, .ireland_hover, .italy_label, .italy_hover, .latvia_label, .latvia_hover, .lithuania_label, .lithuania_hover, .luxembourg_label, .luxembourg_hover, .malta_label, .malta_hover, .netherlands_label, .the_netherlands_hover, .norway_label, .norway_hover, .poland_label, .poland_hover, .portugal_label, .portugal_hover, .romania_label, .romania_hover, .slovak_republic_label, .slovak_republic_hover, .slovenia_label, .slovenia_hover, .spain_label, .spain_hover, .sweden_label, .sweden_hover, .switzerland_label, .switzerland_hover, .united_kingdom_label, .united_kingdom_hover").click(function () {
		$("#Hungary_Stats").hide();
		$(".hungary_hover").css("opacity","0").css("filter","alpha(opacity=0)");
	});
	
	
	});
	
function Hung () {
	$("#Hungary_Stats").show();
	};	

	
	
	


function IcelStat () {
	$("#Iceland_Stats").hide();	
	$(".iceland_hover").css("opacity","0").css("filter","alpha(opacity=0)");
	$(".iceland_label").css("color","#2078ba");
};
	
$(document).ready(function() {
	$("#Iceland_Stats").hide();
	
	$(".iceland_label, .iceland_hover").hover(function () {
		$(".iceland_hover").css("opacity","100").css("filter","alpha(opacity=100)");
		$(".iceland_label").css("color","#0d2f44");
	});
	
	$(".iceland_label, .iceland_hover").mouseleave(function () {
		if ( $("#Iceland_Stats").css('display') == 'table') {
			$(".iceland_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
		
		else if ( $("#Iceland_Stats").css('display') == 'block') {
			$(".iceland_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
			
		else {
			$(".iceland_hover").css("opacity","0").css("filter","alpha(opacity=0)");
			$(".iceland_label").css("color","#2078ba");
			}	
	});
	
	$(".iceland_label").click(function () {
		$("#Iceland_Stats").show();
	});
	
	
	$(".austria_label, .austria_hover, .belgium_label, .belgium_hover, .bulgaria_label, .bulgaria_hover, .croatia_label, .croatia_hover, .cyprus_label, .cyprus_hover, .czech_republic_label, .czech_republic_hover, .denmark_label, .denmark_hover, .estonia_label, .estonia_hover, .finland_label, .finland_hover, .france_label, .france_hover, .germany_label, .germany_hover, .greece_label, .greece_hover, .hungary_label, .hungary_hover, .ireland_label, .ireland_hover, .italy_label, .italy_hover, .latvia_label, .latvia_hover, .lithuania_label, .lithuania_hover, .luxembourg_label, .luxembourg_hover, .malta_label, .malta_hover, .netherlands_label, .the_netherlands_hover, .norway_label, .norway_hover, .poland_label, .poland_hover, .portugal_label, .portugal_hover, .romania_label, .romania_hover, .slovak_republic_label, .slovak_republic_hover, .slovenia_label, .slovenia_hover, .spain_label, .spain_hover, .sweden_label, .sweden_hover, .switzerland_label, .switzerland_hover, .united_kingdom_label, .united_kingdom_hover").click(function () {
		$("#Iceland_Stats").hide();
		$(".iceland_hover").css("opacity","0").css("filter","alpha(opacity=0)");
		$(".iceland_label").css("color","#2078ba");
	});
	
	
	});
	
function Icel () {
	$("#Iceland_Stats").show();
	};	








function IrelStat () {
	$("#Ireland_Stats").hide();	
	$(".ireland_hover").css("opacity","0").css("filter","alpha(opacity=0)");
	$(".ireland_label").css("color","#0062c4");
};
	
$(document).ready(function() {
	$("#Ireland_Stats").hide();
	
	$(".ireland_label, .ireland_hover").hover(function () {
		$(".ireland_hover").css("opacity","100").css("filter","alpha(opacity=100)");
		$(".ireland_label").css("color","#0d2f44");
	});
	
	
	
	$(".ireland_label, .ireland_hover").mouseleave(function () {
		if ( $("#Ireland_Stats").css('display') == 'table') {
			$(".ireland_hover").css("opacity","100").css("filter","alpha(opacity=100)");
			}
		
		else if ( $("#Ireland_Stats").css('display') == 'block') {
			$(".austria_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
			
		else {
			$(".ireland_hover").css("opacity","0").css("filter","alpha(opacity=0)");
			$(".ireland_label").css("color","#0062c4");
			}	
	});
	
	$(".ireland_label").click(function () {
		$("#Ireland_Stats").show();
	});
	
	
	$(".austria_label, .austria_hover, .belgium_label, .belgium_hover, .bulgaria_label, .bulgaria_hover, .croatia_label, .croatia_hover, .cyprus_label, .cyprus_hover, .czech_republic_label, .czech_republic_hover, .denmark_label, .denmark_hover, .estonia_label, .estonia_hover, .finland_label, .finland_hover, .france_label, .france_hover, .germany_label, .germany_hover, .greece_label, .greece_hover, .hungary_label, .hungary_hover, .iceland_label, .iceland_hover, .italy_label, .italy_hover, .latvia_label, .latvia_hover, .lithuania_label, .lithuania_hover, .luxembourg_label, .luxembourg_hover, .malta_label, .malta_hover, .netherlands_label, .the_netherlands_hover, .norway_label, .norway_hover, .poland_label, .poland_hover, .portugal_label, .portugal_hover, .romania_label, .romania_hover, .slovak_republic_label, .slovak_republic_hover, .slovenia_label, .slovenia_hover, .spain_label, .spain_hover, .sweden_label, .sweden_hover, .switzerland_label, .switzerland_hover, .united_kingdom_label, .united_kingdom_hover").click(function () {
		$("#Ireland_Stats").hide();
		$(".ireland_hover").css("opacity","0").css("filter","alpha(opacity=0)");
		$(".ireland_label").css("color","#0062c4");
	});
	
	
	});
	
function Irel () {
	$("#Ireland_Stats").show();
	};	






function ItalStat () {
	$("#Italy_Stats").hide();	
	$(".italy_hover").css("opacity","0").css("filter","alpha(opacity=0)");
	$(".italy_label").css("color","#0062c4");
};
	
$(document).ready(function() {
	$("#Italy_Stats").hide();
	
	$(".italy_label, .italy_hover").hover(function () {
		$(".italy_hover").css("opacity","100").css("filter","alpha(opacity=100)");
		$(".italy_label").css("color","#0d2f44");
	});
	
	$(".italy_label, .italy_hover").mouseleave(function () {
		if ( $("#Italy_Stats").css('display') == 'table') {
			$(".italy_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
		
		else if ( $("#Italy_Stats").css('display') == 'block') {
			$(".italy_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
			
		else {
			$(".italy_hover").css("opacity","0").css("filter","alpha(opacity=0)");
			$(".italy_label").css("color","#0062c4");
			}	
	});
	
	$(".italy_label").click(function () {
		$("#Italy_Stats").show();
	});
	
	
	$(".austria_label, .austria_hover, .belgium_label, .belgium_hover, .bulgaria_label, .bulgaria_hover, .croatia_label, .croatia_hover, .cyprus_label, .cyprus_hover, .czech_republic_label, .czech_republic_hover, .denmark_label, .denmark_hover, .estonia_label, .estonia_hover, .finland_label, .finland_hover, .france_label, .france_hover, .germany_label, .germany_hover, .greece_label, .greece_hover, .hungary_label, .hungary_hover, .iceland_label, .iceland_hover, .ireland_label, .ireland_hover, .latvia_label, .latvia_hover, .lithuania_label, .lithuania_hover, .luxembourg_label, .luxembourg_hover, .malta_label, .malta_hover, .netherlands_label, .the_netherlands_hover, .norway_label, .norway_hover, .poland_label, .poland_hover, .portugal_label, .portugal_hover, .romania_label, .romania_hover, .slovak_republic_label, .slovak_republic_hover, .slovenia_label, .slovenia_hover, .spain_label, .spain_hover, .sweden_label, .sweden_hover, .switzerland_label, .switzerland_hover, .united_kingdom_label, .united_kingdom_hover").click(function () {
		$("#Italy_Stats").hide();
		$(".italy_hover").css("opacity","0").css("filter","alpha(opacity=0)");
		$(".italy_label").css("color","#0062c4");
	});
	
	
	});
	
function Ital () {
	$("#Italy_Stats").show();
	};	


	




function LatStat () {
	$("#Latvia_Stats").hide();	
	$(".latvia_hover").css("opacity","0").css("filter","alpha(opacity=0)");
	$(".latvia_label").css("color","#0062c4");
};
	
$(document).ready(function() {
	$("#Latvia_Stats").hide();
	
	$(".latvia_label, .latvia_hover").hover(function () {
		$(".latvia_hover").css("opacity","100").css("filter","alpha(opacity=100)");
		$(".latvia_label").css("color","#0d2f44");
	});
	
	$(".latvia_label, .latvia_hover").mouseleave(function () {
		if ( $("#Latvia_Stats").css('display') == 'table') {
			$(".latvia_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
		
		else if ( $("#Latvia_Stats").css('display') == 'block') {
			$(".latvia_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
			
		else {
			$(".latvia_hover").css("opacity","0").css("filter","alpha(opacity=0)");
			$(".latvia_label").css("color","#0062c4");
			}	
	});
	
	$(".latvia_label").click(function () {
		$("#Latvia_Stats").show();
	});
	
	
	$(".austria_label, .austria_hover, .belgium_label, .belgium_hover, .bulgaria_label, .bulgaria_hover, .croatia_label, .croatia_hover, .cyprus_label, .cyprus_hover, .czech_republic_label, .czech_republic_hover, .denmark_label, .denmark_hover, .estonia_label, .estonia_hover, .finland_label, .finland_hover, .france_label, .france_hover, .germany_label, .germany_hover, .greece_label, .greece_hover, .hungary_label, .hungary_hover, .iceland_label, .iceland_hover, .ireland_label, .ireland_hover, .italy_label, .italy_hover, .lithuania_label, .lithuania_hover, .luxembourg_label, .luxembourg_hover, .malta_label, .malta_hover, .netherlands_label, .the_netherlands_hover, .norway_label, .norway_hover, .poland_label, .poland_hover, .portugal_label, .portugal_hover, .romania_label, .romania_hover, .slovak_republic_label, .slovak_republic_hover, .slovenia_label, .slovenia_hover, .spain_label, .spain_hover, .sweden_label, .sweden_hover, .switzerland_label, .switzerland_hover, .united_kingdom_label, .united_kingdom_hover").click(function () {
		$("#Latvia_Stats").hide();
		$(".latvia_hover").css("opacity","0").css("filter","alpha(opacity=0)");
		$(".latvia_label").css("color","#0062c4");
	});
	
	
	});
	
function Lat () {
	$("#Latvia_Stats").show();
	};	






function LithStat () {
	$("#Lithuania_Stats").hide();	
	$(".lithuania_hover").css("opacity","0").css("filter","alpha(opacity=0)");
	$(".lithuania_label").css("color","#3fa4c2");
};
	
$(document).ready(function() {
	$("#Lithuania_Stats").hide();
	
	$(".lithuania_label, .lithuania_hover").hover(function () {
		$(".lithuania_hover").css("opacity","100").css("filter","alpha(opacity=100)");
		$(".lithuania_label").css("color","#0d2f44");
	});
	
	$(".lithuania_label, .lithuania_hover").mouseleave(function () {
		if ( $("#Lithuania_Stats").css('display') == 'table') {
			$(".lithuania_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
		
		else if ( $("#Lithuania_Stats").css('display') == 'block') {
			$(".lithuania_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
			
		else {
			$(".lithuania_hover").css("opacity","0").css("filter","alpha(opacity=0)");
			$(".lithuania_label").css("color","#3fa4c2");
			}	
	});
	
	$(".lithuania_label").click(function () {
		$("#Lithuania_Stats").show();
	});
	
	
	$(".austria_label, .austria_hover, .belgium_label, .belgium_hover, .bulgaria_label, .bulgaria_hover, .croatia_label, .croatia_hover, .cyprus_label, .cyprus_hover, .czech_republic_label, .czech_republic_hover, .denmark_label, .denmark_hover, .estonia_label, .estonia_hover, .finland_label, .finland_hover, .france_label, .france_hover, .germany_label, .germany_hover, .greece_label, .greece_hover, .hungary_label, .hungary_hover, .iceland_label, .iceland_hover, .ireland_label, .ireland_hover, .italy_label, .italy_hover, .latvia_label, .latvia_hover, .luxembourg_label, .luxembourg_hover, .malta_label, .malta_hover, .netherlands_label, .the_netherlands_hover, .norway_label, .norway_hover, .poland_label, .poland_hover, .portugal_label, .portugal_hover, .romania_label, .romania_hover, .slovak_republic_label, .slovak_republic_hover, .slovenia_label, .slovenia_hover, .spain_label, .spain_hover, .sweden_label, .sweden_hover, .switzerland_label, .switzerland_hover, .united_kingdom_label, .united_kingdom_hover").click(function () {
		$("#Lithuania_Stats").hide();
		$(".lithuania_hover").css("opacity","0").css("filter","alpha(opacity=0)");
		$(".lithuania_label").css("color","#3fa4c2");
	});
	
	
	});
	
function Lith () {
	$("#Lithuania_Stats").show();
	};	






function LuxStat () {
	$("#Luxembourg_Stats").hide();	
	$(".luxembourg_hover").css("opacity","0").css("filter","alpha(opacity=0)");
};
	
$(document).ready(function() {
	$("#Luxembourg_Stats").hide();
	
	$(".luxembourg_label, .luxembourg_hover").hover(function () {
		$(".luxembourg_hover").css("opacity","100").css("filter","alpha(opacity=100)");
	});
	
	$(".luxembourg_label, .luxembourg_hover").mouseleave(function () {
		if ( $("#Luxembourg_Stats").css('display') == 'table') {
			$(".luxembourg_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
		
		else if ( $("#Luxembourg_Stats").css('display') == 'block') {
			$(".luxembourg_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
			
		else {
			$(".luxembourg_hover").css("opacity","0").css("filter","alpha(opacity=0)");
			}	
	});
	
	$(".luxembourg_label").click(function () {
		$("#Luxembourg_Stats").show();
	});
	
	
	$(".austria_label, .austria_hover, .belgium_label, .belgium_hover, .bulgaria_label, .bulgaria_hover, .croatia_label, .croatia_hover, .cyprus_label, .cyprus_hover, .czech_republic_label, .czech_republic_hover, .denmark_label, .denmark_hover, .estonia_label, .estonia_hover, .finland_label, .finland_hover, .france_label, .france_hover, .germany_label, .germany_hover, .greece_label, .greece_hover, .hungary_label, .hungary_hover, .iceland_label, .iceland_hover, .ireland_label, .ireland_hover, .italy_label, .italy_hover, .latvia_label, .latvia_hover, .lithuania_label, .lithuania_hover, .malta_label, .malta_hover, .netherlands_label, .the_netherlands_hover, .norway_label, .norway_hover, .poland_label, .poland_hover, .portugal_label, .portugal_hover, .romania_label, .romania_hover, .slovak_republic_label, .slovak_republic_hover, .slovenia_label, .slovenia_hover, .spain_label, .spain_hover, .sweden_label, .sweden_hover, .switzerland_label, .switzerland_hover, .united_kingdom_label, .united_kingdom_hover").click(function () {
		$("#Luxembourg_Stats").hide();
		$(".luxembourg_hover").css("opacity","0").css("filter","alpha(opacity=0)");
	});
	
	
	});
	
function Lux () {
	$("#Luxembourg_Stats").show();
	};	






function MalStat () {
	$("#Malta_Stats").hide();	
	$(".malta_hover").css("opacity","0").css("filter","alpha(opacity=0)");
	$(".malta_label").css("color","#1f5f99");
};
	
$(document).ready(function() {
	$("#Malta_Stats").hide();
	
	$(".malta_label, .malta_hover").hover(function () {
		$(".malta_hover").css("opacity","100").css("filter","alpha(opacity=100)");
		$(".malta_label").css("color","#0d2f44");
	});
	
	$(".malta_label, .malta_hover").mouseleave(function () {
		if ( $("#Malta_Stats").css('display') == 'table') {
			$(".malta_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
		
		else if ( $("#Malta_Stats").css('display') == 'block') {
			$(".malta_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
			
		else {
			$(".malta_hover").css("opacity","0").css("filter","alpha(opacity=0)");
			$(".malta_label").css("color","#1f5f99");
			}	
	});
	
	$(".malta_label").click(function () {
		$("#Malta_Stats").show();
	});
	
	
	$(".austria_label, .austria_hover, .belgium_label, .belgium_hover, .bulgaria_label, .bulgaria_hover, .croatia_label, .croatia_hover, .cyprus_label, .cyprus_hover, .czech_republic_label, .czech_republic_hover, .denmark_label, .denmark_hover, .estonia_label, .estonia_hover, .finland_label, .finland_hover, .france_label, .france_hover, .germany_label, .germany_hover, .greece_label, .greece_hover, .hungary_label, .hungary_hover, .iceland_label, .iceland_hover, .ireland_label, .ireland_hover, .italy_label, .italy_hover, .latvia_label, .latvia_hover, .lithuania_label, .lithuania_hover, .luxembourg_label, .luxembourg_hover, .netherlands_label, .the_netherlands_hover, .norway_label, .norway_hover, .poland_label, .poland_hover, .portugal_label, .portugal_hover, .romania_label, .romania_hover, .slovak_republic_label, .slovak_republic_hover, .slovenia_label, .slovenia_hover, .spain_label, .spain_hover, .sweden_label, .sweden_hover, .switzerland_label, .switzerland_hover, .united_kingdom_label, .united_kingdom_hover").click(function () {
		$("#Malta_Stats").hide();
		$(".malta_hover").css("opacity","0").css("filter","alpha(opacity=0)");
		$(".malta_label").css("color","#1f5f99");
	});
	
	
	});
	
function Mal () {
	$("#Malta_Stats").show();
	};	








function NethStat () {
	$("#The_Netherlands_Stats").hide();	
	$(".the_netherlands_hover").css("opacity","0").css("filter","alpha(opacity=0)");
	$(".netherlands_label").css("color","#1f5f99");
};
	
$(document).ready(function() {
	$("#The_Netherlands_Stats").hide();
	
	$(".netherlands_label, .the_netherlands_hover").hover(function () {
		$(".the_netherlands_hover").css("opacity","100").css("filter","alpha(opacity=100)");
		$(".netherlands_label").css("color","#0d2f44");
	});
	
	$(".netherlands_label, .the_netherlands_hover").mouseleave(function () {
		if ( $("#The_Netherlands_Stats").css('display') == 'table') {
			$(".the_netherlands_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
		
		else if ( $("#The_Netherlands_Stats").css('display') == 'block') {
			$(".the_netherlands_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
			
		else {
			$(".the_netherlands_hover").css("opacity","0").css("filter","alpha(opacity=0)");
			$(".netherlands_label").css("color","#1f5f99");
			}	
	});
	
	$(".netherlands_label").click(function () {
		$("#The_Netherlands_Stats").show();
	});
	
	
	$(".austria_label, .austria_hover, .belgium_label, .belgium_hover, .bulgaria_label, .bulgaria_hover, .croatia_label, .croatia_hover, .cyprus_label, .cyprus_hover, .czech_republic_label, .czech_republic_hover, .denmark_label, .denmark_hover, .estonia_label, .estonia_hover, .finland_label, .finland_hover, .france_label, .france_hover, .germany_label, .germany_hover, .greece_label, .greece_hover, .hungary_label, .hungary_hover, .iceland_label, .iceland_hover, .ireland_label, .ireland_hover, .italy_label, .italy_hover, .latvia_label, .latvia_hover, .lithuania_label, .lithuania_hover, .luxembourg_label, .luxembourg_hover, .malta_label, .malta_hover, .norway_label, .norway_hover, .poland_label, .poland_hover, .portugal_label, .portugal_hover, .romania_label, .romania_hover, .slovak_republic_label, .slovak_republic_hover, .slovenia_label, .slovenia_hover, .spain_label, .spain_hover, .sweden_label, .sweden_hover, .switzerland_label, .switzerland_hover, .united_kingdom_label, .united_kingdom_hover").click(function () {
		$("#The_Netherlands_Stats").hide();
		$(".the_netherlands_hover").css("opacity","0").css("filter","alpha(opacity=0)");
		$(".netherlands_label").css("color","#1f5f99");
	});
	
	
	});
	
function Neth () {
	$("#The_Netherlands_Stats").show();
	};	





function NorStat () {
	$("#Norway_Stats").hide();	
	$(".norway_hover").css("opacity","0").css("filter","alpha(opacity=0)");
};
	
$(document).ready(function() {
	$("#Norway_Stats").hide();
	
	$(".norway_label, .norway_hover").hover(function () {
		$(".norway_hover").css("opacity","100").css("filter","alpha(opacity=100)");
	});
	
	$(".norway_label, .norway_hover").mouseleave(function () {
		if ( $("#Norway_Stats").css('display') == 'table') {
			$(".norway_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
		
		else if ( $("#Norway_Stats").css('display') == 'block') {
			$(".norway_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
			
		else {
			$(".norway_hover").css("opacity","0").css("filter","alpha(opacity=0)");
			}	
	});
	
	$(".norway_label").click(function () {
		$("#Norway_Stats").show();
	});
	
	
	$(".austria_label, .austria_hover, .belgium_label, .belgium_hover, .bulgaria_label, .bulgaria_hover, .croatia_label, .croatia_hover, .cyprus_label, .cyprus_hover, .czech_republic_label, .czech_republic_hover, .denmark_label, .denmark_hover, .estonia_label, .estonia_hover, .finland_label, .finland_hover, .france_label, .france_hover, .germany_label, .germany_hover, .greece_label, .greece_hover, .hungary_label, .hungary_hover, .iceland_label, .iceland_hover, .ireland_label, .ireland_hover, .italy_label, .italy_hover, .latvia_label, .latvia_hover, .lithuania_label, .lithuania_hover, .luxembourg_label, .luxembourg_hover, .malta_label, .malta_hover, .netherlands_label, .the_netherlands_hover, .poland_label, .poland_hover, .portugal_label, .portugal_hover, .romania_label, .romania_hover, .slovak_republic_label, .slovak_republic_hover, .slovenia_label, .slovenia_hover, .spain_label, .spain_hover, .sweden_label, .sweden_hover, .switzerland_label, .switzerland_hover, .united_kingdom_label, .united_kingdom_hover").click(function () {
		$("#Norway_Stats").hide();
		$(".norway_hover").css("opacity","0").css("filter","alpha(opacity=0)");
	});
	
	
	});
	
function Nor () {
	$("#Norway_Stats").show();
	};	





function PolStat () {
	$("#Poland_Stats").hide();	
	$(".poland_hover").css("opacity","0").css("filter","alpha(opacity=0)");
};
	
$(document).ready(function() {
	$("#Poland_Stats").hide();
	
	$(".poland_label, .poland_hover").hover(function () {
		$(".poland_hover").css("opacity","100").css("filter","alpha(opacity=100)");
	});
	
	$(".poland_label, .poland_hover").mouseleave(function () {
		if ( $("#Poland_Stats").css('display') == 'table') {
			$(".poland_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
		
		else if ( $("#Poland_Stats").css('display') == 'block') {
			$(".poland_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
			
		else {
			$(".poland_hover").css("opacity","0").css("filter","alpha(opacity=0)");
			}	
	});
	
	$(".poland_label").click(function () {
		$("#Poland_Stats").show();
	});
	
	
	$(".austria_label, .austria_hover, .belgium_label, .belgium_hover, .bulgaria_label, .bulgaria_hover, .croatia_label, .croatia_hover, .cyprus_label, .cyprus_hover, .czech_republic_label, .czech_republic_hover, .denmark_label, .denmark_hover, .estonia_label, .estonia_hover, .finland_label, .finland_hover, .france_label, .france_hover, .germany_label, .germany_hover, .greece_label, .greece_hover, .hungary_label, .hungary_hover, .iceland_label, .iceland_hover, .ireland_label, .ireland_hover, .italy_label, .italy_hover, .latvia_label, .latvia_hover, .lithuania_label, .lithuania_hover, .luxembourg_label, .luxembourg_hover, .malta_label, .malta_hover, .netherlands_label, .the_netherlands_hover, .norway_label, .norway_hover, .portugal_label, .portugal_hover, .romania_label, .romania_hover, .slovak_republic_label, .slovak_republic_hover, .slovenia_label, .slovenia_hover, .spain_label, .spain_hover, .sweden_label, .sweden_hover, .switzerland_label, .switzerland_hover, .united_kingdom_label, .united_kingdom_hover").click(function () {
		$("#Poland_Stats").hide();
		$(".poland_hover").css("opacity","0").css("filter","alpha(opacity=0)");
	});
	
	
	});
	
function Pol () {
	$("#Poland_Stats").show();
	};	



	


	


function PorStat () {
	$("#Portugal_Stats").hide();	
	$(".portugal_hover").css("opacity","0").css("filter","alpha(opacity=0)");
	$(".portugal_label").css("color","#3fa4c2");
};
	
$(document).ready(function() {
	$("#Portugal_Stats").hide();
	
	$(".portugal_label, .portugal_hover").hover(function () {
		$(".portugal_hover").css("opacity","100").css("filter","alpha(opacity=100)");
		$(".portugal_label").css("color","#0d2f44");
	});
	
	$(".portugal_label, .portugal_hover").mouseleave(function () {
		if ( $("#Portugal_Stats").css('display') == 'table') {
			$(".portugal_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
		
		else if ( $("#Portugal_Stats").css('display') == 'block') {
			$(".portugal_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
			
		else {
			$(".portugal_hover").css("opacity","0").css("filter","alpha(opacity=0)");
			$(".portugal_label").css("color","#3fa4c2");
			}	
	});
	
	$(".portugal_label").click(function () {
		$("#Portugal_Stats").show();
	});
	
	
	$(".austria_label, .austria_hover, .belgium_label, .belgium_hover, .bulgaria_label, .bulgaria_hover, .croatia_label, .croatia_hover, .cyprus_label, .cyprus_hover, .czech_republic_label, .czech_republic_hover, .denmark_label, .denmark_hover, .estonia_label, .estonia_hover, .finland_label, .finland_hover, .france_label, .france_hover, .germany_label, .germany_hover, .greece_label, .greece_hover, .hungary_label, .hungary_hover, .iceland_label, .iceland_hover, .ireland_label, .ireland_hover, .italy_label, .italy_hover, .latvia_label, .latvia_hover, .lithuania_label, .lithuania_hover, .luxembourg_label, .luxembourg_hover, .malta_label, .malta_hover, .netherlands_label, .the_netherlands_hover, .norway_label, .norway_hover, .poland_label, .poland_hover, .romania_label, .romania_hover, .slovak_republic_label, .slovak_republic_hover, .slovenia_label, .slovenia_hover, .spain_label, .spain_hover, .sweden_label, .sweden_hover, .switzerland_label, .switzerland_hover, .united_kingdom_label, .united_kingdom_hover").click(function () {
		$("#Portugal_Stats").hide();
		$(".portugal_hover").css("opacity","0").css("filter","alpha(opacity=0)");
		$(".portugal_label").css("color","#3fa4c2");
	});
	
	
	});
	
function Por () {
	$("#Portugal_Stats").show();
	};	





function RomStat () {
	$("#Romania_Stats").hide();	
	$(".romania_hover").css("opacity","0").css("filter","alpha(opacity=0)");
};
	
$(document).ready(function() {
	$("#Romania_Stats").hide();
	
	$(".romania_label, .romania_hover").hover(function () {
		$(".romania_hover").css("opacity","100").css("filter","alpha(opacity=100)");
	});
	
	$(".romania_label, .romania_hover").mouseleave(function () {
		if ( $("#Romania_Stats").css('display') == 'table') {
			$(".romania_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
		
		else if ( $("#Romania_Stats").css('display') == 'block') {
			$(".romania_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
			
		else {
			$(".romania_hover").css("opacity","0").css("filter","alpha(opacity=0)");
			}	
	});
	
	$(".romania_label").click(function () {
		$("#Romania_Stats").show();
	});
	
	
	$(".austria_label, .austria_hover, .belgium_label, .belgium_hover, .bulgaria_label, .bulgaria_hover, .croatia_label, .croatia_hover, .cyprus_label, .cyprus_hover, .czech_republic_label, .czech_republic_hover, .denmark_label, .denmark_hover, .estonia_label, .estonia_hover, .finland_label, .finland_hover, .france_label, .france_hover, .germany_label, .germany_hover, .greece_label, .greece_hover, .hungary_label, .hungary_hover, .iceland_label, .iceland_hover, .ireland_label, .ireland_hover, .italy_label, .italy_hover, .latvia_label, .latvia_hover, .lithuania_label, .lithuania_hover, .luxembourg_label, .luxembourg_hover, .malta_label, .malta_hover, .netherlands_label, .the_netherlands_hover, .norway_label, .norway_hover, .poland_label, .poland_hover, .portugal_label, .portugal_hover, .slovak_republic_label, .slovak_republic_hover, .slovenia_label, .slovenia_hover, .spain_label, .spain_hover, .sweden_label, .sweden_hover, .switzerland_label, .switzerland_hover, .united_kingdom_label, .united_kingdom_hover").click(function () {
		$("#Romania_Stats").hide();
		$(".romania_hover").css("opacity","0").css("filter","alpha(opacity=0)");
	});
	
	
	});
	
function Rom () {
	$("#Romania_Stats").show();
	};







function SlovStat () {
	$("#Slovenia_Stats").hide();	
	$(".slovenia_hover").css("opacity","0").css("filter","alpha(opacity=0)");
};
	
$(document).ready(function() {
	$("#Slovenia_Stats").hide();
	
	$(".slovenia_label, .slovenia_hover").hover(function () {
		$(".slovenia_hover").css("opacity","100").css("filter","alpha(opacity=100)");
	});
	
	$(".slovenia_label, .slovenia_hover").mouseleave(function () {
		if ( $("#Slovenia_Stats").css('display') == 'table') {
			$(".slovenia_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
		
		else if ( $("#Slovenia_Stats").css('display') == 'block') {
			$(".slovenia_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
			
		else {
			$(".slovenia_hover").css("opacity","0").css("filter","alpha(opacity=0)");
			}	
	});
	
	$(".slovenia_label").click(function () {
		$("#Slovenia_Stats").show();
	});
	
	
	$(".austria_label, .austria_hover, .belgium_label, .belgium_hover, .bulgaria_label, .bulgaria_hover, .croatia_label, .croatia_hover, .cyprus_label, .cyprus_hover, .czech_republic_label, .czech_republic_hover, .denmark_label, .denmark_hover, .estonia_label, .estonia_hover, .finland_label, .finland_hover, .france_label, .france_hover, .germany_label, .germany_hover, .greece_label, .greece_hover, .hungary_label, .hungary_hover, .iceland_label, .iceland_hover, .ireland_label, .ireland_hover, .italy_label, .italy_hover, .latvia_label, .latvia_hover, .lithuania_label, .lithuania_hover, .luxembourg_label, .luxembourg_hover, .malta_label, .malta_hover, .netherlands_label, .the_netherlands_hover, .norway_label, .norway_hover, .poland_label, .poland_hover, .portugal_label, .portugal_hover, .slovak_republic_label, .slovak_republic_hover, .romania_label, .romania_hover, .spain_label, .spain_hover, .sweden_label, .sweden_hover, .switzerland_label, .switzerland_hover, .united_kingdom_label, .united_kingdom_hover").click(function () {
		$("#Slovenia_Stats").hide();
		$(".slovenia_hover").css("opacity","0").css("filter","alpha(opacity=0)");
	});
	
	
	});
	
function Slov () {
	$("#Slovenia_Stats").show();
	};








function SlovrStat () {
	$("#Slovak_Republic_Stats").hide();	
	$(".slovak_republic_hover").css("opacity","0").css("filter","alpha(opacity=0)");
	$(".slovak_republic_label").css("color","#3fa4c2");
};
	
$(document).ready(function() {
	$("#Slovak_Republic_Stats").hide();
	
	$(".slovak_republic_label, .slovak_republic_hover").hover(function () {
		$(".slovak_republic_hover").css("opacity","100").css("filter","alpha(opacity=100)");
		$(".slovak_republic_label").css("color","#0d2f44");
	});
	
	$(".slovak_republic_label, .slovak_republic_hover").mouseleave(function () {
		if ( $("#Slovak_Republic_Stats").css('display') == 'table') {
			$(".slovak_republic_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
		
		else if ( $("#Slovak_Republic_Stats").css('display') == 'block') {
			$(".slovak_republic_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
			
		else {
			$(".slovak_republic_hover").css("opacity","0").css("filter","alpha(opacity=0)");
			$(".slovak_republic_label").css("color","#3fa4c2");
			}	
	});
	
	$(".slovak_republic_label").click(function () {
		$("#Slovak_Republic_Stats").show();
	});
	
	
	$(".austria_label, .austria_hover, .belgium_label, .belgium_hover, .bulgaria_label, .bulgaria_hover, .croatia_label, .croatia_hover, .cyprus_label, .cyprus_hover, .czech_republic_label, .czech_republic_hover, .denmark_label, .denmark_hover, .estonia_label, .estonia_hover, .finland_label, .finland_hover, .france_label, .france_hover, .germany_label, .germany_hover, .greece_label, .greece_hover, .hungary_label, .hungary_hover, .iceland_label, .iceland_hover, .ireland_label, .ireland_hover, .italy_label, .italy_hover, .latvia_label, .latvia_hover, .lithuania_label, .lithuania_hover, .luxembourg_label, .luxembourg_hover, .malta_label, .malta_hover, .netherlands_label, .the_netherlands_hover, .norway_label, .norway_hover, .poland_label, .poland_hover, .portugal_label, .portugal_hover, .slovenia_label, .slovenia_hover, .romania_label, .romania_hover, .spain_label, .spain_hover, .sweden_label, .sweden_hover, .switzerland_label, .switzerland_hover, .united_kingdom_label, .united_kingdom_hover").click(function () {
		$("#Slovak_Republic_Stats").hide();
		$(".slovak_republic_hover").css("opacity","0").css("filter","alpha(opacity=0)");
		$(".slovak_republic_label").css("color","#3fa4c2");
	});
	
	
	});
	
function Slovr () {
	$("#Slovak_Republic_Stats").show();
	};








function SpaStat () {
	$("#Spain_Stats").hide();	
	$(".spain_hover").css("opacity","0").css("filter","alpha(opacity=0)");
};
	
$(document).ready(function() {
	$("#Spain_Stats").hide();
	
	$(".spain_label, .spain_hover").hover(function () {
		$(".spain_hover").css("opacity","100").css("filter","alpha(opacity=100)");
	});
	
	$(".spain_label, .spain_hover").mouseleave(function () {
		if ( $("#Spain_Stats").css('display') == 'table') {
			$(".spain_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
		
		else if ( $("#Spain_Stats").css('display') == 'block') {
			$(".spain_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
			
		else {
			$(".spain_hover").css("opacity","0").css("filter","alpha(opacity=0)");
			}	
	});
	
	$(".spain_label").click(function () {
		$("#Spain_Stats").show();
	});
	
	
	$(".austria_label, .austria_hover, .belgium_label, .belgium_hover, .bulgaria_label, .bulgaria_hover, .croatia_label, .croatia_hover, .cyprus_label, .cyprus_hover, .czech_republic_label, .czech_republic_hover, .denmark_label, .denmark_hover, .estonia_label, .estonia_hover, .finland_label, .finland_hover, .france_label, .france_hover, .germany_label, .germany_hover, .greece_label, .greece_hover, .hungary_label, .hungary_hover, .iceland_label, .iceland_hover, .ireland_label, .ireland_hover, .italy_label, .italy_hover, .latvia_label, .latvia_hover, .lithuania_label, .lithuania_hover, .luxembourg_label, .luxembourg_hover, .malta_label, .malta_hover, .netherlands_label, .the_netherlands_hover, .norway_label, .norway_hover, .poland_label, .poland_hover, .portugal_label, .portugal_hover, .slovenia_label, .slovenia_hover, .romania_label, .romania_hover, .slovak_republic_label, .slovak_republic_hover, .sweden_label, .sweden_hover, .switzerland_label, .switzerland_hover, .united_kingdom_label, .united_kingdom_hover").click(function () {
		$("#Spain_Stats").hide();
		$(".spain_hover").css("opacity","0").css("filter","alpha(opacity=0)");
	});
	
	
	});
	
function Spa () {
	$("#Spain_Stats").show();
	};






function SweStat () {
	$("#Sweden_Stats").hide();	
	$(".sweden_hover").css("opacity","0").css("filter","alpha(opacity=0)");
};
	
$(document).ready(function() {
	$("#Sweden_Stats").hide();
	
	$(".sweden_label, .sweden_hover").hover(function () {
		$(".sweden_hover").css("opacity","100").css("filter","alpha(opacity=100)");
	});
	
	$(".sweden_label, .sweden_hover").mouseleave(function () {
		if ( $("#Sweden_Stats").css('display') == 'table') {
			$(".sweden_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
		
		else if ( $("#Sweden_Stats").css('display') == 'block') {
			$(".sweden_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
			
		else {
			$(".sweden_hover").css("opacity","0").css("filter","alpha(opacity=0)");
			}	
	});
	
	$(".sweden_label").click(function () {
		$("#Sweden_Stats").show();
	});
	
	$(".austria_label, .austria_hover, .belgium_label, .belgium_hover, .bulgaria_label, .bulgaria_hover, .croatia_label, .croatia_hover, .cyprus_label, .cyprus_hover, .czech_republic_label, .czech_republic_hover, .denmark_label, .denmark_hover, .estonia_label, .estonia_hover, .finland_label, .finland_hover, .france_label, .france_hover, .germany_label, .germany_hover, .greece_label, .greece_hover, .hungary_label, .hungary_hover, .iceland_label, .iceland_hover, .ireland_label, .ireland_hover, .italy_label, .italy_hover, .latvia_label, .latvia_hover, .lithuania_label, .lithuania_hover, .luxembourg_label, .luxembourg_hover, .malta_label, .malta_hover, .netherlands_label, .the_netherlands_hover, .norway_label, .norway_hover, .poland_label, .poland_hover, .portugal_label, .portugal_hover, .slovenia_label, .slovenia_hover, .romania_label, .romania_hover, .slovak_republic_label, .slovak_republic_hover, .spain_label, .spain_hover, .switzerland_label, .switzerland_hover, .united_kingdom_label, .united_kingdom_hover").click(function () {
		$("#Sweden_Stats").hide();
		$(".sweden_hover").css("opacity","0").css("filter","alpha(opacity=0)");
	});
	
	});
	
function Swe () {
	$("#Sweden_Stats").show();
	};






function SwiStat () {
	$("#Switzerland_Stats").hide();	
	$(".switzerland_hover").css("opacity","0").css("filter","alpha(opacity=0)");
};
	
$(document).ready(function() {
	$("#Switzerland_Stats").hide();
	
	$(".switzerland_label, .switzerland_hover").hover(function () {
		$(".switzerland_hover").css("opacity","100").css("filter","alpha(opacity=100)");
	});
	
	$(".switzerland_label, .switzerland_hover").mouseleave(function () {
		if ( $("#Switzerland_Stats").css('display') == 'table') {
			$(".switzerland_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
		
		else if ( $("#Switzerland_Stats").css('display') == 'block') {
			$(".switzerland_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
			
		else {
			$(".switzerland_hover").css("opacity","0").css("filter","alpha(opacity=0)");
			}	
	});
	
	$(".switzerland_label").click(function () {
		$("#Switzerland_Stats").show();
	});
	
	$(".austria_label, .austria_hover, .belgium_label, .belgium_hover, .bulgaria_label, .bulgaria_hover, .croatia_label, .croatia_hover, .cyprus_label, .cyprus_hover, .czech_republic_label, .czech_republic_hover, .denmark_label, .denmark_hover, .estonia_label, .estonia_hover, .finland_label, .finland_hover, .france_label, .france_hover, .germany_label, .germany_hover, .greece_label, .greece_hover, .hungary_label, .hungary_hover, .iceland_label, .iceland_hover, .ireland_label, .ireland_hover, .italy_label, .italy_hover, .latvia_label, .latvia_hover, .lithuania_label, .lithuania_hover, .luxembourg_label, .luxembourg_hover, .malta_label, .malta_hover, .netherlands_label, .the_netherlands_hover, .norway_label, .norway_hover, .poland_label, .poland_hover, .portugal_label, .portugal_hover, .slovenia_label, .slovenia_hover, .romania_label, .romania_hover, .slovak_republic_label, .slovak_republic_hover, .spain_label, .spain_hover, .sweden_label, .sweden_hover, .united_kingdom_label, .united_kingdom_hover").click(function () {
		$("#Switzerland_Stats").hide();
		$(".switzerland_hover").css("opacity","0").css("filter","alpha(opacity=0)");
	});
	
	});
	
function Swi () {
	$("#Switzerland_Stats").show();
	};





function UniStat () {
	$("#United_Kingdom_Stats").hide();	
	$(".united_kingdom_hover").css("opacity","0").css("filter","alpha(opacity=0)");
	$(".united_kingdom_label").css("color","#2078ba");
};
	
$(document).ready(function() {
	$("#United_Kingdom_Stats").hide();
	
	$(".united_kingdom_label, .united_kingdom_hover").hover(function () {
		$(".united_kingdom_hover").css("opacity","100").css("filter","alpha(opacity=100)");
		$(".united_kingdom_label").css("color","#0d2f44");
	});
	
	$(".united_kingdom_label, .united_kingdom_hover").mouseleave(function () {
		if ( $("#United_Kingdom_Stats").css('display') == 'table') {
			$(".united_kingdom_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
		
		else if ( $("#United_Kingdom_Stats").css('display') == 'block') {
			$(".united_kingdom_hover").css("opacity","100").css("filter","alpha(opacity=100)");}
			
		else {
			$(".united_kingdom_hover").css("opacity","0").css("filter","alpha(opacity=0)");
			$(".united_kingdom_label").css("color","#2078ba");
			}	
	});
	
	$(".united_kingdom_label").click(function () {
		$("#United_Kingdom_Stats").show();
	});
	
	
	$(".austria_label, .austria_hover, .belgium_label, .belgium_hover, .bulgaria_label, .bulgaria_hover, .croatia_label, .croatia_hover, .cyprus_label, .cyprus_hover, .czech_republic_label, .czech_republic_hover, .denmark_label, .denmark_hover, .estonia_label, .estonia_hover, .finland_label, .finland_hover, .france_label, .france_hover, .germany_label, .germany_hover, .greece_label, .greece_hover, .hungary_label, .hungary_hover, .iceland_label, .iceland_hover, .ireland_label, .ireland_hover, .italy_label, .italy_hover, .latvia_label, .latvia_hover, .lithuania_label, .lithuania_hover, .luxembourg_label, .luxembourg_hover, .malta_label, .malta_hover, .netherlands_label, .the_netherlands_hover, .norway_label, .norway_hover, .poland_label, .poland_hover, .portugal_label, .portugal_hover, .slovenia_label, .slovenia_hover, .romania_label, .romania_hover, .slovak_republic_label, .slovak_republic_hover, .spain_label, .spain_hover, .sweden_label, .sweden_hover, .switzerland_label, .switzerland_hover").click(function () {
		$("#United_Kingdom_Stats").hide();
		$(".united_kingdom_hover").css("opacity","0").css("filter","alpha(opacity=0)");
		$(".united_kingdom_label").css("color","#2078ba");
	});
	
	
	});
	
function Uni () {
	$("#United_Kingdom_Stats").show();
	};



	
	




	

