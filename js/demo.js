	// Setup
	$("li").addClass("unselected");

	/* Basic Selectors */
	// $("li").addClass("selected");
	// alert($("*").length);
	// alert($('li').length);
	$(".tv").addClass("selected");
	// $(".cartoons").addClass("selected");
	// $("#item-2").addClass("selected");

	// for (var i=0; i<=3; i++) {
	// 	$("#item-"+i).addClass("selected"); // add the first three
	// 	var x = 11+i; // start with #11
	// 	$("#item-"+x).addClass("selected"); // add the last three		
	// }

	/* Multiple Selectors */
	// $(".cartoons, .games").addClass("selected");

	/* Filters */
	// $("li:contains('Donald')").addClass("selected");
	// $("li:first").addClass("selected");
	// $("li:nth-child(even)").addClass("selected");
	// $("li:nth-child(3)").addClass("selected"); // --> item-3,13 third each list 1 based
	// $("li:eq(3)").addClass("selected"); // --> item-4 zero based index ex arr[3]
	// $("li:nth-child(3n)").addClass("selected");
	// console.log( $("li:hidden") ); 

	/* Attributes */
	// $("li[class^='c']").addClass("selected"); // --> cartoons

	/* Transversing the DOM --> http://goo.gl/93eN4 */
	// $("li").filter("[class^='c']").addClass("selected"); // --> cartoons
	// $("li").filter(":lt(7)").addClass("selected");
	
	// var item6 = $("#item-5").next().addClass("selected"); //-- item-6, cached
	// $("#item-7").add(item6).addClass("selected"); //-- item-6,7
	
	/* This & Each */
	// $("li:last").addClass("selected") // --> item-13 NOT item-10
	// $("ul").each(function(){
	// 	$(this).find("li:last").addClass("selected"); // item-10, item-13
	// }) 

	// Context --> http://goo.gl/f59TI
	// var lists = $("ul:first")[0]; //Context works best on nodes! otherwise its find()
	// $(":not(.tv)", lists).addClass("selected");



	// Ajax
	(function(){
		$(document).ready(function(){
			if(location.href.match(/#ajax/)){
				$('body > h1').first().html(function(i, oldHtml){
					return 'ajax <span style="text-decoration:line-through;">' + oldHtml + '</span>';
				});
			}
		});
	})();

	/* $.get */
	// $.get('ajax/tyrion.html', function(data){
	// 	$("ul:first li").first().before(data);
	// });
	// var getTyrionAjaxRequest = $.get('ajax/tyrion.html');
	// getTyrionAjaxRequest.done(function(data){
	// 	$("ul:first li").first().before(data);
	// });


	// // $.post
	// $('#item-1').on('click', function(){
	// 	var item = $(this);

	// 	// IMPORTANT PART
	// 	$.post('ajax/ajax.js', {"someData": "I'm sending"}, function(){
	// 		item.addClass('selected');
	// 	});


	// });

	// // $.getScript
	// $('#item-2').on('click', function(){


	// 	$.getScript('ajax/a_script.js');


	// });

	// // $.getJSON

	// $('#item-3').on('click', function(){
	// 	$(this).toggleClass('selected unselected');
	// 	var jqueryAtomJSONPUrl="http://query.yahooapis.com/v1/public/yql?q=select%20title%20from%20atom%20where%20url%3D%22https%3A%2F%2Fgithub.com%2Fjquery%2Fjquery%2Fcommits%2Fmaster.atom%22&format=json&diagnostics=true"

	// 	$.getJSON(jqueryAtomJSONPUrl, function(data){
	// 		console.log(data);
	// 		$.each(data.query.results.entry, function(){
	// 			$('body').append('<p>' + this.title + '</p>');
	// 		});
	// 	});

	// });

	// // Failed get
	// $('#item-4').on('click', function(){

	// 	var failedAjaxRequest = $.get('ajax/non_existente_file');

	// 	failedAjaxRequest.error(function(jqXhr, error, msg){
	// 		console.log("Request failed");
	// 	});


	// 	// There's always more than one way to do it - fail and error are the same
	// 	failedAjaxRequest.fail(function(jqXhr, error, msg){
	// 		console.log('Also caught with .fail, not just .error');
	// 	});


	// 	// If you want to do something no matter if there's a success or failure, use always or complete
	// 	failedAjaxRequest.complete(function(){
	// 		console.log('complete');
	// 	});

	// });

	// .success == .done, .error == .fail, .always == .complete

