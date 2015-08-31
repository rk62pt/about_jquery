$.fn.infotag = function(title,description,startDate,endDate){
  $this = this;
  var divContent = $("<div>").addClass("infotag");
  var label = $("<label>").html(title);
  var div = $("<div>").append(label);
  var descriptDiv = $("<div>").html(description);

  var dateDiv = $("<div>").addClass("infotag-date").html(startDate+"~"+endDate);
  divContent.append(div).append(dateDiv).append(descriptDiv);

  $this.append(divContent);
  return this;
}
