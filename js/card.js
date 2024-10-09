// Fetch button catagories
const loadButton = () =>{
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
   .then(response => response.json())
   .then(data => {
    displayButton(data.categories);
   })
    .catch((error) => console.error(error))
}

const removeActiveBtn = () =>{
    const button = document.getElementsByClassName("btn-category");
    for(const btn of button){
        // btn.classList.remove("btn-outline");
        btn.classList.remove("btn-accent");
        btn.classList.remove("rounded-full");
    }


}
const dataLoadCard = (id) => {
    //fetch
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`)
    .then(response => response.json())
    .then(data => {
        const addActiveBtn = document.getElementById(`btn-${id}`)
        removeActiveBtn();
        addActiveBtn.classList.add("btn-accent");
        addActiveBtn.classList.add("rounded-full");
        displayCard(data.data);
    })
     .catch((error) => console.error(error))
}

const displayButton = (catagories) =>{
    const containerButton = document.getElementById("btn-id");
    catagories.forEach(catagory => {
        const containerBtnDiv = document.createElement("div");
        containerBtnDiv.innerHTML =`
        <button id="btn-${catagory.category}" onclick= "dataLoadCard('${catagory.category}')" class="btn border-slate-400 font-bold w-full btn-category">
        <img class="w-10 pr-2" src=${catagory.category_icon}
        alt="Logo" />
        ${catagory.category}
        </button>
        `
        containerButton.append(containerBtnDiv);
    });
}
const loadCard = () =>{
    document.getElementById("loaderSection").classList.remove("hidden");
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
   .then(response => response.json())
   .then(data => {
    setTimeout(function () {
        displayCard(data.pets);
    },2000)
    // displayCard(data.pets);
   })
    .catch((error) => console.error(error))
}
// Card display
const displayCard = (pets) =>{
    const containerDiv = document.getElementById("section-card");
    containerDiv.innerHTML = "";
    if(pets.length == 0){
        containerDiv.classList.remove("grid");
        containerDiv.innerHTML = `
        <div class="min-h-[300px] flex flex-col justify-center items-center">
        <img  src="images/error.webp"/>
        <h2 class="text-5xl font-bold text-black">No Information Available</h2>
        </div>
        `;
        return;
    }
    else{
        containerDiv.classList.add("grid");
    }
    pets.forEach(pet => {
        const cardDiv = document.createElement("div");
        cardDiv.classList = "card bg-base-100  shadow-xl mt-7";
        cardDiv.innerHTML=`
        <figure class="px-10 pt-10">
        <img class="w-[400px] object-cover rounded-xl"
        src="${pet.image}"
        alt="Shoes"
        class="rounded-xl" />
        </figure>
      <div class="card-body text-left px-10">
      <h2 class="card-title">${pet.pet_name}</h2>
      ${pet.breed == undefined ?"Breed: Normal breed" : `<p class="flex items-center gap-1 text-sm text-nav_color py-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
       <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
      </svg>
      Breed: ${pet.breed}
      </p>` }
     ${pet.date_of_birth == undefined ? `<div class="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 flex">
     <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
     </svg> <p>Birth: Not available </p></div>` : `<p class="flex items-center gap-1 text-sm text-nav_color py-2">
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
     <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
     </svg>
      Birth: ${pet.date_of_birth}
     </p>`}
     ${pet.gender == undefined ? `<div class="flex items-center gap-1"><img class="w-[20px]" src="https://img.icons8.com/?size=50&id=1665&format=png"/>
     <p>Gender: Not available</p></div>` : `<p class="flex items-center gap-1 text-sm  text-nav_color py-2"><img class="w-[20px]" src="https://img.icons8.com/?size=50&id=1665&format=png"/>
      Gender: ${pet.gender}
     </p>`}
     ${pet.price == undefined ? `<div class="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
     <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
     </svg>
     <p>Price: Not available</p></div>` : `
     <div class="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
     <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
     </svg>
     <p class="flex items-center gap-1 text-sm  text-nav_color py-2">Price: ${pet.price}$</p>
      
      </div>`}
      <div class="flex items-center gap-7 font-bold">
      <button onclick="loadLikeImg('${pet.image}')" class="btn border-slate-400">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
     <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
     </svg>
      </button>
      <button onclick="adoptPet()" class="btn text-btn_color border-slate-400">
      Adopt
      </button>
       <button onclick="loadPetDetails(${pet.petId})" class="btn text-btn_color border-slate-400">
      Details
      </button>
      </div>
       `
       containerDiv.append(cardDiv);
    });
}
// img like function
 const loadLikeImg = (img) =>{
    const containerdiv = document.getElementById("like-btn");
    const div = document.createElement("div");
    div.innerHTML = `
    <img class="rounded-xl" src= "${img}" alt="img"/>
    `
    containerdiv.appendChild(div);
 }

//  Details function
const loadPetDetails = async(petId)=>{
    console.log(petId);
    const url = `https://openapi.programming-hero.com/api/peddy/pet/${petId}`;
    const res = await fetch(url);
    const data = await res.json();
    displayLoadDetails(data.petData);
    
}
// display details
const displayLoadDetails = (data) =>{
    const detailsDiv = document.getElementById("containerPetDetails");
    detailsDiv.innerHTML = `
    <div class="w-[450px]"> <img class="rounded-xl w-full object-cover" src="${data.image}"/></div>
    <h2 class="text-2xl font-bold pt-5">${data.pet_name}</h2>
    <div class=" text-left py-4 grid grid-cols-2">
      ${data.breed == undefined ?
     `<div class="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none"  viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
       <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
      </svg> 
      <p class="text-nav_color text-sm">Breed: Normal breed</p></div>` : `<p class="flex items-center gap-1 text-sm text-nav_color py-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
       <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
      </svg>
      Breed: ${data.breed}
      </p>` }
     ${data.date_of_birth == undefined ? `<div class="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 flex">
     <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
     </svg> <p class="text-nav_color text-sm">Birth: Not available </p></div>` : `<p class="flex items-center gap-1 text-sm text-nav_color py-2">
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
     <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
     </svg>
      Birth: ${data.date_of_birth}
     </p>`}
     ${data.gender == undefined ? `<div class="flex items-center gap-1"><img class="w-[20px]" src="https://img.icons8.com/?size=50&id=1665&format=png"/>
     <p class="text-nav_color text-sm">Gender: Not available</p></div>` : `<p class="flex items-center gap-1 text-sm  text-nav_color py-2"><img class="w-[20px]" src="https://img.icons8.com/?size=50&id=1665&format=png"/>
      Gender: ${data.gender}
     </p>`}
     ${data.price == undefined ? `<div class="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
     <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
     </svg>
     <p class="text-nav_color text-sm">Price: Not available</p></div>` : `
     <div class="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
     <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
     </svg>
     <p class="flex items-center gap-1 text-sm  text-nav_color py-2">Price: ${data.price}$</p>
      </div>`}

      ${data.vaccinated_status == undefined ? `<div class="flex items-center gap-1"><img class="w-[20px]" src="https://image.shutterstock.com/image-vector/injection-noodle-icon-trendy-flat-260nw-738082048.jpg"/>
     <p class="text-nav_color text-sm">Vaccinated status: Not available</p></div>` : `<p class="flex items-center gap-1 text-sm  text-nav_color py-2"><img class="w-[40px]" src="https://image.shutterstock.com/image-vector/injection-noodle-icon-trendy-flat-260nw-738082048.jpg">
      Vaccinated status: ${data.vaccinated_status}
     </p>`}
    </div>
    <h4 class="text-sm font-bold">Details Information</h4>
    <p>${data.pet_details}</p>
    `
    document.getElementById("customModal").showModal();
    
}

// adopt pet
const adoptPet = ()=>{
    document.getElementById("adopted").showModal();
    let num = 3;
   const count = document.getElementById("countDown");
  const countdown = setInterval(() =>{
      num--;
      count.innerText = num;
    if(num <= 0){
        document.getElementById("adopted").close();
        clearInterval(countdown);
        count.innerText = 3;
    }
   },800)
   
}

 loadCard();
 loadButton();


