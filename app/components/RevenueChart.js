"use client";

import {
  CategoryScale,
  Chart,
  Filler,
  Legend,
  LineController,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import { useEffect, useRef } from "react";

Chart.register(
  CategoryScale,
  Filler,
  Legend,
  LineController,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
);

export default function RevenueChart() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return undefined;
    }

    const chart = new Chart(canvasRef.current, {
      type: "line",
      data: {
        labels: ["12 Feb", "13 Feb", "14 Feb", "15 Feb", "16 Feb"],
        datasets: [
          {
            label: "Revenue",
            data: [3000, 8000, 12000, 9000, 13000],
            borderColor: "#198754",
            backgroundColor: "rgba(25, 135, 84, 0.12)",
            borderWidth: 2,
            fill: true,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: "rgba(33, 37, 41, 0.08)",
            },
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className="chart-wrap">
      <canvas ref={canvasRef} aria-label="Revenue overview chart" />
    </div>
  );
}
