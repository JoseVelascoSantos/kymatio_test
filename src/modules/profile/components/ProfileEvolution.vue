<template>
  <div class="d-flex flex-column rounded overflow-hidden w-100 profile-evolution-general-container">
    <div class="d-flex justify-content-between align-items-center p-1 text-white profile-evolution-header-container">
      <h5 class="m-0 position-relative px-3">
        Evolution
      </h5>
    </div>
    <div id="profile-evolution" />
  </div>
</template>

<script lang="ts">
import type {User} from "../models/User.ts";
import ApexCharts from 'apexcharts'
import {onMounted} from "vue";
import type {Evolution} from "../models/Evolution.ts";
import moment from "moment";

export default {
  setup({profile}) {

    onMounted(() => {
      const evolutionFormatted = profile.evolution.reduce(
          (act: any, evolution: Evolution) => {
            const key = moment(evolution.date).format("DD-MM-YYYY");
            if (act[key]) {
              return {...act, [key]: act[key] + evolution.value};
            } else {
              return {...act, [key]: evolution.value};
            }
          }, {}
      );
      const evolutionSorted = Object.entries(evolutionFormatted).sort(
          ([keyA], [keyB]) => new Date(keyA).getTime() - new Date(keyB).getTime()
      );

      const options = {
        chart: {
          type: 'line',
          height: 350,
          toolbar: {
            show: true,
          },
          zoom: {
            enabled: false, // Deshabilita el zoom
          },
          pan: {
            enabled: false, // Deshabilita el desplazamiento
          },
        },
        series: [{
          name: 'Value',
          data: evolutionSorted.map(([, value]) => value),
        }],
        xaxis: {
          categories: evolutionSorted.map(([key]) => key),
        },
        stroke: {
          curve: 'smooth',
          width: 3,
        },
        colors: ['var(--primary-color)']
      };

      const chart = new ApexCharts(document.querySelector("#profile-evolution"), options);

      chart.render();
    });
  },
  props: {
    profile: {
      type: Object as () => User,
      required: true,
    },
  },
};
</script>

<style>
.profile-evolution-general-container {
  border: 2px solid var(--primary-color);
}

.profile-evolution-header-container {
  background-color: var(--primary-color);
}
</style>
