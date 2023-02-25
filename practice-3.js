// const countryData = document.getElementById('country-data');
// const showCuntry = async () =>{
//    const url = "https://restcountries.com/v3.1/all";
//     let responce = await fetch(url),
//      data = await responce.json();
//         displayData(data)
// }
// const showData = async (country) => {
//     const url = `https://restcountries.com/v3.1/name/${country}`;
//     let responce = await fetch(url),
//     data = await responce.json();
//     console.log(data[0])
//     const languages = ()=>{
//     // console.log(data[0].languages)   
//     for(let leng in data[0].languages){
//         return  data[0].languages[leng]
//     } 
//     }
//      const showData = document.getElementById('show-data');
//      showData.innerHTML =`
//      <figure><img src="${data[0].flags.png}" alt="Shoes" /></figure>
//      <div class="card-body">
//        <h2 class="card-title">Name: ${data[0].name.common}</h2>
//        <h2>Region:${data[0].region}</h2>
//        <h2>Capital:${data[0].capital[0]}</h2>
//        <h2>Languages: ${languages()}</h2>
//        <div class="card-actions justify-end">
//        </div>
//      </div>
//      `
// }  
// const displayData = (data) =>{
//     // console.log(data)
//     data.forEach(countris => {
//         const li = document.createElement('li');
//         li.innerHTML = `
//         <a onclick="showData('${countris.name.common}')">${countris.name.common}</a>
//         `
//         countryData.appendChild(li)
//     });

// }
// showCuntry()




const countryData = document.getElementById('country-data');
const showTheData = async () => {
    const url = "https://restcountries.com/v3.1/all"
    let res = await fetch(url),
        data = await res.json()
    displayData(data)
}
const countryName = async (country) => {
    const url = `https://restcountries.com/v3.1/name/${country}`
    let res = await fetch(url),
        data = await res.json()
    // console.log(data[0].languages)
    const languages = () => {
        for (let leng in data[0].languages) {
            return data[0].languages[leng];
        }
    }

    const showData = document.getElementById('show-data');
    showData.innerHTML = `
    <figure><img src="${data[0].flags.png}" alt="Shoes" /></figure>
            <div class="card-body">
              <h2 class="card-title">${country}</h2>
               <p>Capital: ${data[0].capital[0]}</p>
               <p>Region: ${data[0].region}</p>
               <p>Languages: ${languages()}</p>
                <div class="card-actions justify-end">
               </div>
           </div>
    `
}
const displayData = (data) => {
    data.forEach(countris => {
        // console.log(countris.name.common)
        const li = document.createElement('li');
        li.innerHTML = `
        <a onclick="countryName('${countris.name.common}')">${countris.name.common}</a>
        `
        countryData.appendChild(li)
    });
}
showTheData()