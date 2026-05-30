const API_key="API_KEY"

async function weatherFetch(city){
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`;
    try{
        let response = await fetch(url);
        if(!response.ok){
            throw new Error("failed")
        }
        let data = await response.json();
        return data;
    }
    catch(err){
        console.log(err);
        throw err;
    }
}
