var arr = [
	{ name: "John Doe", init: "JD", img: "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
	{ name: "Jane Doe", init: "JD", img: "https://images.unsplash.com/photo-1634170380003-3e3e3e3e3e3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjIwNzR8MHwxfGFsbHwxfHx8fHx8fHx8fHwxNjM0MzYwNzIw&ixlib=rb-1.2.1&q=80&w=400" },
	{ name: "John Doe", init: "JD", img: "https://images.unsplash.com/photo-1634170380003-3e3e3e3e3e3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjIwNzR8MHwxfGFsbHwxfHx8fHx8fHx8fHwxNjM0MzYwNzIw&ixlib=rb-1.2.1&q=80&w=400" },
	{ name: "Jane Doe", init: "JD", img: "https://images.unsplash.com/photo-1634170380003-3e3e3e3e3e3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjIwNzR8MHwxfGFsbHwxfHx8fHx8fHx8fHwxNjM0MzYwNzIw&ixlib=rb-1.2.1&q=80&w=400" },
	{ name: "John Doe", init: "JD", img: "https://images.unsplash.com/photo-1634170380003-3e3e3e3e3e3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjIwNzR8MHwxfGFsbHwxfHx8fHx8fHx8fHwxNjM0MzYwNzIw&ixlib=rb-1.2.1&q=80&w=400" },
	{ name: "Jane Doe", init: "JD", img: "https://images.unsplash.com/photo-1634170380003-3e3e3e3e3e3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjIwNzR8MHwxfGFsbHwxfHx8fHx8fHx8fHwxNjM0MzYwNzIw&ixlib=rb-1.2.1&q=80&w=400" },
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
    "Luna", "Max", "Ruby", "Oliver", "Zoe", "Leo", "Ava", "Dexter", "Mia", "Charlie",
    "Sophie", "Rocky", "Stella", "Oscar", "Bella", "Cooper", "Lucy", "Teddy", "Chloe", "Apollo",
    "Nova", "Finn", "Lily", "Jasper", "Cleo", "Milo", "Lola", "Cody", "Layla", "Winston",
    "Penny", "Zeus", "Ivy", "Ollie", "Maya", "Bruno", "Hazel", "Riley", "Sadie", "Duke",
    "Maddie", "Thor", "Willow", "Coco", "Rusty", "Piper", "Hank", "Maisy", "Jack"
  ];
  
function initcommunity() {
	var clutter = "";
	arr.forEach((obj) => {
		clutter += `<div class="space-y-4 post bg-slate-100 rounded-md">
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
                        class="aspect-video object-scale-down img-fluid" />
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
                                href="#">
                                ${randomFirstNames[Math.floor(Math.random() * randomFirstNames.length)]}
                            </a>
                            ${dogComments[Math.floor(Math.random() * dogComments.length)]}
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
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

	addPost(name, init, imageURL);
});

function addPost(name, init, imageURL) {
	console.log(name, imageURL, init);
	arr.unshift({ name: name, init: init, img: imageURL });
	document.querySelector("#content").innerHTML = "";
	initcommunity();
}
initcommunity();
