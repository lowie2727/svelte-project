<script>
  import "../app.css";
    let y;
</script>

<div
  class="container relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen"
>
  <slot />
</div>
<svelte:window bind:scrollY={y} />
