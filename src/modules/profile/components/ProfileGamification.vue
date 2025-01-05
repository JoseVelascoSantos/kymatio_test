<template>
  <div class="d-flex flex-column rounded overflow-hidden w-100 profile-gamification-general-container">
    <div class="d-flex justify-content-between align-items-center p-1 text-white profile-gamification-header-container">
      <h5 class="m-0 position-relative px-3">
        Gamification
      </h5>
    </div>
    <div id="profile-gamification" />
  </div>
</template>

<script lang="ts">
import type {User} from "../models/User.ts";
import ApexCharts from 'apexcharts'
import {onMounted} from "vue";
import type {Timeline} from "../models/Timeline.ts";

export default {
  setup({profile}) {

    onMounted(() => {
      const timelineSorted = profile.timeline.sort(
          (a: Timeline, b: Timeline) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
      );



      function getIconForType(type) {
        const icons = {
          phishing: '🎣',
          cybersecurity: '👮🏻'
        };
        return icons[type] || '❓';
      }

      const options = {
        series: [{
          data: timelineSorted.map((timelineItem: Timeline) => ({
            x: `${timelineItem.title} ${getIconForType(timelineItem.type)}`,
            y: [
              new Date(timelineItem.startDate).getTime(),
              new Date().getTime(),
            ],
          }))
        }],
        chart: {
          height: 400,
          type: "rangeBar",
          zoom: {
            enabled: false,
          },
          pan: {
            enabled: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: "50%",
            dataLabels: {
              position: "center",
            },
          },
        },
        xaxis: {
          type: "datetime",
        },
        yaxis: {
          labels: {
            show: false,
          }
        },
        legend: {
          show: false
        },
        dataLabels: {
          enabled: true, // Habilitar etiquetas
          formatter: function (_val: any, opts: any) {
            return opts.w.globals.labels[opts.dataPointIndex];
          },
          style: {
            colors: ["#ffffff"],
            fontSize: "16px",
            fontWeight: "bold",
          },
        },
        colors: ['var(--primary-color)']
      };


      var chart = new ApexCharts(document.querySelector("#profile-gamification"), options);

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
.profile-gamification-general-container {
  border: 2px solid var(--primary-color);
}

.profile-gamification-header-container {
  background-color: var(--primary-color);
}
</style>
