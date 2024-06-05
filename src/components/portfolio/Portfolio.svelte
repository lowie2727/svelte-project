<script>
  import Step from "./Step.svelte";

  let steps = [
    {
      name: "Project 1",
      icon: "fa-solid fa-cart-shopping",
      href: "https://duckduckgo.com",
    },
    {
      name: "Project 2",
      icon: "fa-solid fa-cart-shopping",
      href: "https://duckduckgo.com",
    },
    {
      name: "Project 3",
      icon: "fa-solid fa-cart-shopping",
      href: "https://duckduckgo.com",
    },
  ];

  let benefits = [
    {
      name: "benefit1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl. A diam sollicitudin tempor id. Felis donec et odio pellentesque diam volutpat commodo. Posuere morbi leo urna molestie. Non pulvinar neque laoreet suspendisse. At augue eget arcu dictum varius duis at. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in. Nec ullamcorper sit amet risus nullam eget felis eget. Ut pharetra sit amet aliquam id diam maecenas ultricies mi. Aliquet enim tortor at auctor.",
    },
    {
      name: "benefit2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl. A diam sollicitudin tempor id. Felis donec et odio pellentesque diam volutpat commodo. Posuere morbi leo urna molestie. Non pulvinar neque laoreet suspendisse. At augue eget arcu dictum varius duis at. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in. Nec ullamcorper sit amet risus nullam eget felis eget. Ut pharetra sit amet aliquam id diam maecenas ultricies mi. Aliquet enim tortor at auctor.",
    },
    {
      name: "benefit3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl. A diam sollicitudin tempor id. Felis donec et odio pellentesque diam volutpat commodo. Posuere morbi leo urna molestie. Non pulvinar neque laoreet suspendisse. At augue eget arcu dictum varius duis at. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in. Nec ullamcorper sit amet risus nullam eget felis eget. Ut pharetra sit amet aliquam id diam maecenas ultricies mi. Aliquet enim tortor at auctor.",
    },
  ];
</script>

<main class="flex flex-col flex-1 p-4">
  <section
    id="introPage"
    class="grid grid-cols-1 gap-10 py-8 lg:grid-cols-2 sm:py-14"
  >
    <div
      class="flex flex-col gap-6 text-center lg:justify-center lg:text-left md:gap-8 lg:gap-10"
    >
      <h2 class="text-4xl font-semibold sm:text-5xl md:text-6xl">
        Hi! I'm <span class="text-violet-400 poppins">Lowie</span> Van Vyve
        <br />
        Full Stack Web
        <span class="text-violet-400 poppins">Developer</span>
      </h2>
      <p class="text-base sm:text-lg md:text-xl">
        Read <span class="text-violet-400">this</span> you will not.
      </p>
      <a
        class="overflow-hidden relative px-6 py-3 mx-auto text-base bg-white rounded-full cursor-pointer blueShadow lg:mr-auto lg:ml-0 sm:text-lg md:text-xl poppins group text-slate-950"
        href="https://duckduckgo.com"
        target="_blank"
      >
        <div
          class="absolute top-0 right-full z-0 w-full h-full bg-violet-400 opacity-20 duration-200 group-hover:translate-x-full"
        ></div>
        <h4 class="relative z-9">Get in touch &rarr;</h4>
      </a>
    </div>
    <div class="grid relative place-items-center shadow-2xl">
      <img
        src={"images/profile.png"}
        alt="my face"
        class="object-cover z-[2] max-h-[70vh]"
      />
    </div>
  </section>

  <section id="projects" class="flex flex-col gap-24 py-20 lg:py-32">
    <div class="flex flex-col gap-2 text-center">
      <h6 class="text-lg sm:text-xl md:text-2xl">
        A few of my creative endeavors.
      </h6>
      <h3 class="text-3xl font-semibold sm:text-4xl md:text-5xl">
        Curious to <span class="text-violet-400 poppins">see</span> my work?
      </h3>
    </div>
    <a
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      target="_blank"
      class="flex gap-2 items-center px-4 py-2 mx-auto -mt-10 -mb-4 rounded-md border border-white border-solid duration-200 sm:-mb-0 hover:border-violet-700"
    >
      <i class="fa-regular fa-circle-play"></i>
      <p>Watch the video</p>
    </a>

    <div class="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-10">
      <Step step={steps[0]}>
        <p>
          Lorem, ipsum dolor sit amet <strong class="text-violet-400"
            >consectetur</strong
          > adipisicing elit. , necessitatibus enim non esse corrupti beatae minima
          praesentium et perspiciatis iure. Iste nisi numquam, harum voluptates impedit
          atque perspiciatis aliquid cumque?
        </p>
      </Step>
      <Step step={steps[1]}>
        <p>
          Lorem, ipsum dolor sit amet <strong class="text-violet-400"
            >consectetur</strong
          > adipisicing elit. , necessitatibus enim non esse corrupti beatae minima
          praesentium et perspiciatis iure. Iste nisi numquam, harum voluptates impedit
          atque perspiciatis aliquid cumque?
        </p>
      </Step>
      <Step step={steps[2]}>
        <p>
          Lorem, ipsum dolor sit amet <strong class="text-violet-400"
            >consectetur</strong
          > adipisicing elit. , necessitatibus enim non esse corrupti beatae minima
          praesentium et perspiciatis iure. Iste nisi numquam, harum voluptates impedit
          atque perspiciatis aliquid cumque?
        </p>
      </Step>
    </div>
  </section>

  <section
    id="about"
    class="flex relative flex-col gap-16 py-20 pt-10 lg:pt-16 lg:py-32 sm:gap-20 md:gap-24"
  >
    <div
      class="flex relative flex-col gap-2 py-4 text-center before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700"
    >
      <h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6>
      <h3 class="text-3xl font-semibold sm:text-4xl md:text-5xl">
        A bit <span class="text-violet-400 poppins"> about</span> me.
      </h3>
    </div>
    <p
      class="mx-auto mb-0 text-lg font-semibold poppins sm:text-xl md:text-2xl"
    >
      I am . . .
    </p>
    <p
      class="mx-auto mt-[-0.5rem] text-lg font-semibold poppins sm:text-xl md:text-2xl"
    >
      your father
    </p>

    <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
      {#each benefits as benefit, index}
        <div class="flex gap-6 sm:gap-8">
          <p
            class="text-4xl font-semibold poppins sm:text-5xl md:text-6xl text-slate-500"
          >
            0{index + 1}
          </p>
          <div class="flex flex-col gap-6 sm:gap-8">
            <h3 class="text-2xl sm:text-3xl md:text-5xl">
              {benefit.name}
            </h3>
            <p>{benefit.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </section>
</main>
