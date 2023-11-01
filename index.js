// copy icon button
let display=document.querySelector("[password_dis]");
function copyed_btn()
{
    let copy=document.querySelector('.copied');
    copy.classList.remove('copied');
    
    setTimeout(() => {
        copy.classList.add('copied');
        
    }, 1000);

    navigator.clipboard.writeText(display.value);
    
}







// initial value

let passwordlength=10;




// slider function
    
    let sliderdisplay=document.querySelector("[ sliderdisplay]");
    let sliderrange=document.querySelector("#sliderrange");
    
    sliderdisplay.textContent=passwordlength;
    sliderrange.addEventListener('input',()=>{
        sliderdisplay.innerHTML=sliderrange.value;
        passwordlength=sliderrange.value;        
        
        const max=sliderrange.max;
        const backgroundSize = ((passwordlength * 100) / max) + "% 100%";
        sliderrange.style.backgroundSize = backgroundSize;
    });

   
   



// random no funciton with range
function randomNo(min,max)
{
    return Math.floor(Math.random()*(max-min)) + min;
}

function integer()
{
    return randomNo(0,9);
}

function uppercase()
{
    let ch=randomNo(65,91);
    return String.fromCharCode(ch);
}

function lowercase()
{
    let ch=randomNo(97,123);
    return String.fromCharCode(ch);
}

function symbols()
{
    let s="!@#$%^&*()_+-=[];'\,./{}:|?</>";
    let index=randomNo(0,30);
    return s[index];
}


let Lowercase=document.querySelector('#Lowercase');
let Uppercase=document.querySelector('#Uppercase');
let Number=document.querySelector('#Number');
let Symbol=document.querySelector('#Symbol');



// strength function for changing color

let strength_indicator=document.querySelector('#strength_indicator');

function setindicator(color)
{
  return   strength_indicator.style.backgroundColor=color;
    
}



function strength()
{
    let haslowercase=false;
    let hasuppercase=false;
    let hasinteger=false;
    let hassymbols=false;

    if(Lowercase.checked)
    haslowercase=true;

    if(Uppercase.checked)
    hasuppercase=true;

    if(Number.checked)
    hasinteger=true;

    if(Symbol.checked)
    hassymbols=true;

    if((hasuppercase && haslowercase) && (hassymbols || hasinteger) && passwordlength>=10)
    {
        setindicator("#0f0");
    }else if((haslowercase || hasuppercase)&&(hasinteger || hassymbols) && passwordlength>=6)
    {
        setindicator("#ff0");
    }else{
        setindicator("#f00");
    }
    
}




// generate password button
function generate_btn()
{
    let password="";

    strength();
    
   let checked_count=0;
   if(Lowercase.checked)
   {
        password += lowercase();
        checked_count++;
    }
    
    if(Uppercase.checked)
    {
        password += uppercase();
        checked_count++;
    }
    
    if(Number.checked)
    {
        password += integer();
        checked_count++;
    }
    
    if(Symbol.checked)
    {
        password  += symbols();
        checked_count++;
    }

    passwordlength = passwordlength - checked_count;

   while(passwordlength--)
   {
    if(Lowercase.checked)
    {
         password += lowercase();
         
    }
 
    else if(Uppercase.checked)
    {
         password += uppercase();
        
    }
 
    else if(Number.checked)
    {
         password += integer();
         
    }
    
    else if(Symbol.checked)
    {
         password  += symbols();
        
    }
   }


   display.value=password;

}

 










