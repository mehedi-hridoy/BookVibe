import React, { useMemo } from 'react';
import { useLoaderData } from 'react-router-dom';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    RadialLinearScale,
    Title,
} from 'chart.js';
import { Doughnut, Bar, Line } from 'react-chartjs-2';

// Register required components once
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    RadialLinearScale,
    Title
);


const Pages = () => {
        const raw = useLoaderData();
        const data = useMemo(() => raw || [], [raw]);

    // Derive datasets with memo for perf
    const { topPages, yearLabels, yearCounts, topRatings } = useMemo(() => {
        const books = Array.isArray(data) ? data : [];

        // Top by total pages (desc), take up to 8 for readability
        const topPages = [...books]
            .sort((a, b) => (b.totalPages ?? 0) - (a.totalPages ?? 0))
            .slice(0, 8);

        // Year distribution
        const yearMap = new Map();
        for (const b of books) {
            const y = b.yearOfPublishing ?? 'N/A';
            yearMap.set(y, (yearMap.get(y) || 0) + 1);
        }
        const yearLabels = [...yearMap.keys()].sort((a, b) => Number(a) - Number(b));
        const yearCounts = yearLabels.map((y) => yearMap.get(y));

        // Top ratings (desc), up to 8
        const topRatings = [...books]
            .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))
            .slice(0, 8);

        return { topPages, yearLabels, yearCounts, topRatings };
    }, [data]);

    // Color palettes
    const palette = [
        '#22c55e', // green-500
        '#60a5fa', // blue-400
        '#f59e0b', // amber-500
        '#a78bfa', // violet-400
        '#fb7185', // rose-400
        '#34d399', // emerald-400
        '#f97316', // orange-500
        '#38bdf8', // sky-400
        '#e879f9', // fuchsia-400
        '#84cc16', // lime-500
    ];

    // Bar: Pages per book (top 8)
    const pagesBarData = {
        labels: topPages.map((b) => b.bookName),
        datasets: [
            {
                label: 'Total Pages',
                data: topPages.map((b) => b.totalPages ?? 0),
                backgroundColor: topPages.map((_, i) => palette[i % palette.length] + '80'),
                borderColor: topPages.map((_, i) => palette[i % palette.length]),
                borderWidth: 1.5,
                borderRadius: 8,
            },
        ],
    };
    const pagesBarOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: true },
        },
        scales: {
            x: { grid: { display: false } },
            y: { grid: { color: '#f1f5f9' } },
        },
    };

    // Doughnut: Publishing year distribution
    const yearDoughnutData = {
        labels: yearLabels,
        datasets: [
            {
                label: 'Books',
                data: yearCounts,
                backgroundColor: yearLabels.map((_, i) => palette[i % palette.length] + '90'),
                borderColor: '#ffffff',
                borderWidth: 2,
                hoverOffset: 6,
            },
        ],
    };
    const yearDoughnutOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'bottom' },
        },
        cutout: '62%',
    };

    // Line: Ratings per book (top 8)
    const ratingLineData = {
        labels: topRatings.map((b) => b.bookName),
        datasets: [
            {
                label: 'Rating',
                data: topRatings.map((b) => Number(b.rating ?? 0)),
                borderColor: '#60a5fa',
                backgroundColor: 'rgba(96,165,250,0.25)',
                pointBackgroundColor: '#1d4ed8',
                pointBorderColor: '#fff',
                pointRadius: 4,
                pointHoverRadius: 6,
                fill: true,
                tension: 0.35,
            },
        ],
    };
    const ratingLineOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
        },
        scales: {
            y: { min: 0, max: 5, ticks: { stepSize: 1 }, grid: { color: '#f1f5f9' } },
            x: { grid: { display: false } },
        },
    };

    const isEmpty = !Array.isArray(data) || data.length === 0;

    return (
        <section className="my-10 ">
            <h2 className="text-4xl font-extrabold font-serif text-center mb-8">Insights</h2>

            {isEmpty ? (
                <p className="text-center text-gray-600">No data available to render charts.</p>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-60">
                    
                    <div className="rounded-2xl border border-gray-200 shadow-sm p-6 bg-white">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">Top Books by Pages</h3>
                            <span className="text-sm text-gray-500">Top {topPages.length}</span>
                        </div>
                        <div className="h-64">
                            <Bar data={pagesBarData} options={pagesBarOptions} />
                        </div>
                        <p className="mt-3 text-xs text-gray-500">Sorted by total pages (desc).</p>
                    </div>

                
                    <div className="rounded-2xl border border-gray-200 shadow-sm p-6 bg-white">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">Publishing Year</h3>
                            <span className="text-sm text-gray-500">{yearLabels.length} yrs</span>
                        </div>
                        <div className="h-64">
                            <Doughnut data={yearDoughnutData} options={yearDoughnutOptions} />
                        </div>
                        <p className="mt-3 text-xs text-gray-500">Distribution of books by year.</p>
                    </div>

                    
                    <div className="rounded-2xl border border-gray-200 shadow-sm p-6 bg-white">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">Top Ratings</h3>
                            <span className="text-sm text-gray-500">Top {topRatings.length}</span>
                        </div>
                        <div className="h-64">
                            <Line data={ratingLineData} options={ratingLineOptions} />
                        </div>
                        <p className="mt-3 text-xs text-gray-500">Scaled 0 to 5.</p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Pages;