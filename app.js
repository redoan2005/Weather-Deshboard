const btn=document.getElementById("btn");

btn.addEventListener("click", async ()=>{
    const city=document.getElementById("input").value;
    try{
        const data=await weatherFetch(city);
        document.getElementById("result").innerText=
        `${data.name}:${data.main.temp}°C, ${data.weather[0].description}`
    }
    catch(err){
        document.getElementById("result").innerText="City is not found or server problem.😑";
    }
});
