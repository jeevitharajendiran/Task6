var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all','true');
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    countryData.forEach(function (x) {
        console.log(x.name, x.capital, x.flag);
    })}