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
