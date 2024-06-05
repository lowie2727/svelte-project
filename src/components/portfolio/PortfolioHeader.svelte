<script>
  export let y;
  let tabs = [
    { name: "Projects", link: "#projects" },
    { name: "About me", link: "#about" },
  ];

  let menuOpen = false;

  function toggleMenu() {
    menuOpen = !menuOpen;
  }
</script>

<header
  class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border border-solid " +
    (y > 0
      ? "py-4 bg-slate-950 border-violet-950"
      : "py-6 bg-transparent border-white")}
>
  <h1 class="font-medium cursor-pointer">
    <a href="/"><b class="font-bold poppins">Main</b> Menu</a>
  </h1>
  <div class="hidden gap-4 items-center ml-auto sm:flex">
    {#each tabs as tab, index}
      <a href={tab.link} class="duration-200 hover:text-violet-400">
        <p>{tab.name}</p>
      </a>
    {/each}
  </div>
  <div class="flex items-center ml-auto sm:hidden">
    <button class="text-white" on:click={toggleMenu}>
      {#if menuOpen}
        <i class="fas fa-times"></i> <!-- Font Awesome close icon -->
      {:else}
        <i class="fas fa-bars"></i> <!-- Font Awesome menu icon -->
      {/if}
    </button>
  </div>
</header>

<!-- Fullscreen overlay menu for small screens -->
<div
  class={"fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-20 flex flex-col items-center justify-center " +
    (menuOpen ? "block" : "hidden")}
>
  <button class="absolute top-4 right-4 text-white" on:click={toggleMenu}>
    <i class="fas fa-times"></i>
    <!-- Font Awesome close icon -->
  </button>
  <h1 class="text-lg">--- Page navigation ---</h1>
  {#each tabs as tab, index}
    <a
      href={tab.link}
      class="my-2 text-xl text-white duration-200 hover:text-violet-400"
      on:click={toggleMenu}
    >
      {tab.name}
    </a>
  {/each}
</div>
