let day = "saturday"

switch (day) {
    case 'monday' :
        console.log('its day 1');
        
        break;
    case 'tuesday' :
    console.log('its day 2');
    
        break; 
    case 'wednesday' :
    console.log('its day 3');
        break; 
    case 'thursday':
    console.log('its day 4');
        break; 
    case 'friday' :
    console.log('its day 5');
       default :
       case 'day' :
       console.log('weekend');                   
}


let user = {
    name: 'fatzy', 
    age:'39',
    details:{
        maths:'95',
        english:'90',
        chemistry: '10',
        biology:'absent'
    }
}

    console.log(user);
    
const fruit = ['apple','banana','mango','cumcumber']


    fruit.push('carrot')
    console.log(fruit.length);
    console.log(fruit[3]);

   console.log(fruit);
   


   const myButton = document.getElementById("myButton");
//    {
//     alert('button clicked')
//    }
    // let myButton = () =>{
    //     console.log('I love coding')
    // }
    // myButton()

    myButton.addEventListener('click', () => {
        let rate = 5;
        if(rate >= 5){
            alert('You have high rate')
            console.log(`This is your rate  ${rate}`)
            return
        }
        else if(rate <= 6){
            alert('You have medium rate')
            return
        }else{
            console.log('You did not have any rate yet')
        }
    })
    const checks = document.getElementById('look')


    // checks.addEventListener('click', ()=>
    // {
    //     alert('the button has been clicked');
        
    // })
    
    checks.addEventListener('click' , function(e) {
        console.log(e);
        
    })





    // let month = 1

    //  if (month <= 1 && month >= 1 ) 
    //     console.log('january');
    // else if (month <= 2 && month >=  2)
    //     console.log('febraury');
    // else if (month <= 3 && month >=  3)
    //     console.log('march');
    // else if (month <= 4 && month >=  4)
    //     console.log('april');
    // else if (month <= 5 && month >=  5)
    //     console.log('june');
    

    let val = 300;
    let money = 200;
    if(money < 300){
        console.log('You don\'t have enough money');
        
    }
    else{
        console.log('You have money to buy orange')
    }
    

    // Form Event
    let getForm = document.forms.myForm;
    let getFullName = getForm.fullName;
    
    getForm.addEventListener('submit', (e) => {
        let fullValue = getFullName.value;
        e.preventDefault();
        if(fullValue.value = true){
            console.log(fullValue)
        }
    })



    let message = 'hello world'

    console.log('message');
    