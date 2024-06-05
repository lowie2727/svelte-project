<script>
  import { goto } from "$app/navigation";
  import { login } from "$lib/utils/auth";
  import { signUpNewUser } from "$lib/utils/auth";

  let email = "";
  let password = "";
  let confirmPass = "";
  let errorMessage = "";
  let errorStatus = false;
  let register = false;
  let passwordRef;
  let confirmPassRef;

  async function handleSignUp() {
    const result = await signUpNewUser(email, password);
    errorStatus = result.errorStatus;
    errorMessage = result.errorMessage;
  }

  async function handleEmailLogin() {
    try {
      await login(email, password);
      goto("/account");
    } catch {
      errorMessage = "check the console for errors";
    }
  }

  function handleAuthenticate() {
    if (!email || !password || (register && !confirmPass)) {
      errorStatus = true;
      errorMessage = "Please fill in all fields";
      return;
    }

    if (register) {
      if (password !== confirmPass) {
        errorStatus = true;
        errorMessage = "Passwords do not match";
        return;
      }
      handleSignUp();
    } else {
      handleEmailLogin();
    }
  }

  function handleRegister() {
    register = !register;
    errorMessage = "";
  }

  function handleEmailKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      passwordRef.focus();
    }
  }

  function handlePasswordKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      if (register) {
        confirmPassRef.focus();
      } else {
        handleAuthenticate();
      }
    }
  }

  function handleConfirmPassKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAuthenticate();
    }
  }
</script>

<div
  class="flex flex-col justify-start items-center p-6 pt-24 text-white bg-dark"
>
  <form class="flex flex-col gap-3.5 mx-auto w-full max-w-md">
    <h1 class="mb-4 text-5xl text-center">{register ? "Register" : "Login"}</h1>
    {#if errorMessage}
      <p
        class={`text-[0.9rem] text-center ${errorStatus ? "text-red-500" : "text-green-500"}`}
      >
        {errorMessage}
      </p>
    {/if}

    <label
      class="relative rounded-md border border-solid border-[orange] focus-within:border-blue-500"
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
        on:keydown={handleEmailKeyDown}
        class="p-3.5 w-full text-white bg-transparent border-none focus:border-none focus:outline-none"
      />
    </label>

    <label
      class="relative rounded-md border border-solid border-[orange] focus-within:border-blue-500"
    >
      <p
        class={`absolute transition-all duration-300 text-white ${password ? "bg-[navy] -top-3 left-4 px-1 text-[0.8rem] rounded" : "top-3 left-3 text-[1rem] opacity-0"}`}
      >
        Password
      </p>
      <input
        bind:value={password}
        type="password"
        placeholder="Password"
        bind:this={passwordRef}
        on:keydown={handlePasswordKeyDown}
        class="p-3.5 w-full text-white bg-transparent border-none focus:border-none focus:outline-none"
      />
    </label>

    {#if register}
      <label
        class="relative rounded-md border border-solid border-[orange] focus-within:border-blue-500"
      >
        <p
          class={`absolute transition-all duration-300 text-white ${confirmPass ? "bg-[navy] -top-3 left-4 px-1 text-[0.8rem] rounded" : "top-3 left-3 text-[1rem] opacity-0"}`}
        >
          Confirm Password
        </p>
        <input
          bind:value={confirmPass}
          type="password"
          placeholder="Confirm Password"
          bind:this={confirmPassRef}
          on:keydown={handleConfirmPassKeyDown}
          class="p-3.5 w-full text-white bg-transparent border-none focus:border-none focus:outline-none"
        />
      </label>
    {/if}

    <button
      on:click={handleAuthenticate}
      type="button"
      class="px-0 py-3.5 text-base text-white rounded-md border-none cursor-pointer bg-[navy] hover:bg-blue-700"
    >
      Submit
    </button>
  </form>

  <div
    class="flex flex-col gap-1 py-2 w-full max-w-md mx-auto overflow-hidden text-[0.9rem]"
  >
    <div class="flex gap-2 justify-center items-center my-0">
      <div class="flex-grow border-t border-white"></div>
      <span class="mx-2">Or</span>
      <div class="flex-grow border-t border-white"></div>
    </div>

    {#if register}
      <div class="flex gap-1 justify-center items-center mt-0">
        <p>Already have an account?</p>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <p on:click={handleRegister} class="text-cyan-500 cursor-pointer">
          Login
        </p>
      </div>
    {:else}
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <div class="flex gap-1 justify-center items-center mt-0">
        <p>Don't have an account?</p>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <p on:click={handleRegister} class="text-cyan-500 cursor-pointer">
          Register
        </p>
      </div>
    {/if}
  </div>
</div>
