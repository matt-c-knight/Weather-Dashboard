# Weather_Dashboard

 array = [2,10,18,26,34];
 icon = ['day1Icon','day2Icon','day3Icon','day4Icon','day5Icon']

                  for(i = 0; i < array.length; i++) {
                    if(response.list[array[i]].weather[0].main === "Clouds") {
                      $('.' + icon[i].removeClass('fas fa-sun').addClass(weatherIcons[0]);
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


                    times = {
        time: nineVal,
        input: schedule
    }
    scheduleArray.push(times);
    scheduleArray = scheduleArray.concat(JSON.parse(localStorage.getItem('schedule') || '[]'));
    window.localStorage.setItem('schedule', JSON.stringify(scheduleArray));
    })

 
    citySeached = {
      city = cityInput;
    }

    citiesArray.push(citiesSearched);
    citiesArray = citiesArray.concat(JSON.parse(localStorage.getItem('cities') || '[]'));
    window.localStorage.setItem('schedule', JSON.stringify(citiesArray));