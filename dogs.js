const page = document.querySelector("title").innerHTML;
console.log(page);






var arr=[{img:"German_Shepherd_-_DSC_0346_(10096362833).jpg.webp",breed:"German Shephard"},{img:"German_Shepherd_-_DSC_0346_(10096362833).jpg.webp",breed:"German Shephard"}]
var arr1=[{img:"German_Shepherd_-_DSC_0346_(10096362833).jpg.webp",breed:"bajpai"},{img:"German_Shepherd_-_DSC_0346_(10096362833).jpg.webp",breed:"German Shephard"}]
var arr2=[{img:"German_Shepherd_-_DSC_0346_(10096362833).jpg.webp",breed:"shakti"},{img:"German_Shepherd_-_DSC_0346_(10096362833).jpg.webp",breed:"German Shephard"}]
var arr3=[{img:"German_Shepherd_-_DSC_0346_(10096362833).jpg.webp",breed:"agnihoptri"},{img:"German_Shepherd_-_DSC_0346_(10096362833).jpg.webp",breed:"German Shephard"}]

if(page=="Dogs"){
    function initdogs(){
        var clutter="";
        arr.forEach((obj,index)=> {
            clutter +=`
            <div class="bajpai">
                <img src=${obj.img}>
                <div class="des">
                    <span>${obj.breed}</span>
                    <h5>lorem ipsium</h5>
                    <div class="star">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                </div>
                <button class="mx-auto" popovertarget="pop-${index}">View Post</button>
                
            </div>
            <div class="pop rounded-2"style="width:70%" id="pop-${index}" popover>
        <div class="contianer">
            <div class="title">About</div>
            <div class="detail">
                <div class="iamge">
                    <img src="${obj.img}" alt="">
                </div>
                <div class="content">
                    <h1 class="name"></h1>
                    <div class="Adopt"></div>
                    <div class="description">${obj.description}</div>
                </div>
            </div>
            <div class="title">Similar</div>
            <div class="list"></div>
        </div>    
    </div>
        
        `
            
        });
        document.querySelector(".items").innerHTML=clutter;
    }

    initdogs();
}




if(page=="Cats"){function initcats(){
    var clutter="";
    arr1.forEach((obj)=> {
        clutter +=`<div class="bajpai">
        <img src=${obj.img}>
        <div class="des">
            <span>${obj.breed}</span>
            <h5>lorem ipsium</h5>
            <div class="star">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
            </div>
        </div>
    </div>`
        
    });
    document.querySelector(".items").innerHTML=clutter;
}

initcats();}





if(page=="Fishes"){function initfishes(){
    var clutter="";
    arr2.forEach((obj)=> {
        clutter +=`<div class="bajpai">
        <img src=${obj.img}>
        <div class="des">
            <span>${obj.breed}</span>
            <h5>lorem ipsium</h5>
            <div class="star">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
            </div>
        </div>
    </div>`
        
    });
    document.querySelector(".items").innerHTML=clutter;
}

initfishes();}






if(page=="exotic"){function initexotic(){
    var clutter="";
    arr3.forEach((obj)=> {
        clutter +=`<div class="bajpai">
        <img src=${obj.img}>
        <div class="des">
            <span>${obj.breed}</span>
            <h5>lorem ipsium</h5>
            <div class="star">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
            </div>
        </div>
    </div>`
        
    });
    document.querySelector(".items").innerHTML=clutter;
}

initexotic();}