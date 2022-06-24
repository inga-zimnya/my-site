<script lang="ts">
    interface Post {
        userId: number;
        id: number;
        title: string;
        body: string;
    }

    const getDogImg = document.getElementById('getJsonPH');
    const urlForJPH = "https://jsonplaceholder.typicode.com/posts/";
    let part1 = '';
    let part2 = '';

    function fetchJPH(): Promise<Post> {
        return fetch(urlForJPH + Math.floor(Math.random() * (101)).toString())
            .then(r => r.json());
    }

    function consoleJPH(jph: Post){
        part1 = "Title: " + jph.title;
        part2 = "Body: " + jph.body;
    }

  async function handle(e) {
        part1 = "Loading...";
        part2 = '';
        const JPH = await fetchJPH();
        consoleJPH(JPH);
    }
</script>

<main class="container">
    <h2> - About me -</h2>

    <div class="container">
        <div class="row">
            <div class="col-auto">
                <img src ="./images/inga.jpg" width="250px"/>
            </div>
            <div class="col">
                    <pre>
                    ░░░░░░░░░░░░░░░░░░░░
                    ░░░░░ЗАПУСКАЕМ░░░░░░░
                    ░ГУСЯ░▄▀▀▀▄░РАБОТЯГИ░░
                    ▄███▀░◐░░░▌░░░░░░░░░
                    ░░░░▌░░░░░▐░░░░░░░░░
                    ░░░░▐░░░░░▐░░░░░░░░░
                    ░░░░▌░░░░░▐▄▄░░░░░░░
                    ░░░░▌░░░░▄▀▒▒▀▀▀▀▄
                    ░░░▐░░░░▐▒▒▒▒▒▒▒▒▀▀▄
                    ░░░▐░░░░▐▄▒▒▒▒▒▒▒▒▒▒▀▄
                    ░░░░▀▄░░░░▀▄▒▒▒▒▒▒▒▒▒▒▀▄
                    ░░░░░░▀▄▄▄▄▄█▄▄▄▄▄▄▄▄▄▄▄▀▄
                    ░░░░░░░░░░░▌▌░▌▌░░░░░
                    ░░░░░░░░░░░▌▌░▌▌░░░░░
                    ░░░░░░░░░▄▄▌▌▄▌▌░░░░░</pre>
            </div>
            <div class="col">
                <img src ="./images/inga10.jpg" width="250px"/>
            </div>
        </div>
    </div>
    <br>
    <p>Hello, I'm Inga Ezhova (probably, you already know it).
    <p>Right now I'm first year bachelor student at Innopolis University. I can't even explain how happy I am that I study there. </p>
    <p style="margin-block-start: 0;"><u>What can I say about me?</u></p>
    <ul style="margin-block-start: 0;">
        <li>I'm from Tomsk.</li>
        <li>I like to drink tea and to adore geese.</li>
        <li>I was awarded as "chelovek-orchestr" because of my activity. </li>
    </ul>
    <p>And no, purple is not my favourite color(just in case)</p>

    <button id="getJsonPH" class="custom-btn btn-2" on:click={handle}>Let's create json place holder</button>
    <span class="text-muted" style="font-family: Monaco; margin-left: 50px">
                P.S.: This button I made for my homework, so don't mind it.</span>
    <p id="part1">{part1}</p><p id="part2">{part2}</p>
</main>


