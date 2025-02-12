import React from 'react';

function HeroBackground() {
    return (
        <svg
            width="100%"
            height="auto"
            viewBox="0 0 338.66666 190.5"
            version="1.1"
            preserveAspectRatio="none"
            style={{ display: "block" }} // Prevents extra spacing issues
        >


            <defs>
                <linearGradient id="linearGradient2">
                    <stop style={{ stopColor: "#002255", stopOpacity: 1 }} offset="0" />
                    <stop style={{ stopColor: "#002255", stopOpacity: 0 }} offset="1" />
                </linearGradient>
                <linearGradient
                    xlinkHref="#linearGradient2"
                    id="linearGradient3"
                    x1="-0.084"
                    y1="90.32"
                    x2="211.52"
                    y2="90.28"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(1.5,0,0,1,0,0)"
                />
            </defs>
            <rect
                style={{ fill: "url(#linearGradient3)" }}
                width="100%"
                height="100%"
                x="0"
                y="0"
            />
            <path
                style={{ fill: "#dbe3e2", fillOpacity: 0.56 }}
                d="M 316.03,0.18 248.28,27.70 l 46.58,28.83 43.81,-33.03 0.06,-23.43 z"
            />
        </svg>
    )
}

export default HeroBackground;