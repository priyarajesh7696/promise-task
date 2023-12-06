const mainDiv = document.getElementById("mainDiv");
const getDetails = document.getElementById("getDetails");
const getDetails1 = document.getElementById("getDetails1");
const getDetails2 = document.getElementById("getDetails2");

getDetails.addEventListener("click", async () => {
  //!using the dog api to fetch the data from server.
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await res.json();

  console.log(data.message);
  const output = document.getElementById("api1");
  output.innerHTML = `<img src="${data.message}"height="300px" alt=" Random Dog Images" caption="Random Dog Image">`;
});
getDetails1.addEventListener("click", async () => {
  //!using the universities api to fetch the data from server.
  const res1 = await fetch(
    "http://universities.hipolabs.com/search?country=india"
  );
  const data1 = await res1.json();
  console.log(data1);
  for (let i = 0; i < data1.length; i++) {
    const output1 = document.getElementById("api1");
    output1.innerHTML = ` ${data1[i].country} <br>${data1[i].name}<br>${data1[i].web_pages}   ${data1[i].domains}`;
  }
});

getDetails2.addEventListener("click", async () => {
  //!using the joke api to fetch the data from server.
  const res2 = await fetch("https://official-joke-api.appspot.com/random_joke");
  const data2 = await res2.json();
  console.log(data2);
  const output2 = document.getElementById("api1");
  output2.innerHTML = `${data2.type} <br>  jokes ::  ${data2.setup} <br> punch ::${data2.punchline} <br>`;
});
