import { IProps, svgDefaultValue } from "@models";
import { svgDefaultProps } from "@models/IParamsSvg";

interface IText {
  text: string | null;
  textLenght: number;
  newSizeFont: string;
}

interface IConvertUrl {
  uri: IProps | string[];
}

export default class SvgController {
  constructor(private state = svgDefaultValue) {}

  handleResizeShapeFromText(): IText | null {
    /* TODO: Criar a regra de quando o dimensionamento e:
      sm e 24 e > 8 caracteres = diminui a fonte
      sm e 24 e > 8 caracteres = diminui a fonte
    */

    const sizeFont = this.state?.font?.size;
    const sizeShape = this.state?.shape?.size;
    const textLenght = this.state?.text?.length as number;
    let newSizeFont = this.state?.font?.size;

    // if (this.state?.font?.size === 24) return null;

    const text =
      typeof this.state?.text !== "undefined" ? this.state?.text : null;

    return { text, textLenght, newSizeFont };
  }

  handleFontResizeFromImgHidden(): boolean | string | undefined {
    const sizeFont = this.state?.font?.size.toString();
    const sizeShape = this.state?.shape?.size;
    if (sizeShape === "sm")
      return sizeFont === "24" ? true : sizeFont === "20" && true;
  }

  setResizeFontSize() {
    const sizeFont = this.state?.font?.size;
    switch (sizeFont) {
      case "16":
        return sizeFont;
      case "20":
        return sizeFont;
      case "24":
        return sizeFont;
      default:
        return sizeFont;
    }
  }

  setResizeShapeSize(): Array<number> {
    const sizeShape = this.state?.shape.size;
    const sizeFont = this.state?.font?.size;
    const textLenght = this.state?.text?.length as number;
    const hiddenImg = this.state.img.hidden;
    const widthDefult = 150;
    const calcWidth = textLenght * 10 + widthDefult;
    const calcWidthWithoutImg = textLenght * 8 + widthDefult;
    return svgDefaultProps.shapeSize.map((value) => {
      if (sizeFont === "24") {
        textLenght >= 8 ? [calcWidth, 30] : [widthDefult, 30];
      }

      if (sizeShape === "lg") {
        return [250, 70];
      } else if (sizeShape === "md") {
        return [200, 50];
      } else {
        return [150, 30];
      }
    })[0];
  }

  convertUrlInObject(uri = svgDefaultValue) {
    // for (const i in uri) {
    //   console.log(uri);
    // }

    return uri;
  }

  url(_props?: IProps): string {
    const value = _props || this.state;
    const text =
      value?.text !== "" ? `text=${value?.text.replace(/\s/g, "%20")}` : "";
    const shapeSize = `shapesize=${value?.shape.size}`;
    const bg = `bg=${value?.bg}`;
    const fontsize = `fontsize=${value?.font.size}`;
    const fontcolor = `fontcolor=${value?.font.color}`;

    return `/${text}/${bg}/${fontsize}/${fontcolor}/${shapeSize}`;
  }
}
