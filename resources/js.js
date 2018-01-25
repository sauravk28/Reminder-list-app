							// To strike through the to-do we click


/* Remember that the on listner is prefered over the click and many more
	as it creates listners to the elements that are yet to come
*/

/* Further 2nd argument below is the element on which the on method 
	will work..*/

$("ul").on("click" , "li",function(){
	
	$(this).toggleClass("completed");
});

							// For deleting a to-do


/* Here below event is a object that is passed which consists of the info.
   about the event that is clicked, we can use with any name...*/
$("ul").on("click" , "span",function(event){

	/* Here below we are stopping the propagation of child to parent event
	so that it does not propagate further to parent.. this is known as 
	"bubbling" */
	(event).stopPropagation();
	// Here this refers to <span>
	$(this).parent().fadeOut(200,function()
		{	
			/* Remember here this refers to the element we are applying
			   fadeOut method to.. i.e <li>
			 */
			 /* remove method removes that element which is selected
			 permanently*/
			$(this).remove();
		});
});


							// For adding a to-do

$("input").on("keypress",function(event){
	if(event.which===13)
	{
		var text=$(this).val();
		$("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i> </span> "+ text + "</li>");
		// To make the input field empty
		$(this).val("");
		
	}
});


							// Top plus button

$(".fa-plus").on("click",function(){
	$("input").fadeToggle(200);
});