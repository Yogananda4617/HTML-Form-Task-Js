function submit(){
    let firstName = document.querySelector(".fname").value;
    let lastName = document.querySelector(".lname").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    food=[]
    test();
    function test() {
        var foodchoice = document.querySelectorAll('input[type=checkbox]:checked');
        var len = foodchoice.length;
        if(len<2) {
            alert('Choice od food must be atleast two') ;
          }
        
        else{
            for (var i = 0; i < len; i++){
                food.push(foodchoice[i].value)
            }
    let Address = document.querySelector(".address").value;
    let Pincode = document.querySelector(".pincode").value;
    let state = document.querySelector(".state").value;
    let country = document.querySelector(".country").value;
    
        let  tablerow =`<tr>
        <td>${firstName}</td> 
        <td>${lastName}</td> 
        <td>${gender}</td> 
        <td>${food}</td> 
        <td>${Address}</td> 
        <td>${Pincode}</td> 
        <td>${state}</td> 
        <td>${country}</td> 
        </tr>`;
        document.querySelector(".addtotable").innerHTML +=tablerow;
        reset()
            }
        }
    }
function reset(){
        document.querySelector(".fname").value="";  
        document.querySelector(".lname").value="";
        
        var ele = document.getElementsByName("gender");
            for(var i=0;i<ele.length;i++)
            ele[i].checked = false;   
        
        var ele = document.getElementsByName("food[]");
            for(var i=0;i<ele.length;i++)
            ele[i].checked = false;
        document.querySelector(".address").value=""; 
        document.querySelector(".pincode").value=""; 
        document.querySelector(".state").value="";
        document.querySelector(".country").value=""; 
        
          
    }