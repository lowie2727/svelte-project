<script>
  export let solarIrradianceData;
</script>

<div
  class="flex relative flex-col justify-between p-5 pb-0 h-52 bg-yellow-800 rounded-lg shadow-lg transition duration-300"
>
  <div
    class="absolute top-2.5 right-2.5 px-6 py-1.5 text-xs font-bold text-black bg-yellow-600 rounded-full shadow-md"
  >
    <i class="fas fa-sun"></i> IRRADIANCE (W/m²)
  </div>
  <div class="flex flex-col flex-grow justify-center items-center">
    <p class="m-0 text-5xl font-bold text-white">
      {solarIrradianceData.irradiance}
    </p>
    <p class="text-xs text-gray-300">
      <i class="far fa-clock"></i>
      {solarIrradianceData.lastUpdated}
    </p>
  </div>
  <div
    class="box-border flex absolute bottom-0 left-0 justify-between px-5 py-2.5 w-full text-black bg-yellow-600 rounded-b-lg"
  >
    <div class="w-1/2 text-center">
      <i class="fas fa-long-arrow-alt-down"></i> Min: {solarIrradianceData.minIrradiance}
      W/m²
    </div>
    <div class="w-1/2 text-center">
      <i class="fas fa-long-arrow-alt-up"></i> Max: {solarIrradianceData.maxIrradiance}
      W/m²
    </div>
  </div>
</div>
