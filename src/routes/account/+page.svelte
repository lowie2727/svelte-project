<script>
  import { updateProfile } from "$lib/utils/auth";

  export let data;
  let user = data.user;
  let userId = user.id;
  let userMetaData = data.userProfile;
  // let metaData =

  let email = user.email;
  let newFirstName = userMetaData.first_name;
  let newLastName = userMetaData.last_name;
  let errorMessage = data.errorMessage;
  let errorStatus;

  async function handleProfileUpdate() {
    const result = await updateProfile(userId, newFirstName, newLastName);
    errorStatus = result.errorStatus;
    errorMessage = result.errorMessage;
  }
</script>

<div
  class="flex flex-col justify-start items-center p-6 pt-24 text-white bg-dark"
>
  <form class="flex flex-col gap-3.5 mx-auto w-full max-w-md">
    <h1 class="mb-4 text-5xl text-center">Account</h1>
    {#if errorMessage}
      {#if errorStatus}
        <p class="text-red-500 text-[0.9rem] text-center">{errorMessage}</p>
      {:else}
        <p class="text-green-500 text-[0.9rem] text-center">{errorMessage}</p>
      {/if}
    {/if}

    <label
      class="relative border rounded-[5px] border-solid border-[orange] focus-within:border-blue-500"
    >
      <p
        class={`absolute transition-all duration-300 text-white ${email ? "bg-[navy] -top-3 left-4 px-1 text-[0.8rem] rounded" : "top-3 left-3 text-[1rem] opacity-0"}`}
      >
        Email
      </p>
      <input
        bind:value={email}
        type="email"
        placeholder="Email"
        class="p-3.5 w-full text-white bg-transparent border-none focus:border-none focus:outline-none"
        disabled
      />
    </label>
    <label
      class="relative border rounded-[5px] border-solid border-[orange] focus-within:border-blue-500"
    >
      <p
        class={`absolute transition-all duration-300 text-white ${newFirstName ? "bg-[navy] -top-3 left-4 px-1 text-[0.8rem] rounded" : "top-3 left-3 text-[1rem] opacity-0"}`}
      >
        First Name
      </p>
      <input
        bind:value={newFirstName}
        type="text"
        placeholder="First Name"
        class="p-3.5 w-full text-white bg-transparent border-none focus:border-none focus:outline-none"
      />
    </label>
    <label
      class="relative border rounded-[5px] border-solid border-[orange] focus-within:border-blue-500"
    >
      <p
        class={`absolute transition-all duration-300 text-white ${newLastName ? "bg-[navy] -top-3 left-4 px-1 text-[0.8rem] rounded" : "top-3 left-3 text-[1rem] opacity-0"}`}
      >
        Last Name
      </p>
      <input
        bind:value={newLastName}
        type="text"
        placeholder="Last Name"
        class="p-3.5 w-full text-white bg-transparent border-none focus:border-none focus:outline-none"
      />
    </label>
    <button
      on:click={handleProfileUpdate}
      type="button"
      class="bg-[navy] text-white cursor-pointer text-base px-0 py-3.5 rounded-[5px] border-none hover:bg-blue-700"
      >Update</button
    >
  </form>
</div>
