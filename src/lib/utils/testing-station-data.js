import { onMount } from "svelte";

export const csvHeaderString =
  "Year;Month;Day;Hour;Minute;Second;Outside temperature[°C];Wind speed [m/s];Air pressure (inside box) [hPa];Relative humidity (inside box) [%];Temperature inside pot 1 [°C];Temperature inside pot 2 [°C];Temperature inside pot 3 [°C];Solar irradiance [W/m²]";

export let allData = [];
export let columnData = [];
export let maxValues = [];
export let minValues = [];
export let headers = [];
export let lastFetchTime = "";

export let temperatureData = {
  temp: 0,
  lastUpdated: "1970-01-01 00:00:00",
  minTemp: 0,
  maxTemp: 0,
};

export let windSpeedData = {
  speed: 0,
  lastUpdated: "1970-01-01 00:00:00",
  minSpeed: 0,
  maxSpeed: 0,
};

export let solarIrradianceData = {
  irradiance: 0,
  lastUpdated: "1970-01-01 00:00:00",
  minIrradiance: 0,
  maxIrradiance: 0,
};

export let potTemperatureData1 = {
  temp: 0,
  lastUpdated: "1970-01-01 00:00:00",
  minTemp: 0,
  maxTemp: 0,
};

export let potTemperatureData2 = {
  temp: 0,
  lastUpdated: "1970-01-01 00:00:00",
  minTemp: 0,
  maxTemp: 0,
};

export let potTemperatureData3 = {
  temp: 0,
  lastUpdated: "1970-01-01 00:00:00",
  minTemp: 0,
  maxTemp: 0,
};

export async function fetchData() {
  try {
    const response = await fetch("/api/receive-data", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    allData = result.receivedData;
    processColumns(allData);
    if (allData.length > 0) {
      lastFetchTime = formatDate(allData[allData.length - 1].slice(0, 6));
      updateTemperatureData(allData);
      updateWindSpeedData(allData);
      updateSolarIrradianceData(allData);
      updatePotTemperatureData(allData);
    }
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
}

export function processColumns(data) {
  if (data.length > 0) {
    columnData = Array.from({ length: data[0].length }, () => []);
    maxValues = Array(data[0].length).fill(Number.NEGATIVE_INFINITY);
    minValues = Array(data[0].length).fill(Number.POSITIVE_INFINITY);

    data.forEach((row) => {
      row.forEach((value, index) => {
        const numericValue = Number(value);
        columnData[index].push(numericValue);

        if (numericValue > maxValues[index]) {
          maxValues[index] = numericValue;
        }

        if (numericValue < minValues[index]) {
          minValues[index] = numericValue;
        }
      });
    });
  }
}

export function initializeHeaders(headerString) {
  headers = headerString.split(";");
}

export function formatDate(row) {
  const [year, month, day, hour, minute, second] = row;
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

export function updateTemperatureData(data) {
  const tempColumnIndex = 6;
  const temps = data.map((row) => Number(row[tempColumnIndex]));
  const currentTemp = temps[temps.length - 1];
  const minTemp = Math.min(...temps);
  const maxTemp = Math.max(...temps);

  temperatureData = {
    temp: currentTemp,
    lastUpdated: lastFetchTime,
    minTemp: minTemp,
    maxTemp: maxTemp,
  };
}

export function updateWindSpeedData(data) {
  const windSpeedColumnIndex = 7;
  const speeds = data.map((row) => Number(row[windSpeedColumnIndex]));
  const currentSpeed = speeds[speeds.length - 1];
  const minSpeed = Math.min(...speeds);
  const maxSpeed = Math.max(...speeds);

  windSpeedData = {
    speed: currentSpeed,
    lastUpdated: lastFetchTime,
    minSpeed: minSpeed,
    maxSpeed: maxSpeed,
  };
}

export function updateSolarIrradianceData(data) {
  const irradianceColumnIndex = 13;
  const irradiances = data.map((row) => Number(row[irradianceColumnIndex]));
  const currentIrradiance = irradiances[irradiances.length - 1];
  const minIrradiance = Math.min(...irradiances);
  const maxIrradiance = Math.max(...irradiances);

  solarIrradianceData = {
    irradiance: currentIrradiance,
    lastUpdated: lastFetchTime,
    minIrradiance: minIrradiance,
    maxIrradiance: maxIrradiance,
  };
}

export function updatePotTemperatureData(data) {
  const potTempIndices = [10, 11, 12];

  const updatePotData = (potIndex) => {
    const temps = data
      .map((row) => row[potTempIndices[potIndex]])
      .filter((value) => !isNaN(value) && value !== "x")
      .map(Number);

    if (temps.length > 0) {
      const currentTemp = temps[temps.length - 1];
      const minTemp = Math.min(...temps);
      const maxTemp = Math.max(...temps);

      switch (potIndex) {
        case 0:
          potTemperatureData1 = {
            temp: currentTemp,
            lastUpdated: lastFetchTime,
            minTemp: minTemp,
            maxTemp: maxTemp,
          };
          break;
        case 1:
          potTemperatureData2 = {
            temp: currentTemp,
            lastUpdated: lastFetchTime,
            minTemp: minTemp,
            maxTemp: maxTemp,
          };
          break;
        case 2:
          potTemperatureData3 = {
            temp: currentTemp,
            lastUpdated: lastFetchTime,
            minTemp: minTemp,
            maxTemp: maxTemp,
          };
          break;
      }
    }
  };

  updatePotData(0);
  updatePotData(1);
  updatePotData(2);
}
