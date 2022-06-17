interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const getDogImg = document.getElementById('getJsonPH');
const urlForJPH = "https://jsonplaceholder.typicode.com/posts/";
const part1 = document.getElementById('part1');
const part2 = document.getElementById('part2');


function fetchJPH(): Promise<Post> {
    return fetch(urlForJPH + Math.floor(Math.random() * (101)).toString())
        .then(r => r.json());

}

function consoleJPH(jph: Post){
    part1.textContent = "Title: " + jph.title;
    part2.textContent = "Body: " + jph.body;
}


getDogImg.addEventListener('click', async function (e) {
    part1.textContent = "Loading...";
    part2.textContent = '';
    const JPH = await fetchJPH();
    consoleJPH(JPH);
});