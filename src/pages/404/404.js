import React from "react";
import "./404.scss";

const PageNotFound = () => {
  return (
    <div className="error404">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1020 630"
        preserveAspectRatio="xMinYMid slice"
      >
        <defs>
          <linearGradient id="d" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset={0} />
            <stop style={{ stopColor: "#0f1419" }} offset="0.55" />
            <stop style={{ stopColor: "#132333" }} offset="0.85" />
            <stop style={{ stopColor: "#3f2016" }} offset={1} />
          </linearGradient>
          <radialGradient
            id="b"
            cx={120}
            gradientUnits="userSpaceOnUse"
            cy={255}
            r={40}
            gradientTransform="matrix(1 0 0 .25 0 191.25)"
          >
            <stop
              style={{ stopColor: "#fffbeb", stopOpacity: ".472" }}
              offset={0}
            />
            <stop
              style={{ stopColor: "#fff8de", stopOpacity: ".072" }}
              offset={1}
            />
          </radialGradient>
          <radialGradient id="ceiling-light">
            <stop
              offset={0}
              style={{ stopColor: "#fffbeb", stopOpacity: "0.4" }}
            />
            <stop
              offset={1}
              style={{ stopColor: "#fff8de", stopOpacity: "0.07" }}
            />
          </radialGradient>
          <radialGradient id="a">
            <stop
              style={{ stopColor: "#fff", stopOpacity: ".648" }}
              offset={0}
            />
            <stop
              style={{ stopColor: "#fffbeb", stopOpacity: ".184" }}
              offset={1}
            />
          </radialGradient>
          <linearGradient id="c">
            <stop style={{ stopColor: "#fffae7" }} offset={0} />
            <stop style={{ stopColor: "#fffae7", stopOpacity: 0 }} offset={1} />
          </linearGradient>
          <filter
            id="g"
            style={{ colorInterpolationFilters: "sRGB" }}
            height="1.2853"
            width="1.1447"
            y="-.14267"
            x="-.072338"
          >
            <feGaussianBlur stdDeviation="10.7" />
          </filter>
          <filter
            id="f"
            style={{ colorInterpolationFilters: "sRGB" }}
            height="1.697"
            width="3.178"
            y="-.34848"
            x="-1.089"
          >
            <feGaussianBlur stdDeviation="3.3396" />
          </filter>
          <filter
            id="e"
            style={{ colorInterpolationFilters: "sRGB" }}
            height="1.9602"
            width="1.32"
            y="-.48011"
            x="-.15999"
          >
            <feGaussianBlur stdDeviation="2.6664689" />
          </filter>
          <path
            id="hullam"
            d="m-100 520 l0-70 a20 20 180 0 0 40 0 20 20 180 0 0 40 0 20 20 180 0 0 40 0 20 20 180 0 0 40 0 20 20 180 0 0 40 0 20 20 180 0 0 40 0 20 20 180 0 0 40 0 20 20 180 0 0 40 0 20 20 180 0 0 40 0 20 20 180 0 0 40 0 20 20 180 0 0 40 0 20 20 180 0 0 40 0 20 20 180 0 0 40 0 20 20 180 0 0 40 0 20 20 180 0 0 40 0 20 20 180 0 0 40 0 20 20 180 0 0 40 0 20 20 180 0 0 40 0 20 20 180 0 0 40 0 20 20 180 0 0 40 0 20 20 180 0 0 40 0 20 20 180 0 0 40 0 20 20 180 0 0 40 0 20 20 180 0 0 40 0 20 20 180 0 0 40 0 20 20 180 0 0 40 0 20 20 180 0 0 40 0 20 20 180 0 0 40 0 20 20 180 0 0 40 0 l0 70z"
          />
          <path
            id="cloud1"
            d="M0 70a12.5 12.5 0 0 1 0-25,30 30 0 0 1 50-30, 11 11 0 0 1 20 7, 15 15 0 0 1 15 20, 14 14 0 0 1 0 28 z"
          />
          <path
            id="cloud2"
            d="M0 70a12.5 12.5 0 0 1 0-25, 20 20 0 0 1 46-13, 15 15 0 0 1 25 5, 5 5 0 0 1 7 0, 15 15 0 0 1 21-15,25.5 25.5 0 0 1 50-3, 20 20 0 0 1 26 26, 12.5 12.5 0 0 1 0 25z"
          />
          <path
            id="cloud3"
            d="M0 70a12 12 0 0 1 0-24l2.5 0a21 21 0 0 1 40-13,14 14 0 0 1 17 15l2.5 0a10 10 0 0 1 0 22z"
          />
          <path
            id="cloud4"
            d="M0 70a10 10 0 0 1 0-20l2.5 0a10 10 0 0 1 23-8,10 10 0 0 1 12-2,15 15 0 0 1 24-14,20 20 0 0 1 32 25,10 10 0 0 1 0 19z"
          />
          <path
            id="cloud5"
            d="M0 70a10 10 0 0 1 0-20l4 0a19 19 0 0 1 23-25,13 13 0 0 1 24-2,4 4 0 0 1 5-2,20 20 0 0 1 32-19,17 17 0 0 1 30 10,25 25 0 0 1 19 38,10 10 0 0 1 0 20z"
          />
          <path
            id="cloud6"
            d="M0 70a10 10 0 0 1 0-25,21 21 0 0 1 36-18,10 10 0 0 1 14-3,14 14 0 0 1 25-10,25 25 0 0 1 37 32,10 10 0 0 1 0 24z"
          />
          <path
            id="cloud7"
            d="M0 70a10 10 0 0 1 0-20 15 15 0 0 1 27-12,20 20 0 0 1 42 12 10 10 0 0 1 0 20z"
          />
          <g id="clouds">
            <use
              className="cloud"
              transform="matrix(1.3,0,0,1.3,180,10)"
              xlinkHref="#cloud2"
              style={{ fill: "#192335" }}
            />
            <use
              className="cloud"
              transform="matrix(1,0,0,1,55,35)"
              xlinkHref="#cloud5"
              style={{ fill: "#162d50" }}
            />
            <use
              className="cloud"
              transform="matrix(-.8,0,0,.8,150,60)"
              xlinkHref="#cloud1"
              style={{ fill: "#1b3865" }}
            />
            <use
              className="cloud"
              transform="matrix(1,0,0,1,410,120)"
              xlinkHref="#cloud1"
              style={{ fill: "#162d50" }}
            />
            <use
              className="cloud"
              transform="matrix(-1,0,0,1,620,260)"
              xlinkHref="#cloud2"
              style={{ fill: "#122032" }}
            />
            <use
              className="cloud"
              transform="matrix(1,0,0,1,20,130)"
              xlinkHref="#cloud3"
              style={{ fill: "#1b3357" }}
            />
            <use
              className="cloud"
              transform="matrix(-.9,0,0,.9,390,220)"
              xlinkHref="#cloud3"
              style={{ fill: "#16325c" }}
            />
            <use
              className="cloud"
              transform="matrix(1,0,0,1,0,230)"
              xlinkHref="#cloud1"
              style={{ fill: "#12202d" }}
            />
            <use
              className="cloud"
              transform="matrix(1.6,0,0,1.6,520,10)"
              xlinkHref="#cloud6"
              style={{ fill: "#142440" }}
            />
            <use
              className="cloud"
              transform="matrix(-.8,0,0,.8,740,40)"
              xlinkHref="#cloud1"
              style={{ fill: "#173057" }}
            />
            <use
              className="cloud"
              transform="matrix(1,0,0,1,190,155)"
              xlinkHref="#cloud6"
              style={{ fill: "#162846" }}
            />
            <use
              className="cloud"
              transform="matrix(1,0,0,1,180,70)"
              xlinkHref="#cloud7"
              style={{ fill: "#183868" }}
            />
            <use
              className="cloud"
              transform="matrix(-1,0,0,1,300,320)"
              xlinkHref="#cloud2"
              style={{ fill: "#122137" }}
            />
            <use
              className="cloud"
              transform="matrix(1.3,0,0,1.3,820,50)"
              xlinkHref="#cloud5"
              style={{ fill: "#162d50" }}
            />
            <use
              className="cloud"
              transform="matrix(1.2,0,0,1.2,920,20)"
              xlinkHref="#cloud1"
              style={{ fill: "#12202d" }}
            />
            <use
              className="cloud"
              transform="matrix(1.2,0,0,1.2,830,130)"
              xlinkHref="#cloud4"
              style={{ fill: "#12213a" }}
            />
            <use
              className="cloud"
              transform="matrix(-1.1,0,0,1.1,840,120)"
              xlinkHref="#cloud5"
              style={{ fill: "#162d50" }}
            />
            <use
              className="cloud"
              transform="matrix(-1.1,0,0,1.1,710,130)"
              xlinkHref="#cloud7"
              style={{ fill: "#183868" }}
            />
            <use
              className="cloud"
              transform="matrix(-1.2,0,0,1.2,850,145)"
              xlinkHref="#cloud4"
              style={{ fill: "#1c345a" }}
            />
            <use
              className="cloud"
              transform="matrix(-1.6,0,0,1.6,900,260)"
              xlinkHref="#cloud4"
              style={{ fill: "#122137" }}
            />
            <use
              className="cloud"
              transform="matrix(-1,0,0,1,1150,260)"
              xlinkHref="#cloud2"
              style={{ fill: "#1c2e47" }}
            />
          </g>
          <circle r="1.5" cy={190} cx={440} id="star" />
        </defs>
        <g className="bg">
          <rect style={{ fill: "url(#d)" }} height={530} width={1020} />
          <g className="stars">
            <circle cx={614} cy={197} r="1.28" />
            <circle cx={810} cy={225} r="1.506" />
            <circle cx={315} cy={399} r="1.44" />
            <circle cx={357} cy={43} r="1.315" />
            <circle cx={927} cy={230} r="1.238" />
            <circle cx={920} cy={-0} r="1.699" />
            <circle cx={1001} cy={68} r="1.599" />
            <circle cx={51} cy={189} r="1.742" />
            <circle cx={577} cy={103} r="1.637" />
            <circle cx={751} cy={392} r="1.149" />
            <circle cx={706} cy={294} r="1.657" />
            <circle cx={999} cy={179} r="1.358" />
            <circle cx={235} cy={87} r="1.067" />
            <circle cx={1010} cy={344} r="1.311" />
            <circle cx={561} cy={412} r="1.488" />
            <circle cx={833} cy={431} r="1.486" />
            <circle cx={526} cy={321} r="1.626" />
            <circle cx={516} cy={36} r="1.45" />
            <circle cx={1024} cy={494} r="1.146" />
            <circle cx={369} cy={295} r="1.381" />
            <circle cx={816} cy={97} r="1.423" />
            <circle cx={69} cy={294} r="1.59" />
            <circle cx={896} cy={319} r="1.390" />
            <circle cx={92} cy={66} r="1.252" />
            <circle cx={450} cy={185} r="1.185" />
            <circle cx={651} cy={391} r="1.365" />
            <circle cx={401} cy={467} r="1.586" />
            <circle cx={275} cy={258} r="1.212" />
            <circle cx={684} cy={74} r="1.639" />
            <circle cx={936} cy={125} r="1.725" />
            <circle cx={180} cy={179} r="1.577" />
            <circle cx={63} cy={439} r="1.502" />
          </g>
          <g className="clouds">
            <use xlinkHref="#clouds" x={1020} />
            <use xlinkHref="#clouds" />
            <use xlinkHref="#clouds" x={-1020} />
          </g>
        </g>
        <g>
          <use
            className="hullam"
            xlinkHref="#hullam"
            x={-15}
            style={{ fill: "#12202e" }}
          />
          <use
            className="hullam"
            xlinkHref="#hullam"
            y={12}
            style={{ fill: "#0f1a25" }}
          />
          <use
            className="hullam"
            xlinkHref="#hullam"
            y={24}
            x={-17}
            style={{ fill: "#1d3247" }}
          />
          <use
            className="hullam"
            xlinkHref="#hullam"
            y={36}
            style={{ fill: "#122537" }}
          />
          <use
            className="hullam"
            xlinkHref="#hullam"
            y={48}
            x={-15}
            style={{ fill: "#102133" }}
          />
          <use
            className="hullam"
            xlinkHref="#hullam"
            y={60}
            style={{ fill: "#0f273d" }}
          />
        </g>
        <g transform="translate(50,-130)">
          <ellipse
            style={{ fill: "#0d0f25" }}
            rx={42}
            ry={12}
            cy={255}
            cx={120}
          />
          <path
            style={{ opacity: ".05", fill: "#fff" }}
            d="m80 255v70h80v-70a40 10 0 0 1 -40 10 40 10 0 0 1 -40 -10z"
          />
          <path
            style={{ fill: "#090e11" }}
            d="m115 282a4 12.5 0 0 0 -4 12.5 4 12.5 0 0 0 4 12.5h10v-25h-10z"
          />
          <ellipse
            style={{ fill: "#0a0b0b" }}
            rx={4}
            ry="12.5"
            cy="294.5"
            cx={125}
          />
          <rect
            style={{ fill: "#020202" }}
            height={9}
            width={2}
            y={306}
            x={118}
          />
        </g>
        <g id="light">
          <path
            id="light-ray"
            d="m 175,153 0,23 615,134 0,-270 z"
            style={{ fill: "url(#c)", filter: "url(#g)" }}
          />
          <ellipse
            ry="11.5"
            rx="3.68"
            cy="164.5"
            cx={175}
            id="lampLight"
            style={{ fill: "#fffae7" }}
          />
          <use xlinkHref="#lampLight" style={{ filter: "url(#f)" }} />
          <ellipse
            style={{ fill: "url(#ceiling-light)" }}
            id="ellipse4238"
            cx={170}
            cy={125}
            rx={40}
            ry={10}
          />
          <path
            d="m 190.22334,116.37222 a 40,10 0 0 1 15.07991,13.32938 L 170,125 Z"
            id="ellipse4274"
            style={{ fill: "url(#a)", filter: "url(#e)" }}
          />
        </g>
        <g>
          <path
            style={{ fill: "#121212" }}
            d="m-20,598 c 10,-19 28,-31 38,-51 15,-10 21,-31 21,-52 6,-20 26,-22 41,-26 17,-7 32,-24 51,-25 15,-1 28,-14 42,-15 19,0 39,-9 57,0 14,4 27,20 25,40 -3,22 2,43 13,60 4,19 -3,39 -1,59 z"
          />
          <path
            style={{ fill: "#0b2323" }}
            d="m 56,470 c 5,-3 14,-5 18,-10 l 3,0 c 2,0 4,-2 6,-3 4,-2 11,-3 17,-5 5,-2 6,-7 11,-10 l 97,-20 c 4,0 21,1 22,4 4,4 12,8 17,14 3,4 8,10 8,16 0,4-5,6-7,5-12,-3-24,9-36,12 l-10,0 c-1,0-3,2-5,2-7,2-17,3-24,6 0,0-4,-3-11,0-3,2-7,4-11,6-2,1-3,4-5,5-2,1-8,2-10,4-1,1 0,4-1,6-3,3-24,7-29,7-2,0-3,-2-5,-3-5,0-11,1-15,0-3,0-4,-3-7,-4 l-18,1 c-4,3-6,0-10,-2 l-5,0 c-1,0-1,-2-3,-3 0,0-5,3-6,-1 0,0 1,-8 3,-11 0,0-2,0 1,-3 7,-2 10,-10 15,-13 z"
          />
          <path
            style={{ fill: "#113" }}
            d="m117 258-10 250 7.955-22.77 114.04-54.23-6-173v-8l-53.04-4.77-52.96 4.77z"
          />
          <path
            style={{ fill: "#341e1e" }}
            d="m169.96 253.98c-24.5 0-49.124 2.7589-53.124 8.2589l-2.8175 70.438c0.77206-18.993 109.9-48.839 109.13-70.449-4-5.5-28.691-8.248-53.191-8.248zm56.188 94.64c0.95825 27.61-114.71 48.502-115.84 76.742l-3.31 82.64c28-38 93-43 122-77z"
          />
          <path
            style={{ fill: "#595959" }}
            d="m223.29 266.24c0.77693 22.421-108.68 52.941-109.43 70.263l-3.2632 81.581c1.1849-29.149 116.19-50.833 115.38-74.134z"
          />
          <path
            style={{ fill: "#0b2323" }}
            d="m 222,435 c-2,3-4,9-10,8-4,4-9,6-13,9-2,2-6,-1-8,3-2,3-6,5-11,7-4,3-9,5-14,7-3,3-8,2-12,5-3,3-10,1-13,6-4,4-11,5-16,9-3,4-10,2-13,8-2,5-8,6-10,11-3,3 9,2 11,2 l 122,-77 c-1,0-2,-3-5,-4 z"
          />
          <path
            style={{
              strokeLinejoin: "round",
              stroke: "#595959",
              strokeLinecap: "round",
              strokeWidth: 2,
              fill: "#0c0e22"
            }}
            d="m148.881 412.16c3.5529-3.1792 6.3833-2.204 9 0v34h-9z"
          />
          <path
            style={{ opacity: "0.03", fill: "#fff" }}
            d="m129.955 120.23v75h80v-75l-40-10z"
          />
          <path
            style={{ opacity: ".1", enableBackground: "new" }}
            d="m138.484 117.88c6.805 37.97 36.696 55.77 71.516 65.52v11.6h-80v-75l8.4844-2.1211z"
          />
          <path
            style={{ fill: "#151c40" }}
            d="m170 79.36c-1 0-4.1394 0.39186-5.1875 2.6875-1.1408 2.4986 0.1875 5.3125 0.1875 5.3125s-1.4688 0-1.4688 1 1.4688 1 1.4688 1v2s-2 0-2 1v2c-24 17-35 19-35 26v5c0.0052 1.237 0.67984 2.4664 2 3.6445v-3.6445c0-5 17-10 40-10s40 5 40 10v3.64c1.3202-1.1781 1.9948-2.4075 2-3.6445v-5c0-7-11-9-35-26v-2c0-1-2-1-2-1v-2s1.4688 0 1.4688-1-1.4688-1-1.4688-1 1.3283-2.8139 0.1875-5.3125c-1.05-2.3-4.19-2.69-5.19-2.69zm0 91.64c-12.212 0-23.264 1.1192-31.334 2.9531-4.2519 1.1823-13.405 3.1315-13.666 8.0469v9.8809c-2.5267 1.0812-4 2.1579-4 3.1191v6c0 1 3 1 3 2v0.6543c-5.9277 1.1399-10.893 2.518-14.307 4.0703-2.419 1.1925-5.6377 3.0046-5.6934 5.7754v27.5c0 4 13 10 13 17 0-7 23-9 53-9s53 2 53 9c0-7 13-13 13-17v-27.5c-0.0557-2.7708-3.2744-4.5829-5.6934-5.7754-3.42-1.55-8.38-2.93-14.31-4.07v-0.65c0-1 3-1 3-2v-6c0-0.96126-1.4733-2.0379-4-3.1191v-9.88c-0.26059-4.9153-9.4141-6.8646-13.666-8.0469-8.07-1.83-19.12-2.95-31.33-2.95zm-1 2.0117v12.004c-7.5445 0.0518-15.135 0.67886-22 1.6445v-12.162c6.41-0.89 13.92-1.44 22-1.48zm2 0c8.0765 0.0417 15.594 0.58338 22 1.4863v12.162c-6.8652-0.96568-14.455-1.5927-22-1.6445zm-26 1.7793v12.164c-4.0228 0.61661-7.7408 1.34-11 2.125v-11.771c3.697-1.1999 7.4607-1.9523 11-2.5176zm50 0c3.5393 0.56529 7.303 1.3176 11 2.5176v11.771c-3.2592-0.78505-6.9772-1.5084-11-2.125zm-63 3.2539v7.8945c-2.035-0.7809-4.3304-2.1192-5-3.9394 0.90375-2.2426 3.1028-3.1491 5-3.9551zm76 0c1.8972 0.80597 4.0962 1.7125 5 3.9551-0.66962 1.8203-2.965 3.1586-5 3.9394zm-81 7.4258c1.5187 1.2116 3.3434 1.9938 5 2.6172v1.5c-1.8686 0.4941-3.55 1.003-5 1.5195zm86 0v5.6367c-1.45-0.51648-3.1314-1.0254-5-1.5195v-1.5c1.6566-0.62342 3.4813-1.4056 5-2.6172zm-89 20.219v15.621c-3.6583-0.71098-6.8657-1.508-9.5195-2.3613v-10.898c2.6538-0.85334 5.8613-1.6504 9.5195-2.3613zm92 0c3.6583 0.71098 6.8657 1.508 9.5195 2.3613v10.898c-2.6538 0.85334-5.8613 1.6504-9.5195 2.3613zm-103.52 3.0586v9.5039c-2.5134-0.99294-5.7285-2.6142-6.4805-4.752 1.2906-2.7199 4.0466-3.8092 6.4805-4.752zm115.04 0c2.4339 0.94279 5.1899 2.0321 6.4805 4.752-0.75201 2.1377-3.967 3.759-6.4805 4.752zm-121.52 8.3047c2.0815 1.602 4.215 2.5296 6.4805 3.3379v5.8379c-2.8079 0.73435-5.0211 1.5338-6.4805 2.3906zm128 0v11.566c-1.4594-0.85685-3.6725-1.6563-6.4805-2.3906v-5.8379c2.2655-0.80831 4.399-1.7359 6.4805-3.3379zm-119.52 3.9961c2.6872 0.83105 5.9747 1.6152 9.5195 2.2969v0.66407c-3.54 0.52302-6.7501 1.1048-9.5195 1.7422zm111.04 0v4.7031c-2.7694-0.63742-5.9795-1.2192-9.5195-1.7422v-0.66407c3.5448-0.68169 6.8323-1.4658 9.5195-2.2969z"
          />
        </g>
        <g>
          <use
            id="hullam5"
            className="hullam"
            xlinkHref="#hullam"
            y={72}
            x={-13}
            style={{ fill: "#0f1a25" }}
          />
          <use
            id="hullam8"
            className="hullam"
            xlinkHref="#hullam"
            y={84}
            style={{ fill: "#1d3245" }}
          />
          <use
            id="hullam9"
            className="hullam"
            xlinkHref="#hullam"
            y={96}
            x={-15}
            style={{ fill: "#122537" }}
          />
          <use
            id="hullam10"
            className="hullam"
            xlinkHref="#hullam"
            y={108}
            style={{ fill: "#102133" }}
          />
          <use
            id="hullam11"
            className="hullam"
            xlinkHref="#hullam"
            y={120}
            x={-17}
            style={{ fill: "#1d3247" }}
          />
          <use
            id="hullam12"
            className="hullam"
            xlinkHref="#hullam"
            y={132}
            style={{ fill: "#0e2b44" }}
          />
        </g>
      </svg>

      <div className="message container">
        <h1>Ooops!</h1>
        <h2>Something went wrong...</h2>
      </div>
    </div>
  );
};

export default PageNotFound;
