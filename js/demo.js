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




