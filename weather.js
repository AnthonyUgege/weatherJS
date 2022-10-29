class Weather {
  constructor(city) {
    this.apiKey = 'd0352772a0c84f90ad9132323220706';
    this.city = city;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}&aqi=yes`);

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(city) {
    this.city = city;
  }
}
