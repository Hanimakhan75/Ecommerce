

let productCnt=document.getElementById('productCnt')
// FETCH the data
fetch('https://dummyjson.com/products').then((e)=>e.json()).then((data)=>{
    console.log(data.products)
    localStorage.setItem("products",JSON.stringify(data.products))

    fetchData(data.products)
})

function fetchData(p){
    let input=''
    p.map((val)=>{
        input+=`
        <div class="product_container">
        <img src=${val.images[0]} alt=${val.title}>
        <h6>${val.title}</h6>
        <div class="price-cnt">
        <p>From Rs.${val.price}</p>
        <p>Rating: ${val.rating}</p>
         </div>
         <button onclick="handleBtn(${val.id})">View More</button>
          </div>
        `
    })
    productCnt.innerHTML=input
}

// PRODUCTS
function handleBtn(id){
    localStorage.setItem('productid',id)
    window.location.href='product.html'

}
let gro=document.getElementById('gro')
let graceriesProduct=document.getElementById('graceriesProduct')
let mob=document.getElementById('mob')
let mobileProduct=document.getElementById('mobileProduct')
let fash=document.getElementById('fash')
let fashionProduct=document.getElementById('fashionProduct')
let elec=document.getElementById('elec')
let electroniProduct=document.getElementById('electroniProduct')
let furnitureProduct=document.getElementById('furnitureProduct')
let furni=document.getElementById('furni')
let all_product=""


gro.addEventListener('mouseover',()=>{
    graceriesProduct.style.display='block'
})
gro.addEventListener('mouseout',()=>{
 setTimeout(()=>{   graceriesProduct.style.display='none'},2000)
})

mob.addEventListener('mouseover',()=>{
    mobileProduct.style.display='block'
})
mob.addEventListener('mouseout',()=>{
  setTimeout(()=>{   mobileProduct.style.display='none'},2000)
})

fash.addEventListener('mouseover',()=>{
   fashionProduct.style.display='block'
})
fash.addEventListener('mouseout',()=>{
    setTimeout(()=>{   fashionProduct.style.display='none'},2000)
})

elec.addEventListener('mouseover',()=>{
    electroniProduct.style.display='block'
})
elec.addEventListener('mouseout',()=>{
    setTimeout(()=>{  electroniProduct.style.display='none'},2000)
})

furni.addEventListener('mouseover',()=>{
   furnitureProduct.style.display='block'
})
furni.addEventListener('mouseout',()=>{
    setTimeout(()=>{  furnitureProduct.style.display='none'},2000)
})

// CHATBOT
let msgbox = document.getElementById('msgbox');
let un = document.getElementById('un');
let send = document.getElementById('send');
let chatbot_ = document.getElementById('chatbot_');
let cancel = document.getElementById('cancel');
let chatboxMsg = document.getElementById('chatboxMsg');

let s = 0;
let botMessages = ["Enter name", "How may I help you?", "Type your query", "We will connect shortly", "Thanks"];

send.addEventListener('click', () => {
    let userValue = un.value.trim();
    if (userValue !== '') {
        displayData(userValue, s);
        s = (s + 1) % botMessages.length; // Loop through bot messages
        un.value = '';
    }
});

function displayData(userMessage, index) {
    let userMsg = document.createElement('div');
    userMsg.classList.add('user-message');
    userMsg.textContent = userMessage;
    
    let botMsg = document.createElement('div');
    botMsg.classList.add('bot-message');
    botMsg.textContent = botMessages[index];

    msgbox.appendChild(userMsg);  // Append user message first
    setTimeout(() => {
        msgbox.appendChild(botMsg);  // Append bot reply after delay
        msgbox.scrollTop = msgbox.scrollHeight; // Auto-scroll
    }, 500);
}

chatbot_.addEventListener('click', () => {
    chatboxMsg.style.display = 'block';
});

cancel.addEventListener('click', () => {
    chatboxMsg.style.display = 'none';
});


let searchProduct=document.getElementById('searchProduct')
searchProduct.addEventListener('input',(e)=>{
    let userVal=e.target.value
    let filteredData=all_product.filter((val)=>{
        return val.title.toLowerCase().includes(userVal.toLowercase())||val.category.toLowerCase().includes(userVal.toLowerCase())
    })
    fetchData(filteredData)
})

