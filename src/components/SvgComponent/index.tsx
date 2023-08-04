import { IProps } from "@models";
import SvgController from "@controller/SvgController";


interface IParamsSvg {
  state: IProps;
}
//TODO: redimensionar o texto em 2 dimensôes:
// X e Y
// Altura e Largura
// Ao redimensionar o Corpo (shape) não deve redimensionar a texto
// Ao redimensionar o texto deve redicmensionar o Corpo (shape)
export default function SvgComponent({ state }: IParamsSvg): JSX.Element {
  const title = state?.text === null ? "text" : state?.text;
  const svgController = new SvgController(state);
  const fontResizeFromImgHidden = svgController.handleFontResizeFromImgHidden();
  const textProps = svgController.handleResizeShapeFromText();
  const ResizeFontSize = svgController.setResizeFontSize();
  const shapeSize = svgController.setResizeShapeSize();
  const shapeSizeWidth = shapeSize[0];
  const shapeSizeHeight = shapeSize[1];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xlinkHref="http://www.w3.org/1999/xlink"
      height={shapeSizeHeight}
      width={shapeSizeWidth}
      role="img"
      aria-label="HTML5"
    >
      <title>{title}</title>
      <rect
        height={shapeSizeHeight}
        width={shapeSizeWidth}
        fill={state?.bg}
        transform={`1`}
      />

      {!state.img.hidden && !fontResizeFromImgHidden ? (
        <ImageSvg height={shapeSizeHeight} width={shapeSizeWidth} />
      ) : (
        ""
      )}

      <text
        shapeRendering="crispEdges"
        fontFamily="Verdana,Geneva,DejaVu Sans,sans-serif"
        textRendering="geometricPrecision"
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill={state?.font?.color}
        fontSize={ResizeFontSize}
        fontWeight="bold"
      >
        {textProps?.text}
      </text>
    </svg>
  );
}

interface IImageSvg {
  height: number;
  width: number;
}
//TODO: redimensionar a imagem em 2 dimensôes:
// X e Y
// Altura e Largura
// Ao redimensionar o Corpo (shape) não deve redimensionar a imagem
// Ao redimensionar a imagem deve redicmensionar o Corpo (shape)
const ImageSvg = ({ height, width }: IImageSvg) => {
  return (
    <image
      x="2%"
      y={`0`}
      height={`100% `}
      width={`calc(100% - 85%)`}
      xlinkHref="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPkhUTUw1PC90aXRsZT48cGF0aCBkPSJNMS41IDBoMjFsLTEuOTEgMjEuNTYzTDExLjk3NyAyNGwtOC41NjQtMi40MzhMMS41IDB6bTcuMDMxIDkuNzVsLS4yMzItMi43MTggMTAuMDU5LjAwMy4yMy0yLjYyMkw1LjQxMiA0LjQxbC42OTggOC4wMWg5LjEyNmwtLjMyNiAzLjQyNi0yLjkxLjgwNC0yLjk1NS0uODEtLjE4OC0yLjExSDYuMjQ4bC4zMyA0LjE3MUwxMiAxOS4zNTFsNS4zNzktMS40NDMuNzQ0LTguMTU3SDguNTMxeiIvPjwvc3ZnPg=="
    />
  );
};
