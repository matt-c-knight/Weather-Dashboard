var apiKey= "&APPID=00854e14367397676b0c771a3b319d01";
// var cityInput = $('#city-input').val();
// console.log(cityInput)
//url: https://openweathermap.org/api
$("#button-addon2").on("click", function() {
    var cityInput = $('#city-input').val();
    console.log(cityInput)
    // Storing our giphy API URL for a random cat image
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityInput + apiKey;

    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })

    // After the data from the AJAX request comes back
      .then(function(response) {
        console.log(queryURL)
        console.log(response.name)
        $(".search-city").text(response.name);
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        tempF = tempF.toFixed(2);
        $(".temp").text(tempF);
        // $(".temp").text(response.main.temp);
        $(".wind").text(response.wind.speed);
        
      
      });

      
  });