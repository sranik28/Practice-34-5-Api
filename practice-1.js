const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
        {
            name: {
                common: "John",
                fullName: ["John", "Doe"]
            },
            age: 32,
            isMale: false,
            address: {
                street: "13/A St Joseph",
                house: 10,
            },
        },
        {
            name: {
                common: "Humayoun",
                fullName: ["Humayoun", "Kabir"]
            },
            age: 33,
            isMale: false,
            address: {
                street: "13/A St Lucia",
                house: 11,
            },
        },
    ]
};
const displayData = ()=>{
    const praent = document.getElementById('data-show');
    praent.innerHTML = "";
    person.result.forEach(results => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="mx-10 fond-bold text-2xl mt-10">
                <h3 class="my-5">Person Name: ${results.name.common} </h1>
                <h3 class="my-3">Age: ${results.age}</h3>
                <h3 class="my-3">Street: ${results.address.street}</h3>
            </div>
        `
        praent.appendChild(div);       
    })   
}