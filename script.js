fetch("https://year-vercel.vercel.app/year")
.then(response => response.json())
.then(data => console.log(data))