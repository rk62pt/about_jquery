$.fn.extend({
	popup:function(openOrClose,option){
		var _clientWidth = document.body.clientWidth;
		//var _clientHeight = document.body.clientHeight;
		var _clientHeight = window.screen.availHeight;
    var _width="600";
		var _height="300";
		var _title="test";
		var _id = this[0].id;
		console.log(_clientHeight);
		console.log(_height);
		console.log((_clientHeight-_height)/2);
		var _mask = $("<div></div>").attr("id",_id+"_mask").addClass("pop-mask");
		var _body = $("<div></div>")
			   .attr("id",_id+"_pop_body")
			   .css("width",_width+"px")
			   .css("height",_height+"px")
			   .css("left",(_clientWidth-_width)/2+"px")
			   //.css("top",(_clientHeight-_height)/3+"px")
			   .css("top","-"+_height+"px")
				 .addClass("pop-body");
		var _header = $("<div></div>")
		   .attr("id",_id+"_pop_header")
		   .css("height","30px")
		   .css("background-color","#e27676")
		   .css("color","#fff")
		   .css("text-align","center")
		   .css("padding-top","5px")
		   .addClass("pop-header")
		   .html(_title);
		var _content = $("<div></div>")
					   .attr("id",_id+"_pop_content")
					   .html("hello!!");
		_body.append(_header)
			 .append(_content);
		_mask.append(_body);
		//this.addClass("pop-mask");
		if("open"===openOrClose){
			this.after(_mask);
			var _sliderIn = (_clientHeight-_height)/3+"px";
			$("#"+_id+"_pop_body").animate({top:_sliderIn},400);//.addClass("open");
		}else if("close"===openOrClose){
			var _sliderOut = "-"+_height+"px";
			$("#"+_id+"_pop_body").animate({top:_sliderOut},400,function(){
				$("#"+_id+"_mask").remove();
			});
		}
		_mask.on("click",function(){
			var _sliderOut = "-"+_height+"px";
			$("#"+_id+"_pop_body").animate({top:_sliderOut},400,function(){
				$("#"+_id+"_mask").remove();
			});
			//$("#"+_id+"_mask").remove();
		});
		return this;
	}
});
