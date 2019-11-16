$( document ).ready(function() {

var apiKey= "&APPID=00854e14367397676b0c771a3b319d01";
var cityInput;
var sideInput;
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
var weatherIcons = ["fas fa-cloud", "fas fa-cloud-showers-heavy", "fas fa-sun", "far fa-snowflake", "fas fa-cloud-sun"]
var long;
var lat;
var uvQueryURL;
var array;
var icon;
// var citiesSearched = [];
var citiesArray = [];
console.log(citiesArray[0])
$("#button-addon2").on("click", function() {
    cityInput = $('#city-input').val();
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityInput + apiKey;
    citiesSearched = {
      city: cityInput
    }

    citiesArray.push(citiesSearched);
    citiesArray = citiesArray.concat(JSON.parse(localStorage.getItem('cities') || '[]'));
    window.localStorage.setItem('cities', JSON.stringify(citiesArray));
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        $(".search-city").text(response.name);
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        tempF = tempF.toFixed(2);
        $(".temp").text(tempF);
        console.log(response)
        $('.humidity').text(response.main.humidity);
        $(".wind").text(response.wind.speed);
       
        });
        var forecast = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityInput + apiKey + "&count=10";
            $.ajax({
              url: forecast,
              method: "GET"
            }).then(function(response) { 
               
                  var day1 = (response.list[2].main.temp_max - 273.15) * 1.80 + 32; 
                  day1 = day1.toFixed(2);
                  $('.day1').text(day1);
                  var day2 = (response.list[10].main.temp_max - 273.15) * 1.80 + 32;
                  day2 = day2.toFixed(2); 
                  $('.day2').text(day2);
                  var day3 = (response.list[18].main.temp_max - 273.15) * 1.80 + 32;
                  day3 = day3.toFixed(2);
                  $('.day3').text(day3);
                  var day4 = (response.list[26].main.temp_max - 273.15) * 1.80 + 32;
                  day4 = day4.toFixed(2); 
                  $('.day4').text(day4);
                  var day5 = (response.list[34].main.temp_max - 273.15) * 1.80 + 32;
                  day5 = day5.toFixed(2);
                  $('.day5').text(day5);
                 
                  array = [2,10,18,26,34];
                  icon = ['day1Icon','day2Icon','day3Icon','day4Icon','day5Icon']
                 
                                   for(i = 0; i < array.length; i++) {
                                     if(response.list[array[i]].weather[0].main === "Clouds") {
                                       $('.' + icon[i]).removeClass('fas fa-sun').addClass(weatherIcons[0]);
                                     } else if(response.list[array[i]].weather[0].main === "Rain") {
                                       $('.' + icon[i]).removeClass('fas fa-sun').addClass(weatherIcons[1]);
                                     } else if(response.list[array[i]].weather[0].main === "Clear") {
                                       $('.' + icon[i]).removeClass('fas fa-sun').addClass(weatherIcons[2]);
                                     } else if(response.list[array[i]].weather[0].main === "Snow") {
                                       $('.' + icon[i]).removeClass('fas fa-sun').addClass(weatherIcons[3]);
                                     } else {
                                       $('.' + icon[i]).removeClass('fas fa-sun').addClass(weatherIcons[4]);
                                     }
                 
                                   }
                
                
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
      $('.humidity').text(response.main.humidity);
      long = response.coord.lon;
      lat =  response.coord.lat;
      var uvQueryURL = "http://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + lat + "&lon=" + long + apiKey;
      citiesSearched = {
        city: cityInput
      }
  
      citiesArray.push(citiesSearched);
      citiesArray = citiesArray.concat(JSON.parse(localStorage.getItem('cities') || '[]'));
      window.localStorage.setItem('cities', JSON.stringify(citiesArray));
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
                
            
                  var day1 = (response.list[2].main.temp_max - 273.15) * 1.80 + 32; 
                  day1 = day1.toFixed(2);
                  $('.day1').text(day1);
                  var day2 = (response.list[10].main.temp_max - 273.15) * 1.80 + 32;
                  day2 = day2.toFixed(2); 
                  $('.day2').text(day2);
                  var day3 = (response.list[18].main.temp_max - 273.15) * 1.80 + 32;
                  day3 = day3.toFixed(2);
                  $('.day3').text(day3);
                  var day4 = (response.list[26].main.temp_max - 273.15) * 1.80 + 32;
                  day4 = day4.toFixed(2); 
                  $('.day4').text(day4);
                  var day5 = (response.list[34].main.temp_max - 273.15) * 1.80 + 32;
                  day5 = day5.toFixed(2);
                  $('.day5').text(day5);
                 
                  array = [2,10,18,26,34];
                  icon = ['day1Icon','day2Icon','day3Icon','day4Icon','day5Icon']
                 
                                   for(i = 0; i < array.length; i++) {
                                     if(response.list[array[i]].weather[0].main === "Clouds") {
                                       $('.' + icon[i]).removeClass('fas fa-sun').addClass(weatherIcons[0]);
                                     } else if(response.list[array[i]].weather[0].main === "Rain") {
                                       $('.' + icon[i]).removeClass('fas fa-sun').addClass(weatherIcons[1]);
                                     } else if(response.list[array[i]].weather[0].main === "Clear") {
                                       $('.' + icon[i]).removeClass('fas fa-sun').addClass(weatherIcons[2]);
                                     } else if(response.list[array[i]].weather[0].main === "Snow") {
                                       $('.' + icon[i]).removeClass('fas fa-sun').addClass(weatherIcons[3]);
                                     } else {
                                       $('.' + icon[i]).removeClass('fas fa-sun').addClass(weatherIcons[4]);
                                     }
                 
                                   }
                

              
                });
               
      
      });
     
    });
  });


