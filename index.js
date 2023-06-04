let Allgoods=[]
if(localStorage.allGood){
    let getBack=JSON.parse(localStorage.getItem('allGood'))
    Allgoods=getBack
}
const noteEleven=()=>{
    let eachgood={
        id:1,
        img:` <img src="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/48/2141622/1.jpg?1772" class="card-img-top" alt="...">`,
        price:120000,
        description:`<p class="card-text"><b>Infinix Note 11, 4GB RAM + 128GB ROM,5000mAh, 4G - Green</b></p>`
    }
    Allgoods.push(eachgood)
    localStorage.setItem('allGood',JSON.stringify(Allgoods))
}
const bruhm=()=>{
    let eachgood={
        id:2,
        img:`<img src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/96/5192502/1.jpg?3378" class="card-img-top" alt="...">`,
        price: 180250,
        description: `<p class="card-text"><b>Bruhm 50" Inches UHD Smart TV (BTF-50SV) + Free Wall Bracket</b></p>`
    }
    Allgoods.push(eachgood)
    localStorage.setItem('allGood',JSON.stringify(Allgoods))
}
const samsung=()=>{
    let eachgood={
        id:3,
        img:`<img src="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/36/7440622/1.jpg?9388" class="card-img-top" alt="...">`,
        price: 121570,
        description: `<p class="card-text"><b>XIAOMI Redmi 10C, 6.53-inch 4GB RAM, 128GB ROM - 5000mAh-Grey</b></p>`
    }
    Allgoods.push(eachgood)
    localStorage.setItem('allGood',JSON.stringify(Allgoods))
}
const xiaomi=()=>{
    let eachgood={
        id:4,
        img:`<img src="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/96/6792202/1.jpg?2520" class="card-img-top" alt="...">`,
        price: 113433,
        description: `<p class="card-text"><b>XIAOMI Redmi 10C, 6.53-inch 4GB RAM, 128GB ROM - 5000mAh-Grey</b></p>`
    }
    Allgoods.push(eachgood)
    localStorage.setItem('allGood',JSON.stringify(Allgoods))
}
const watch=()=>{
    let eachgood={
        id:5,
        img: `<img src="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/06/460353/1.jpg?1779" class="card-img-top" alt="...">`,
        price: 12999,
        description: `<p class="card-text"><b>Naviforce Brown Luxury Men's Leather Strap Wrist Watch</b></p>`
    }
    Allgoods.push(eachgood)
    localStorage.setItem('allGood',JSON.stringify(Allgoods))
}









let getUser=JSON.parse(localStorage.getItem('ecommerce'))
let userIndex=localStorage.getItem('userIndex')
if(localStorage.welcome=="welcome"){

}
else{
    if(localStorage.ecommerce){
        Swal.fire(
            'Welcome',
            getUser[userIndex].lastname+" "+getUser[userIndex].firstname,
            'success'
          )
          setTimeout(() => {
            
              localStorage.setItem('welcome', 'welcome')
          }, 1000);
    }
}
