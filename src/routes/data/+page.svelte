<script>
  import OutsideTemperatureCard from "../../components/sensors/OutsideTemperatureCard.svelte";
  import WindSpeedCard from "../../components/sensors/WindSpeedCard.svelte";
  import SolarIrradianceCard from "../../components/sensors/SolarIrradianceCard.svelte";
  import PotTemperatureCard from "../../components/sensors/PotTemperatureCard.svelte";

  import {
    csvHeaderString,
    fetchData,
    initializeHeaders,
    temperatureData,
    windSpeedData,
    solarIrradianceData,
    potTemperatureData1,
    potTemperatureData2,
    potTemperatureData3,
  } from "$lib/utils/testing-station-data";

  import { onMount } from "svelte";

  onMount(() => {
    initializeHeaders(csvHeaderString);

    async function initialFetch() {
      await fetchData();
    }

    initialFetch();
    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  });
</script>

<div class="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
  <OutsideTemperatureCard {temperatureData} />
  <WindSpeedCard {windSpeedData} />
  <SolarIrradianceCard {solarIrradianceData} />
  <PotTemperatureCard potTemperatureData={potTemperatureData1} index={0} />
  <PotTemperatureCard potTemperatureData={potTemperatureData2} index={1} />
  <PotTemperatureCard potTemperatureData={potTemperatureData3} index={2} />
</div>
