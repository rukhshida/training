

const temperatureField = document.querySelector(".weather1");
const cityField = document.querySelector(".weather2 p");
const dateField = document.querySelector(".weather2 span");
const iconField = document.querySelector(".weather3 img");
const weatherField =document.querySelector(".weather3 span");
const form = document.querySelector("form");
const input = document.querySelector(".searchField");


let target = "Kathmandu";

const fetchedData = async(target) =>{
    try{
        const res = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=88843b0e46fe4ae3b0b24718240408&q=${target}`

        );   

        const data = await res.json();
        const {current:{temp_c , condition:{text, icon}}, 
        location :{name, localtime},
    } = data;

    temperatureField.innerHTML = `${temp_c}&deg;c`;
    cityField.innerHTML = name;
    iconField.src = icon;
    weatherField.innerHTML = text;

    const exactTIme = localtime.split(" ")[1];
    const exactDate = localtime.split(" ")[0];

    const currentDay = new Date();
    let newDate = getTodaysDay(currentDay.getDay());

    dateField.innerHTML = `${exactTIme} ${exactDate}`;

    }catch (error) {
        console.log(error);
    }
};

fetchedData(target);
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    if(input.value.trim() === ""){
        alert("Please enter your location");
    }else{
        target = input.value;
        fetchedData(target);
    }
})
function getTodaysDay(num){
    switch(num){
        case 0 :
            return "Sunday";
        
        case 1 :
            return "Monday";

        case 2 :
            return "Tuesday";

        case 3 :
            return "Wednesday";  
        
        case 4 :
            return "Thursday";

        case 5 :
                return "Friday";  
                
        case 6 :
                return "Saturday";

        default :
            return "Invalid Day";
    }
}