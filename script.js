var apiKey= "&APPID=00854e14367397676b0c771a3b319d01";
var cityInput;
var time = moment();
var tomorrow = moment().add('days', 1);
var tomorrow2 = moment().add('days', 2);
var tomorrow3 = moment().add('days', 3);
var tomorrow4 = moment().add('days', 4);
var tomorrow5 = moment().add('days', 5);
$(".current-date").text(time.format("(MM/DD/YYYY)"));
$(".day-1").text(tomorrow.format("(MM/DD/YYYY)"));
$(".day-2").text(tomorrow2.format("(MM/DD/YYYY)"));
$(".day-3").text(tomorrow3.format("(MM/DD/YYYY)"));
$(".day-4").text(tomorrow4.format("(MM/DD/YYYY)"));
$(".day-5").text(tomorrow5.format("(MM/DD/YYYY)"));
var long;
var lat;
var uvQueryURL;
$("#button-addon2").on("click", function() {
    cityInput = $('#city-input').val();
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityInput + apiKey;
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        $(".search-city").text(response.name);
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        tempF = tempF.toFixed(2);
        $(".temp").text(tempF);
        $(".wind").text(response.wind.speed);
        });
  });

  $(".city").on("click", function() {
    cityInput = $(this).data('name');
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityInput + apiKey;
    
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      $(".search-city").text(response.name);
      var tempF = (response.main.temp - 273.15) * 1.80 + 32;
      tempF = tempF.toFixed(2);
      $(".temp").text(tempF);
      $(".wind").text(response.wind.speed);
      long = response.coord.lon;
      lat =  response.coord.lat;
      var uvQueryURL = "http://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + lat + "&lon=" + long + apiKey;
      
        $.ajax({
          url: uvQueryURL,
          method: "GET"
          }) .then(function(response) {
            $(".uv").text(response[0].value)
            })
            var forecast = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityInput + apiKey + "&count=10";
            $.ajax({
              url: forecast,
              method: "GET"
            }).then(function(response) { 
              console.log(forecast)
              var day1 = (response.list[2].main.temp - 273.15) * 1.80 + 32; 
              day1 = day1.toFixed(2);
              $('.day1').text(day1);
              var day2 = (response.list[10].main.temp - 273.15) * 1.80 + 32;
              day2 = day2.toFixed(2); 
              $('.day2').text(day2);
              var day3 = (response.list[18].main.temp - 273.15) * 1.80 + 32;
              day3 = day3.toFixed(2);
              $('.day3').text(day3);
              var day4 = (response.list[26].main.temp - 273.15) * 1.80 + 32;
              day4 = day4.toFixed(2); 
              $('.day4').text(day4);
              var day5 = (response.list[34].main.temp - 273.15) * 1.80 + 32;
              day5 = day5.toFixed(2);
              $('.day5').text(day5);
          });
 
      
  });

});

 
