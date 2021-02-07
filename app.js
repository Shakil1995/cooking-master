const apiUrl='https://www.themealdb.com/api/json/v1/1/search.php?f=a';
fetch(apiUrl)
.then(res => res.json())
.then(data =>console.log(data));