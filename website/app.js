// Personal API Key for OpenWeatherMap API : e3bb03fd1a1f1156202faf2c5e304968

/* Global Variables */
let baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
const myAPIKey = "&appid=e3bb03fd1a1f1156202faf2c5e304968&units=metric";
const server = "http://localhost:8000";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getDate()+'.'+ (d.getMonth()+1) +'.'+ d.getFullYear();

/* >> HELPER FUNCTIONS */

// 1-Function to GET Web API Data
const getData = async (url, zip , api) => {

    const res = await fetch(url+zip+api);
    try {
      const weatherData = await res.json();
      console.log(weatherData);
      return weatherData;
    }
    catch(error) {
      console.log("error", error);
    }
};

// 2-Function to POST data
const postData = async ( url = '', data = {})=>{
  console.log(data);
  const response = await fetch(url,{
    method: 'POST',
    credentials: 'same-origin',
    headers: {'Content-Type': 'application/json'},
    // Body data type must match "Content-Type" header
    body: JSON.stringify(data)
  });
  try {
    const newData = await response.json();
    console.log("You saved:",newData);
    return newData;
  }
  catch(error) {
    console.log("error", error);
  }
};

// 3-Function to update the UI
const updateUI = async (url = '') => {
  const request = await fetch(url);
  try{
    const allData = await request.json();
    console.log(allData);
    document.getElementById('date').innerHTML = `Today's Date is:
     ${allData.date}`;
    document.getElementById('temp').innerHTML = `Temperature is:
     ${allData.temperature} degrees.`;
    document.getElementById('content').innerHTML = `Your entry is:
     ${allData.userResponse}`;
    }
    catch(error) {
      console.log("error", error);
    }
};

/* >> MAIN FUNCTION: Function called by the event listener */

function executeAnAction(e){
    let userZipCode = document.getElementById('zip').value;
    let userEnteredFeelings = document.getElementById('feelings').value;
    getData(baseURL, userZipCode, myAPIKey);
    getData(baseURL, userZipCode, myAPIKey)
    .then((data) => {
        if (data) {
            // destructuring from returned data
            const { main: { temp } } = data;
            const postedData = { temp: Math.round(temp), newDate, userEnteredFeelings};
            postData( server+"/add", { temperature:postedData.temp, date:postedData.newDate, userResponse:postedData.userEnteredFeelings});
        }
    })
    .then(
      updateUI( server+'/all' )
    );
};

/* Event listener to execute the main function when an HTML DOM element is clicked */
const myButton = document.getElementById('generate');
myButton.addEventListener('click', executeAnAction);
