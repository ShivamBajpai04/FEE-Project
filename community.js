var arr = [
	{ name: "John Doe", init: "JD", img: "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", caption: "Good day to be a dog" },
	{ name: "Jane Doe", init: "JD", img: "https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?q=80&w=1810&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", caption: "Good day to be a dog" },
	{ name: "John Doe", init: "JD", img: "https://images.unsplash.com/photo-1613176748515-8cd503764873?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", caption: "Good day to be a dog" },
	{ name: "Jane Doe", init: "JD", img: "https://plus.unsplash.com/premium_photo-1677101221533-52b45823a2dc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", caption: "Good day to be a dog" },
	{ name: "John Doe", init: "JD", img: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", caption: "Good day to be a dog" },
	{ name: "Jane Doe", init: "JD", img: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", caption: "Good day to be a dog" },
];
const dogComments = [
	"🐾 Cutest paw prints ever!",
	"Fluffy ball of joy! 🐶",
	"Cuddle time! 💖",
	"Wagging tail happiness! 🌟",
	"Can't resist that face! 😍",
	"Puppy love overload! 🥰",
	"Fur-tastic friend! 🐕",
	"Pure joy in fur form! 😄",
	"In doggy paradise! 🌈",
	"Heart stolen by cuteness! 💕",
	"Need this doggo now! 🤩",
	"Fluff level: Pro! 🦄",
	"Eyes full of love! 👀❤️",
	"Doggy perfection! 🌟",
	"My heart melted! 💓",
	"Tail-wagging bliss! 🎉",
	"Simply paw-some! 🐾",
	"Bestie material! 🤝",
	"Precious furball! 🌈",
	"Cuteness overload alert! 🚨",
];
const randomFirstNames = [
	"Luna",
	"Max",
	"Ruby",
	"Oliver",
	"Zoe",
	"Leo",
	"Ava",
	"Dexter",
	"Mia",
	"Charlie",
	"Sophie",
	"Rocky",
	"Stella",
	"Oscar",
	"Bella",
	"Cooper",
	"Lucy",
	"Teddy",
	"Chloe",
	"Apollo",
	"Nova",
	"Finn",
	"Lily",
	"Jasper",
	"Cleo",
	"Milo",
	"Lola",
	"Cody",
	"Layla",
	"Winston",
	"Penny",
	"Zeus",
	"Ivy",
	"Ollie",
	"Maya",
	"Bruno",
	"Hazel",
	"Riley",
	"Sadie",
	"Duke",
	"Maddie",
	"Thor",
	"Willow",
	"Coco",
	"Rusty",
	"Piper",
	"Hank",
	"Maisy",
	"Jack",
];

function initcommunity() {
	var clutter = "";
	arr.forEach((obj, index) => {
		clutter += `
        <div class="space-y-4 post bg-slate-100 rounded-md">
            <div
                class="bg-card text-card-foreground rounded-none shadow-none border-0"
                data-v0-t="card">
                <div class="space-y-1.5 p-4 flex flex-row items-center">
                    <a
                        class="flex items-center gap-2 text-sm font-semibold"
                        href="#">
                        <span class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 border"><span class="flex h-full w-full items-center justify-center rounded-full bg-muted">${obj.init}</span></span>
                        ${obj.name}
                    </a>
                </div>
                <div class="p-0">
                    <img
                        src="${obj.img}"
                        width="100%"
                        height="auto"
                        alt="Image"
                        class="aspect-video object-scale-down" />
                </div>
                <div class="items-center p-2 pb-4 grid gap-2">
                    <div class="flex items-center w-full">
                        <button
                            class="like inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="#f00"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="w-4 h-4">
                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                            </svg>
                            <span class="sr-only">Like</span>
                        </button>
                        <button
                            class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="w-4 h-4">
                                <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path>
                            </svg>
                            <span class="sr-only">Comment</span>
                        </button>
                        
                    </div>
                    <div class="px-2 text-sm w-full grid gap-1.5">
                        <div>
                            <a
                                class="font-medium"
                                href="#">
                                ${randomFirstNames[Math.floor(Math.random() * randomFirstNames.length)]}
                            </a>
                            ${dogComments[Math.floor(Math.random() * dogComments.length)]}
                        </div>
                        <div>
                            <a
                                class="font-medium"
                                href="#">
                                ${randomFirstNames[Math.floor(Math.random() * randomFirstNames.length)]}
                            </a>
                            ${dogComments[Math.floor(Math.random() * dogComments.length)]}
                        </div>
                        <div>
                            <a
                                class="font-medium"
                                data-rel="popup"
                                href="#popup">
                                
                                ${randomFirstNames[Math.floor(Math.random() * randomFirstNames.length)]}
                            </a>
                            ${dogComments[Math.floor(Math.random() * dogComments.length)]}
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full h-auto">
                <button type="button" popovertarget="pop-${index}" class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-2 mb-2">View Post</button>
            </div>
        </div>
        <div class="pop rounded-md"style="width:70%" id="pop-${index}" popover>
            <div style="margin-inline:auto" class=" flex flex-col">
                <div style="margin-inline:auto" class="mx-auto flex-1 w-full min-h-0 border-t border-gray-200 dark:border-gray-800">
                    <div style="margin-inline:auto" class=" mx-auto container grid gap-6 px-4 py-6 md:grid-cols-3 md:gap-10 md:px-6 lg:gap-12">
                        <div style="margin-inline:auto" class="mx-auto md:col-span-2 space-y-4">
                            <div class="aspect-video overflow-hidden rounded-lg">
                                <img
                                    src="${obj.img}"
                                    width="100%"
                                    height="auto"
                                    class="object-scale-down aspect-video"/>
                            </div>
                            <div class="space-y-2">
                                <div class="flex items-center space-x-4">
                                    <div class="flex items-center space-x-2">
                                        <span class="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10"></span>
                                        <div class="space-y-1.5">
                                            <h2 class="text-base font-semibold">${obj.name}</h2>
                                            <p class="text-sm text-gray-500 dark:text-gray-400">${obj.caption}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="space-y-4">
                                <div class="flex items-center space-x-2">
                                    <span class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8"></span>
                                    <div class="border rounded-full p-3 w-full"><p class="text-sm text-gray-500 dark:text-gray-400">${dogComments[Math.floor(Math.random() * dogComments.length)]}</p></div>
                                </div>
                                <div class="flex items-center space-x-2">
                                    <span class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8"></span>
                                    <div class="border rounded-full p-3 w-full"><p class="text-sm text-gray-500 dark:text-gray-400">${dogComments[Math.floor(Math.random() * dogComments.length)]}</p></div>
                                </div>
                                <div class="flex items-center space-x-2">
                                    <span class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8"></span>
                                    <div class="border rounded-full p-3 w-full"><p class="text-sm text-gray-500 dark:text-gray-400">${dogComments[Math.floor(Math.random() * dogComments.length)]}</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
	});
	document.querySelector("#content").innerHTML += clutter;
}
const postName = document.querySelector("#postName");
const postImageURL = document.querySelector("#postImageURL");
const postCaption = document.querySelector("#postCaption");
const submitPost = document.querySelector("#submitPost");

submitPost.addEventListener("click", function () {
	const name = postName.value.trim();
	const imageURL = postImageURL.value.trim();
	const caption = postCaption.value.trim();
	const init = name
		.split(" ")
		.map((n) => n[0])
		.join("");

	addPost(name, init, imageURL, caption);
});

function addPost(name, init, imageURL, caption) {
	console.log(name, imageURL, init);
	arr.unshift({ name: name, init: init, img: imageURL, caption: caption });
	document.querySelector("#content").innerHTML = "";
	initcommunity();
}
initcommunity();
