(function () {
  const CHART_JS_CDN = 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js';
  const CHART_DATA = {
    labels: ['比較対象 A', '比較対象 B', 'More Friends'],
    totals: [18900, 15800, 6600],
    base: [3900, 5000, 6600],
    multi: [10100, 9600, 0],
    first: [4900, 1200, 0],
  };

  function loadChartJs() {
    return new Promise((resolve, reject) => {
      if (window.Chart) {
        resolve(window.Chart);
        return;
      }

      const existing = document.querySelector('script[data-price-comparison-chartjs]');
      if (existing) {
        existing.addEventListener('load', () => resolve(window.Chart), { once: true });
        existing.addEventListener('error', () => reject(new Error('Chart.js failed to load.')), { once: true });
        return;
      }

      const script = document.createElement('script');
      script.src = CHART_JS_CDN;
      script.async = true;
      script.dataset.priceComparisonChartjs = 'true';
      script.onload = () => resolve(window.Chart);
      script.onerror = () => reject(new Error('Chart.js failed to load.'));
      document.head.appendChild(script);
    });
  }

  function createChart(Chart) {
    const canvas = document.getElementById('compChart');
    if (!canvas || canvas.dataset.chartInitialized === 'true') return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.dataset.chartInitialized = 'true';

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: CHART_DATA.labels,
        datasets: [
          {
            label: '基本60分料金',
            data: CHART_DATA.base,
            backgroundColor: '#704040',
            borderRadius: 0,
            borderSkipped: 'bottom',
          },
          {
            label: '多頭加算',
            data: CHART_DATA.multi,
            backgroundColor: '#C8607A',
            borderRadius: 0,
            borderSkipped: 'bottom',
          },
          {
            label: '初回加算',
            data: CHART_DATA.first,
            backgroundColor: '#F4C8D2',
            borderRadius: { topLeft: 4, topRight: 4 },
            borderSkipped: 'bottom',
            borderColor: '#C8607A',
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              footer(items) {
                const dataIndex = items[0]?.dataIndex ?? 0;
                return `合計: ¥${CHART_DATA.totals[dataIndex].toLocaleString()}`;
              },
            },
          },
        },
        layout: {
          padding: {
            top: 4,
          },
        },
        scales: {
          x: {
            stacked: true,
            grid: { display: false },
            border: { display: false },
            ticks: {
              color: '#26170F',
              font: {
                family: 'Zen Maru Gothic',
                size: 13,
              },
            },
          },
          y: {
            stacked: true,
            beginAtZero: true,
            max: 22000,
            grid: {
              color: 'rgba(38,23,15,0.1)',
            },
            border: {
              display: false,
            },
            ticks: {
              autoSkip: false,
              maxRotation: 0,
              stepSize: 5000,
              color: '#5A2A2A',
              font: {
                family: 'Zen Maru Gothic',
                size: 11,
              },
              callback(v) {
                return `¥${Number(v).toLocaleString()}`;
              },
            },
          },
        },
      },
    });
  }

  function init() {
    const canvas = document.getElementById('compChart');
    if (!canvas) return;

    loadChartJs()
      .then(createChart)
      .catch(() => {
        // No-op: keep the fallback text visible if Chart.js cannot load.
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
