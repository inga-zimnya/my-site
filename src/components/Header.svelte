<script>
    import {Link} from "svelte-routing";
</script>

<nav class="navbar navbar-expand-md fixed-top bg-col">
    <div class="container-fluid">
        <span class="navbar-brand" style="font-family:'Luminari'">Inga Dmitrievna Ezhova</span>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
                <li class="nav-item">
                    <Link class="nav-link active text-muted" aria-current="page" to="/">About me</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link active text-muted" aria-current="page" to="photos">Photos</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link active text-muted" aria-current="page" to="portfolio">Portfolio</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link active text-muted" aria-current="page" to="contact">Contact Me</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>