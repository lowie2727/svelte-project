<script>
  import Footer from "../../components/portfolio/Footer.svelte";
  import "../../app.css";
  import PortfolioHeader from "../../components/portfolio/PortfolioHeader.svelte";
  let y;

  function goTop() {
    document.body.scrollIntoView();
  }
</script>

<div
  class="container relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen"
>
  <div
    class={"fixed bottom-0 w-full duration-200 flex p-10 z-[10] " +
      (y > 0
        ? " opacity-full pointer-events-auto"
        : " pointer-events-none opacity-0")}
  >
    <button
      on:click={goTop}
      class="grid place-items-center px-3 ml-auto text-violet-400 rounded-full cursor-pointer bg-slate-900 sm:px-4 hover:bg-slate-800 aspect-square"
    >
      <i class="fa-solid fa-arrow-up" />
    </button>
  </div>
  <PortfolioHeader {y} />
  <slot />
  <Footer />
</div>
<svelte:window bind:scrollY={y} />
