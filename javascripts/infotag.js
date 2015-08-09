$.fn.infotag = function(data){
  $this = this;
  data.forEach(function(obj){

    var divContent = $("<div>").addClass("infotag");
    var label = $("<label>").html(obj.title);
    var div = $("<div>").append(label);
    var descriptDiv = $("<div>").html(obj.descriptionFilterHtml);

    var dateDiv = $("<div>").addClass("infotag-date").html(obj.startDate+"~"+obj.endDate);
    divContent.append(div).append(dateDiv).append(descriptDiv);

    $this.append(divContent);
  });
  return this;

}
