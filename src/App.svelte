<script>
	import { Router, Link, Route } from "svelte-routing";
	import Home from "./routes/Home.svelte";
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import Photos from "./routes/Photos.svelte";
	import Portfolio from "./routes/Portfolio.svelte";
	import Contact from "./routes/Contact.svelte";

	export let url = "";
</script>

<Router url="{url}">
	<Header />

	<div>
		<Route path="/"><Home /></Route>
		<Route path="photos"><Photos /></Route>
		<Route path="portfolio"><Portfolio /></Route>
		<Route path="contact"><Contact /></Route>
	</div>
	<Footer />
</Router>