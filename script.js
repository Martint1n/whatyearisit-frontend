// const fetchYear = function (){
fetch("https://year-vercel.vercel.app/year")
.then(response => response.json())
.then(data => {
    document.querySelector("#year").textContent = data.Date
})
// }

// fetchYear()