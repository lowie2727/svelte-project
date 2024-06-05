<script>
  import { onMount, onDestroy } from "svelte";
  import { checkUserStatus } from "$lib/utils/auth";
  import { logout } from "$lib/utils/auth";
  import { goto } from "$app/navigation";

  let isLoggedIn = false;
  let menuOpen = false;
  let loading = true;
  let dropdownRef;

  async function updateUserStatus() {
    isLoggedIn = await checkUserStatus();
    loading = false;
  }

  async function handleLogout() {
    try {
      await logout();
      isLoggedIn = false;
      goto("/");
    } catch (error) {
      isLoggedIn = true;
      console.error("Failed to logout:", error);
      alert("Failed to logout. Please try again.");
    }
  }

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  function closeMenu() {
    menuOpen = false;
  }

  function handleClickOutside(event) {
    if (dropdownRef && !dropdownRef.contains(event.target)) {
      closeMenu();
    }
  }

  onMount(() => {
    updateUserStatus();
    if (typeof document !== "undefined") {
      document.addEventListener("click", handleClickOutside);
    }
  });

  onDestroy(() => {
    if (typeof document !== "undefined") {
      document.removeEventListener("click", handleClickOutside);
    }
  });
</script>

<div class="inline-block relative" bind:this={dropdownRef}>
  {#if loading}
    <div class="loading-spinner">Loading...</div>
  {:else if isLoggedIn}
    <button
      class="overflow-hidden relative px-5 py-2 bg-white rounded-full shadow-lg group text-slate-950"
      on:click={toggleMenu}
    >
      <div
        class="absolute top-0 right-full z-0 w-full h-full bg-violet-900 opacity-20 duration-200 group-hover:translate-x-full"
      ></div>
      <h4 class="relative z-9">My Account</h4>
    </button>
    {#if menuOpen}
      <div
        class="absolute right-0 mt-2 w-48 text-white bg-gray-800 rounded-lg shadow-lg"
      >
        <a href="/account" class="block px-4 py-2 text-sm hover:bg-gray-600"
          >Settings</a
        >
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a
          href="#"
          on:click={handleLogout}
          class="block px-4 py-2 text-sm hover:bg-gray-600">Log out</a
        >
      </div>
    {/if}
  {:else}
    <a href="/login">
      <button
        class="overflow-hidden relative px-5 py-2 bg-white rounded-full shadow-lg group text-slate-950"
      >
        <div
          class="absolute top-0 right-full z-0 w-full h-full bg-violet-900 opacity-20 duration-200 group-hover:translate-x-full"
        ></div>
        <h4 class="relative z-9">Login</h4>
      </button>
    </a>
  {/if}
</div>
