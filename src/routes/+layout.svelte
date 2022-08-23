<script>
import "../app.css"
import Footer from "../components/footer.svelte";
import Nav from "../components/nav.svelte";
</script>

<Nav/>
<div class="p-8 max-w-6xl mx-auto ">
    <div class="">
        <slot></slot>
    </div>
</div>
<Footer/>