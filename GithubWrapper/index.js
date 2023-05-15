console.log('working')

const userInput = document.getElementById('username')
const showDetailInput = document.getElementById('showDetails')
const profileInfoDiv = document.getElementById('profileInfo')
const repoInfoDiv = document.getElementById('repoInfo')

async function showRepoInfo(userInput) {
   const res = await fetch(`https://api.github.com/users/${userInput}/repos`)
      const data = await res.json();

     
        // console.log(data)
        for (let i = 0; i < data.length; i++) {
          repoInfoDiv.innerHTML += `<div class="card">
          
              <div class="card-body">
                  <div class="card-title">
                     ${data[i].name}
                  </div>
                  <div class="card-subHeading">
                  ${data[i].language}
               </div>
                  <div class="card-text">
                  
                  <button>
                  <a href= ${data[i].html_url}>
                  Checkout project</a>
                  </button>
                  </div>
              </div>
              </div>`
        }
    
  }
  showDetailInput.addEventListener('click', async() => {
    const userName = userInput.value
   const res= await fetch(`https://api.github.com/users/${userName}`)
      // .then((res)=>console.log(res));
      const data= await res.json();
      showProfile(data);
      showRepoInfo(userName);
  })


  function showProfile(data){
    console.log(data)
        profileInfoDiv.innerHTML = `<div class="card">
                                      <div class="card-img">
                                          <img src=${data.avatar_url}alt=${data.name}>
                                      </div>
                                      <div class="card-body">
                                          <div class="card-title">
                                             ${data.name}
                                          </div>
                                          <div className="card-subHeading">${data.login}</div>
                    
                                          <div class="card-text">
                                          <p> ${data.bio}</p>
                                          <p> ${data.followers} followers ${data.following} followings</p>
                                          
                                          <button>
                                              <a href= ${data.html_url}>
                                              Checkout Profile</a>
                                              </button>
                                        </div>
                                      </div>
                                      
                                      </div>`
  

  }

  
//getting respose using promise

// function showRepoInfo(userInput) {
//   fetch(`https://api.github.com/users/${userInput}/repos`)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data)
//       for (let i = 0; i < data.length; i++) {
//         repoInfoDiv.innerHTML += `<div class="card">
        
//             <div class="card-body">
//                 <div class="card-title">
//                    ${data[i].name}
//                 </div>
//                 <div class="card-subhead">
//                 ${data[i].language}
//              </div>
//                 <div class="card-text">
                
//                 <button>
//                 <a href= ${data[i].html_url}>
//                 Checkout project</a>
//                 </button>
//                 </div>
//             </div>
//             </div>`
//       }
//     })
// }
// showDetailInput.addEventListener('click', () => {
//   const userName = userInput.value
//   fetch(`https://api.github.com/users/${userName}`)
//     // .then((res)=>console.log(res));
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data)
//       profileInfoDiv.innerHTML = `<div class="card">
//                                     <div class="card-img">
//                                         <img src=${data.avatar_url}alt=${data.name}>
//                                     </div>
//                                     <div class="card-body">
//                                         <div class="card-title">
//                                            ${data.name}
//                                         </div>
//                                         <div class="card-text">
//                                         <p> ${data.bio}</p>
//                                         <p> ${data.followers} followers ${data.following} followings</p>
//                                         </div>
//                                         <button>
//                                             <a href= ${data.html_url}>
//                                             Checkout project</a>
//                                             </button>
                
//                                     </div>
                                    
//                                     </div>`

//       showRepoInfo(userName)
//     })
// })
//promise


// const p=  new Promise((resolve, reject)=>{
//     const x= 1+1;
//     if(x==2){
//      resolve('success');
//     }
//     else{
//      reject('fail');
//     }
//   })

//   p.then((data)=>console.log(data)).catch((err)=>{
//     console.log("please correct the code");
//   });

// const nu = [1, 2 ,3 ,4 ]
// function fun2(){
//     for(var i=0; i<nu.length; i++){
//         setTimeout(()=>console.log(`nu:${nu[i]}`),i*1000);
//     }
// }
// fun2();-- op is undefine 

// const nu = [1, 2, 3, 4];

// function fun2() {
//   for (var i = 0; i < nu.length; i++) {
//     (function (index) {
//       setTimeout(function () {
//         console.log(`nu:${nu[index]}`);
//       }, i * 1000);
//     })(i);
//   }
// }

// fun2(); ---> closure so value is preserved 
