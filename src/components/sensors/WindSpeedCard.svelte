<script>
  export let windSpeedData;
</script>

<div
  class="flex relative flex-col justify-between p-5 pb-0 h-52 bg-blue-800 rounded-lg shadow-lg transition duration-300"
>
  <div
    class="absolute top-2.5 right-2.5 px-6 py-1.5 text-xs font-bold text-black bg-blue-600 rounded-full shadow-md"
  >
    <i class="fas fa-wind"></i> WIND SPEED (m/s)
  </div>
  <div class="flex flex-col flex-grow justify-center items-center">
    <p class="m-0 text-5xl font-bold text-white">
      {windSpeedData.speed}
    </p>
    <p class="text-xs text-gray-300">
      <i class="far fa-clock"></i>
      {windSpeedData.lastUpdated}
    </p>
  </div>
  <div
    class="box-border flex absolute bottom-0 left-0 justify-between px-5 py-2.5 w-full text-black bg-blue-600 rounded-b-lg"
  >
    <div class="w-1/2 text-center">
      <i class="fas fa-long-arrow-alt-down"></i> Min: {windSpeedData.minSpeed} m/s
    </div>
    <div class="w-1/2 text-center">
      <i class="fas fa-long-arrow-alt-up"></i> Max: {windSpeedData.maxSpeed} m/s
    </div>
  </div>
</div>
