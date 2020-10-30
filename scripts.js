/* Add your JavaScript to this file */
document.addEventListener('DOMContentLoaded', function(){
    var messagee = document.getElementsByClassName("message")[0];
    var  buton = document.getElementsByTagName("button")[0];
    var mail = document.getElementById("email");
    
  
    buton.addEventListener('click', (event) =>{
        event.preventDefault();
        if (mail.value === '' || mail.value === null){
            messagee.textContent = 'Enter a valid mailing address.';
            
        }
        else{
            messagee.textContent = ` Your mailing address, ${mail.value}, was added to the mailing list.`;
            
         }
    });
     
 }, false);