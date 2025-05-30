let cartcnt=document.getElementById("cartData")
let total=document.getElementById('total')
    let cartData=JSON.parse(localStorage.getItem('addToCart1')) || []
    console.log(cartData)
   
   
   function displayCartData(){
     let input=''
    if(cartData.length==0){
        cartcnt.innerHTML=`
        <h2>Your cart is empty</h2>
        <img src="https://htmlstream.com/front/assets/svg/illustrations/oc-empty-cart.svg" class='empty-img'>
        <div class='cart-emptybtn'>
       <a href='http://127.0.0.1:5500/Nweproject.html' <button> Go To Home </button> </a>
       </div>
        `
    }
    else{
        let price=0
        cartData.map((val)=>{
            console.log(val)
            price+=val.price
            input+=`
            <div class='cart'>
                <img src=${val.images[0]} height="120">
                <h4>$${val.price}</h4>
                 <button onclick="deleteProduct(${val.id})">Delete</button>
                </div>
            `
        })
            console.log(price)
            cartcnt.innerHTML=input
            total.innerHTML=`<h4>Total Price: $${price}</h4>`

        
        // input+=`<h2>Total Price: ${price}</div>`
        // console.log(price)
       
    }
}
    // displayCartData()
    function deleteProduct(id){
        let data=JSON.parse(localStorage.getItem('addToCart1'))
        let a=cartData.find((val)=>{
            return val.id===id
        })
        // console.log(data)
        // console.log(a)
        let index_num=cartData.indexOf(a)
        data.splice(index_num,1)
        console.log("Updated value",data)
        localStorage.setItem("addToCart1",JSON.stringify(data))
        cartData=data
        displayCartData()
        alert("Product Deleted")
    }
    displayCartData()
// cartcnt.innerHTML=input;
// total.innerHTML=`<h4>Total Price: ${price}</h4>`
