async function getUsers(){
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const usersList = await response.json();

    const result = usersList.map( function(user){
        return `
          <div class='card'>
             <div class='line'>
               <div class='unit'>
                 <p class='title'>ID:</p>
                 <p class='info'>${user.id}</p>
               </div>

             </div>

             <div class='line'>

               <div class='unit'>
                 <p class='title'>Name:</p>
                 <p class='info'>${user.name}</p>
               </div>
             </div>


             <div class='line'>
               <div class='unit'>
                 <p class='title'>UserName:</p>
                 <p class='info'>${user.username}</p>
               </div>
             </div>

             <div class='line'>
               <div class='unit'>
                 <p class='title'>Email:</p>
                 <p class='info'>${user.email}</p>
               </div>
             </div>

             <div class='line'>
               <div class='unit'>
                 <p class='title'>Address:</p>
               </div>
             </div>

             <div class='line double'>
               <div class='unit'>
                 <p class='title'>street:</p>
                 <p class='info'>${user.address.street}</p>
               </div>

               <div class='unit'>
                 <p class='title'>suite:</p>
                 <p class='info'>${user.address.suite}</p>
               </div>
             </div>

             <div class='line double'>
               <div class='unit'>
                 <p class='title'>city:</p>
                 <p class='info'>${user.address.city}</p>
               </div>

               <div class='unit'>
                 <p class='title'>zipcode:</p>
                 <p class='info'>${user.address.zipcode}</p>
               </div>
             </div>

             <div class='line'>
               <div class='unit'>
                 <p class='title'>Geo:</p>
               </div>
             </div>

             <div class='line double'>
               <div class='unit'>
                 <p class='title'>Lat:</p>
                 <p class='info'>${user.address.geo.lat}</p>
               </div>

               <div class='unit'>
                 <p class='title'>Lng:</p>
                 <p class='info'>${user.address.geo.lng}</p>
               </div>
             </div>

             <div class='line'>
               <div class='unit'>
                 <p class='title'>Phone:</p>
                 <p class='info'>${user.phone}</p>
               </div>
             </div>

             <div class='line'>
               <div class='unit'>
                 <p class='title'>Website:</p>
                 <p class='info'>${user.website}</p>
               </div>
             </div>

             <div class='line'>
               <div class='unit'>
                 <p class='title'>Company Name:</p>
                 <p class='info'>${user.company.name}</p>
               </div>
             </div>

             <div class='line'>
               <div class='unit'>
                 <p class='title'>CatchPhrase:</p>
                 <p class='info'>${user.company.catchPhrase}</p>
               </div>
             </div>

             <div class='line'>
               <div class='unit'>
                 <p class='title'>bs:</p>
                 <p class='info'>${user.company.bs}</p>
               </div>
             </div>
             
          </div>
        `
    }).join('');

    document.querySelector(".usersList").innerHTML = result;
}

getUsers();
