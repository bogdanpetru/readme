// Defining ReadMe API

var ReadMe = {


	getArticle : function ( no ){
		var content = document.getElementsByTagName("article");
		return content.length ? content[no] : false;
	},

	clone : function( nodeToClone ){
		return nodeToClone.cloneNode(true);
	},

	deleteBody : function( ){
		document.body.innerHTML = "";
	},


	/**
	 * createSelect creates an Select form element
	 * @param  [{array of objects}] options, options in the select element.
	 * @param  {["string"]} title - title of select element
	 * @return {[elementNode]} - returns a <label>Title<select>n*<options></elect></label> 
	 */
	createSelect : function(options, title){
		// var option = [];
		// [{value: "test", test},  ]
		var label = document.createElement("label");
			label.innerText = title;
		var select = document.createElement("select");
			select.name = title;
	
		options.forEach(function(item){
			var option = document.createElement("option");
				option.value = item.value;
				option.innerText = item.text;
			//attach option to select
				select.appendChild(option);
		});
		label.appendChild(select);
		return label;
	},

	createCheckbox : function(title){
		var label = document.createElement("label"),
			input = document.createElement("input");
			input.type = "checkbox";
			label.innerText = title;
			label.appendChild(input);
		return label;
	},


	/**
	 * Hides all Images
	 */
	hideImg : function (){
		var img = document.images;
		for(var i = 0 , len = img.length; i < len; i++){
			img[i].style.display = "none";
		}
	},

	/**
	 * Shows images hidden
	 */
	showImg : function (){
		var img = document.images;
		for(var i = 0 , len = img.length; i < len; i++){
			img[i].style.display = "inline";
		}
	}

};



(function(){

/*==========  Get the Article on the page  ==========*/
	var article = ReadMe.getArticle(0);
		clone = ReadMe.clone(article);
		clone.className = "article";

	// creating canvas 
	var canvas = document.createElement("div");
		canvas.appendChild(clone);
		canvas.className = "canvas";

	//delete body and deploy canvas
	ReadMe.deleteBody();

	//deploy canvas
		document.body.appendChild(canvas);


/*==========  Pick the background color -Drop Down-  ==========*/

	var options = [
		{value: "Light", text: "Light"},
		{value: "Dark", text: "Dark"},
		{value: "Grey", text: "Grey"}
	];


	// create form
	var menu = document.createElement("form");
		menu.id = "menu";
	

	// btn remove/show img
	var imgButton = ReadMe.createCheckbox("img");
	menu.appendChild(imgButton);
	imgButton.addEventListener("change", function(event){
		if( event.target.checked ){
			ReadMe.hideImg();
		} else {
			ReadMe.showImg();
		}
	});

	// btn b/w 
	var blackAndWhite = ReadMe.createCheckbox("b/w");
	menu.appendChild(blackAndWhite);


	// create select element
	var	selectElement = ReadMe.createSelect(options, "Color");
	menu.appendChild(selectElement);
	
	// deploy menu on screen
	document.body.appendChild(menu);

	//  deploy darken
	document.body.className = "darkBody";




	// EVENT Handlers




})();



