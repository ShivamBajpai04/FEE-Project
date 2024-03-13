const page = document.querySelector("title").innerHTML;
console.log(page);

function generateRandomDescription() {
	const descriptions = [
		"Friendly and energetic",
		"Playful and curious",
		"Graceful and colorful",
		"Unique and exotic",
		"Cuddly and affectionate",
		"Majestic and regal",
		"Intelligent and loyal",
		"Adventurous and outgoing",
		"Charming and mischievous",
		"Gentle and sweet",
		// Add more descriptions as needed
	];

	const randomIndex = Math.floor(Math.random() * descriptions.length);
	return descriptions[randomIndex];
}

function generateRandomPetName() {
	const petNames = [
		"Buddy",
		"Mittens",
		"Nemo",
		"Whiskers",
		"Fluffy",
		"Charlie",
		"Luna",
		"Oscar",
		"Coco",
		"Oliver",
		// Add more pet names as needed
	];

	const randomIndex = Math.floor(Math.random() * petNames.length);
	return petNames[randomIndex];
}

var arr = [
	{ img: "https://images.saymedia-content.com/.image/t_share/MTk2NzIzMTQ2NzMxMTAzMjUw/11-dogs-like-german-shepherd.png", breed: "German Shephard", name: generateRandomPetName(), description: generateRandomDescription() },
	{ img: "https://cdn.britannica.com/44/233844-050-A0F9F39C/French-bulldog.jpg", breed: "Bull Dog", name: generateRandomPetName(), description: generateRandomDescription() },
	{ img: "https://hips.hearstapps.com/hmg-prod/images/labrador-puppy-royalty-free-image-1626252338.jpg?crop=0.667xw:1.00xh;0.173xw,0&resize=2048:*", breed: "Labrador", name: generateRandomPetName(), description: generateRandomDescription() },
	{ img: "https://images.squarespace-cdn.com/content/v1/54e7a1a6e4b08db9da801ded/fdecc7f0-42bf-4696-bd4c-73a868e5d1d2/81.jpg", breed: "Golden Retriever", name: generateRandomPetName(), description: generateRandomDescription() },
	{ img: "https://highlandcanine.com/wp-content/uploads/2021/01/siberian-husky-in-the-snow.jpg", breed: "Siberian Husky", name: generateRandomPetName(), description: generateRandomDescription() },
	{ img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Beagle_harrier.JPG/800px-Beagle_harrier.JPG", breed: "Beagle", name: generateRandomPetName(), description: generateRandomDescription() },
];

var arr1 = [
	{ img: "https://www.wagr.ai/cdn/shop/articles/breed-at-a-glance-siamese-cat-375948.jpg?v=1702478881", breed: "Siamese Cat", name: generateRandomPetName(), description: generateRandomDescription() },
	{ img: "https://puppiezo.com/wp-content/uploads/2023/06/IMG_2155.jpeg", breed: "British Shorthair", name: generateRandomPetName(), description: generateRandomDescription() },
	{ img: "https://www.thesprucepets.com/thmb/MzKr6fC-v8W4D4oz2p9wWCwAFms=/2119x0/filters:no_upscale():strip_icc()/GettyImages-1189893683-e0ff70596b3b4f0687ba573e5a671f74.jpg", breed: "Maine Coon", name: generateRandomPetName(), description: generateRandomDescription() },
	{ img: "https://cf.ltkcdn.net/www/images/orig/350825-1600x1066-Blue-eyed-1392570836.jpg", breed: "Persian cat", name: generateRandomPetName(), description: generateRandomDescription() },
	{ img: "https://catevolution.co.nz/cdn/shop/articles/sphynx-Cats-1200x750.png?v=1674628187&width=1100", breed: "Sphynx cat", name: generateRandomPetName(), description: generateRandomDescription() },
];

var arr2 = [
	{ img: "https://lagunakoi.com/wp-content/uploads/2023/04/6-8-premium-koi__06467.jpg", breed: "Koi", name: generateRandomPetName(), description: generateRandomDescription() },
	{ img: "https://5.imimg.com/data5/JH/MM/GLADMIN-7481668/red-cap-oranda-goldfish-500x500.jpg", breed: "Oranda", name: generateRandomPetName(), description: generateRandomDescription() },
	{ img: "https://cdn11.bigcommerce.com/s-6wk93m4a4o/images/stencil/1280x1280/products/428/866/10103__22844.1679078541.jpg?c=1", breed: "Common Goldfish", name: generateRandomPetName(), description: generateRandomDescription() },
	{ img: "https://www.learnaboutnature.com/wp-content/uploads/Bubble-Eye-Goldfish-1024x772.jpg", breed: "Bubble Eye", name: generateRandomPetName(), description: generateRandomDescription() },
];

var arr3 = [
	{ img: "https://www.zenhabitats.com/cdn/shop/articles/most_popular_ball_python_morphs_albino.jpg?v=1704413445", breed: "Burmese Ball Python", name: generateRandomPetName(), description: generateRandomDescription() },
	{ img: "https://i.natgeofe.com/n/620bd7e5-48a9-46e5-9e47-7caffbfb57a8/65901.jpg", breed: "Capuchin", name: generateRandomPetName(), description: generateRandomDescription() },
	{ img: "https://images.saymedia-content.com/.image/t_share/MTc2NDU0MDMxNTg4MjcyMDkw/types-of-hamsters-breeds.jpg", breed: "Hamster", name: generateRandomPetName(), description: generateRandomDescription() },
];

if (page == "Dogs") {
	function initdogs() {
		var clutter = "";
		arr.forEach((obj, index) => {
			clutter += `
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
                <button class="mx-auto" popovertarget="pop-${index}">View</button>
                
            </div>
            <div class="pop rounded-2"style="width:70%" id="pop-${index}" popover>
                <div class="contianer">
                    <h1 class="title">About</h1>
                    <div class="detail">
                        <div class="iamge">
                            <img class="image-fluid rounded-4" src="${obj.img}" alt="">
                        </div>
                        <div class="">
                            <h1 class="name">${obj.name}</h1>
                            <div class="m-3 star">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <div class="description">${obj.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ea cum commodi quis, aut provident, numquam in deserunt officiis placeat perspiciatis consequuntur qui nulla, at ad explicabo fugiat blanditiis. Deleniti.</div>
                            <button onclick="myfucn()" class="btn-primary btn rounded-pill w-25 h-auto mt-5">Adopt</button>
                        </div>
                    </div>
                </div>    
            </div>
        
        `;
		});
		document.querySelector(".items").innerHTML = clutter;
	}

	initdogs();
}

if (page == "Cats") {
	function initcats() {
		var clutter = "";
		arr1.forEach((obj, index) => {
			clutter += `<div class="bajpai">
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
            <button class="mx-auto" popovertarget="pop-${index}">View</button>
            
        </div>
        <div class="pop rounded-2"style="width:70%" id="pop-${index}" popover>
            <div class="contianer">
                <h1 class="title">About</h1>
                <div class="detail">
                    <div class="iamge">
                        <img class="image-fluid rounded-4" src="${obj.img}" alt="">
                    </div>
                    <div class="">
                        <h1 class="name">${obj.name}</h1>
                        <div class="m-3 star">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="description">${obj.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ea cum commodi quis, aut provident, numquam in deserunt officiis placeat perspiciatis consequuntur qui nulla, at ad explicabo fugiat blanditiis. Deleniti.</div>
                        <button onclick="myfucn()" class="btn-primary btn rounded-pill w-25 h-auto mt-5">Adopt</button>
                    </div>
                </div>
            </div>    
        </div>`;
		});
		document.querySelector(".items").innerHTML = clutter;
	}

	initcats();
}

if (page == "Fishes") {
	function initfishes() {
		var clutter = "";
		arr2.forEach((obj, index) => {
			clutter += `<div class="bajpai">
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
            <button class="mx-auto" popovertarget="pop-${index}">View</button>
            
        </div>
        <div class="pop rounded-2"style="width:70%" id="pop-${index}" popover>
            <div class="contianer">
                <h1 class="title">About</h1>
                <div class="detail">
                    <div class="iamge">
                        <img class="image-fluid rounded-4" src="${obj.img}" alt="">
                    </div>
                    <div class="">
                        <h1 class="name">${obj.name}</h1>
                        <div class="m-3 star">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="description">${obj.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ea cum commodi quis, aut provident, numquam in deserunt officiis placeat perspiciatis consequuntur qui nulla, at ad explicabo fugiat blanditiis. Deleniti.</div>
                        <button onclick="myfucn()" class="btn-primary btn rounded-pill w-25 h-auto mt-5">Adopt</button>
                    </div>
                </div>
            </div>    
        </div>`;
		});
		document.querySelector(".items").innerHTML = clutter;
	}

	initfishes();
}

if (page == "Exotic") {
	function initexotic() {
		var clutter = "";
		arr3.forEach((obj, index) => {
			clutter += `<div class="bajpai">
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
            <button class="mx-auto" popovertarget="pop-${index}">View</button>
            
        </div>
        <div class="pop rounded-2"style="width:70%" id="pop-${index}" popover>
            <div class="contianer">
                <h1 class="title">About</h1>
                <div class="detail">
                    <div class="iamge">
                        <img class="image-fluid rounded-4" src="${obj.img}" alt="">
                    </div>
                    <div class="">
                        <h1 class="name">${obj.name}</h1>
                        <div class="m-3 star">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="description">${obj.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ea cum commodi quis, aut provident, numquam in deserunt officiis placeat perspiciatis consequuntur qui nulla, at ad explicabo fugiat blanditiis. Deleniti.</div>
                        <button onclick="myfucn()" class="btn-primary btn rounded-pill w-25 h-auto mt-5">Adopt</button>
                    </div>
                </div>
            </div>    
        </div>`;
		});
		document.querySelector(".items").innerHTML = clutter;
	}

	initexotic();
}

function myfucn() {
	alert("We have recieved your Request, We will contact you soon.");
}
