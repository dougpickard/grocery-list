$(document).ready(function(){

	$(".add-item").on("click",".add-item_btn",function(event){
		event.preventDefault();
		var itemToAdd = $(this).parent().children(".add-item_input").val();
		if (itemToAdd !=""){
			console.log(itemToAdd);
			$(".what-to-buy_list").prepend(
				"<li class=\"sl-item\"><span class=\"side check\">&#x2713;</span><span class=\"middle\">"+itemToAdd+"</span><span class=\"side ex\">&#x2717;</span></li>");
			$(this).parent().children(".add-item_input").val("");
		}
		else {
			alert("You haven't added anything. Try again.");
		}
	});

	$(".what-to-buy_list").on("click",".sl-item > .check",function(){
		purchasedItem = $(this).parent(".sl-item");
		purchasedItemName = purchasedItem.children(".middle").html();
		$(".what-i-have_list").append(
			"<li class=\"sl-item\"><span class=\"side back-up\">&#x21e1;</span><span class=\"middle\">"
				+purchasedItemName+"</span><span class=\"side ex\">&#x2717;</span></li>");
		purchasedItem.remove();
	}).on("mouseenter",".sl-item",function(){
		$(this).children(".side").css("color","black");	

	});

	$(".what-i-have_list").on("click",".sl-item > .back-up", function(){
		reinstatedItem = $(this).parent(".sl-item");
		reinstatedItemName = reinstatedItem.children(".middle").html();
		$(".what-to-buy_list").prepend(
			"<li class=\"sl-item\"><span class=\"side check\">&#x2713;</span><span class=\"middle\">"
			+reinstatedItemName+"</span><span class=\"side ex\">&#x2717;</span></li>");
		reinstatedItem.remove();
		}).on("mouseenter",".sl-item",function(){
			$(this).children(".side").css("color","#888");
		})		



	$(".list")
	.on("mouseleave",".sl-item",function(){
		$(this).children(".side").css("color","white");

	})

	.on("click",".sl-item > .ex", function(){
		deletedItem = $(this).parent(".sl-item");
		deletedItem.remove();
	});

});	