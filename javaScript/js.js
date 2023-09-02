const mainDiv = document.getElementById('divContainer')
const handleOne = async () => {
   const res = await fetch("https://openapi.programming-hero.com/api/videos/categories")
   const data = await res.json();
   // call div container by id //
   
   mainDiv.classList = "bg-gray-100 gap-5 lg:gap-10 text-xl text-center md:w-96 lg:w-96 md:mx-auto lg:mx-auto  mt-10 flex";


   // if (data.data.length === 0) {
   //    <div>
      
   //    </div>
   // }

   data.data.forEach((element) => {
      // console.log(element.category);
      //  cerate div  //
     
   //    const div = document.createElement('div')
   //    div.innerHTML = `<button key="${element.category_id}" onclick="onclickbtn('${element.category_id}')" >${element.category}</button>
   //  `
const button = document.createElement("button");
button.setAttribute("id", `${element.category_id}`);
button.addEventListener('click', () => {
   onclickbtn(`${element.category_id}`)
})
button.innerHTML = `${element.category}`
      mainDiv.appendChild(button);
   });
   console.log(data.data);

}
const errorDiv = document.getElementById("error-container")
const onclickbtn = async (element) => {
   console.log(element);
   // const allCaterygory = mainDiv.queryselectorAll("button")
   /* allCaterygory.foreach(cat => {
      const key = cat.getAttribute('id')
   if(element === key){
      cat.classList.add('active')
   }else {cat.classList.remove('active')}
}) 

*/ 
   const allClick = await fetch(`https://openapi.programming-hero.com/api/videos/category/${element}`)
   const res2 = await allClick.json();

   const allsection = document.getElementById('allsection');
   allsection.textContent = '';
   allsection.classList = "card w-full gap-5 lg:gap-10 mt-10 bg-base-100 shadow-xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ";


   if(res2.data.length > 0){
      errorDiv.innerHTML = ""
      res2.data.forEach((element) => {

         const cerate2 = document.createElement('div');
         cerate2.innerHTML = `
   <img class=" lg:h-40 w-80" src="${element.thumbnail}" alt="" />
   <div class="px-2">
   <div class="flex gap-6 mt-3">
   <div>
   <img class="h-10 w-10 rounded-full" src="${element.authors[0].profile_picture}" alt="" />
   </div>
   <div>
       <h2 class="card-title">${element.title}</h2>
       </div>
       </div>
       
      <div class="flex gap-4 ml-16 mt-2"> 
      
      <p>${element.authors[0].profile_name}
       </p>
      <div>${element.authors[0].verified ? `<img src="../img/verified-icon.svg">` : ""}
      </div>
      
       </div>
       <div  class="  ml-16 mt-2">
      
       <p >${element.others.views}</p>
       </div>
     
    
   
   `;
          
         allsection.appendChild(cerate2);
   
   
      });
   }else {
      const errorItem = document.createElement('div')
      errorItem.innerHTML = `  <div class="text-center text-5xl  mt-10">  
      <div class="text-center w-full mx-20 lg:mx-96 mb-10" > 
          <img  src='../img/icon.png'> </div> 
         <h1>No Data Found</h1>
         </div>
      `;
      errorDiv.appendChild(errorItem)
   }
   //  foreach 2//

  


   console.log(res2.data);
   // console.log('btn clicked');



}

//  blog clicked//
const clickted = () => {
   const btn = document.getElementById('clickedbtn');
   window.location.href = "question.html";
}

handleOne()
onclickbtn("1000")