
 array = [2,10,18,26,34];

 for(i = 0; i < array.length; i++) {
   if(response.list[array[i]].weather[0].main === "Clouds") {
     $('.day1Icon').removeClass('fas fa-sun').addClass(weatherIcons[0]);
   } else if(response.list[array[i]].weather[0].main === "Rain") {
     $('.day1Icon').removeClass('fas fa-sun').addClass(weatherIcons[1]);
   } else if(response.list[array[i]].weather[0].main === "Clear") {
     $('.day1Icon').removeClass('fas fa-sun').addClass(weatherIcons[2]);
   } else if(response.list[array[i]].weather[0].main === "Snow") {
     $('.day1Icon').removeClass('fas fa-sun').addClass(weatherIcons[3]);
   } else {
     $('.day1Icon').removeClass('fas fa-sun').addClass(weatherIcons[4]);
   }

 }