<script>
  export let step;
</script>

<a
  href={step.href}
  target="_blank"
  class="flex flex-col gap-4 p-4 text-center rounded-lg border border-violet-700 border-solid duration-200 cursor-pointer sm:p-6 md:p-8 group hover:border-violet-400"
>
  <div
    class="grid place-items-center px-4 mx-auto -mt-10 text-5xl duration-200 bg-slate-950 md:text-6xl sm:-mt-12 md:-mt-14 lg:-mt-16"
  >
    <i class={step.icon}></i>
  </div>
  <h3 class="text-xl font-medium sm:text-2xl md:text-3xl">
    {step.name}
  </h3>
  <slot></slot>
  <div class="flex flex-1 gap-4 justify-between items-center">
    <div
      class="ml-auto cursor-pointer hover:text-slate-950 duration-200 relative after:absolute after:top-0 after:h-full after:right-full after:w-full after:bg-white after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden"
    >
      <p class="relative z-4">Go to &rarr;</p>
    </div>
  </div>
</a>
