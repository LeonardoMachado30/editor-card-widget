import { Suspense, useContext } from "react";
import { IProps } from "@models";
import { SvgContext } from "@utils/Context";
// import { SvgContext } from "@utils/Context";

interface IParamsSvg {
  state?: IProps;
}

export default function SvgComponent({ state }: IParamsSvg): JSX.Element {
  const title = state?.text === null ? "text" : state?.text;

  return (
    <Suspense fallback={<div>loading...</div>}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xlinkHref="http://www.w3.org/1999/xlink"
        height={state?._shape?.height}
        width={state?._shape?.width}
        role="img"
        aria-label="HTML5"
      >
        <title>{title}</title>
        <rect
          width={state?._shape?.width}
          height={state?._shape?.height}
          fill={state?.bg}
        />
        <g
          width={state?._shape?.width}
          height={state?._shape?.height}
          shapeRendering="crispEdges"
          fontFamily="Verdana,Geneva,DejaVu Sans,sans-serif"
          textRendering="geometricPrecision"
        >
          <image
            x="9"
            y="7"
            width="14"
            height="14"
            xlinkHref="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPkhUTUw1PC90aXRsZT48cGF0aCBkPSJNMS41IDBoMjFsLTEuOTEgMjEuNTYzTDExLjk3NyAyNGwtOC41NjQtMi40MzhMMS41IDB6bTcuMDMxIDkuNzVsLS4yMzItMi43MTggMTAuMDU5LjAwMy4yMy0yLjYyMkw1LjQxMiA0LjQxbC42OTggOC4wMWg5LjEyNmwtLjMyNiAzLjQyNi0yLjkxLjgwNC0yLjk1NS0uODEtLjE4OC0yLjExSDYuMjQ4bC4zMyA0LjE3MUwxMiAxOS4zNTFsNS4zNzktMS40NDMuNzQ0LTguMTU3SDguNTMxeiIvPjwvc3ZnPg=="
          />
        </g>
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill={state?.font?.color}
          fontSize={state?.font?.size}
          fontWeight="bold"
        >
          {title}
        </text>
      </svg>
    </Suspense>
  );
}
