// SERVICES
weatherApp.service('cityService', function() {

    this.city = "New York, NY";

});

weatherApp.service('weatherService', ['$resource', function($resource) {

    this.GetWeather = function(city, days) {
        var weatherAPI = $resource("https://api.openweathermap.org/data/2.5/forecast/daily", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});

        return weatherResult = weatherAPI.get({ q: city, cnt: days, APPID: 'fce120f1c5f300d199b9f80a54754100' });
    };

}]);
