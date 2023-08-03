import { IProps, svgDefaultValue } from "@models";

// interface ISet {
//   prop: IProps;
//   param: string;
// }

export default class SvgController {
  private props: IProps = svgDefaultValue;

  // private _calcShapeWidth(value: string) {
  //   return value.length * (value.length < 8 ? 2 : 8) + this.props._shape.width;
  // }

  // get(prop: string[]) {
  //   let _: ISet;
  //   for (const value of prop) {
  //     _ = this.set(value);
  //   }
  //   // return _;
  // }

  // replaceURL(param: string) {
  //   return param.replace(/.+%3D/g, "");
  // }

  // set(param: string): ISet {
  //   const paramReplace = this.replaceURL(param);
  //   const _ = this.props;

  //   if (param.includes("bg")) {
  //     this.bg(paramReplace);
  //   } else if (param.includes("text")) {
  //     _.text = paramReplace.toLocaleUpperCase();
  //     _.font._x = (paramReplace.length * 10) / 2 + _.font._x;
  //     _._shape.width = this._calcShapeWidth(paramReplace);
  //   } else if (param.includes("fontsize")) {
  //     if (parseInt(paramReplace) >= 100 && parseInt(paramReplace) <= 150)
  //       _.font.size = parseInt(paramReplace);
  //   }
  //   return { prop: _, param };
  // }

  // bg(value?: string) {
  //   if (value === "fff") {
  //     this.props.font.color = "000";
  //   } else if (value === "000") {
  //     this.props.font.color = "fff";
  //   }
  // }

  url(_props?: IProps): string {
    const value = _props || this.props;
    const text =
      value.text !== "" ? `/text=${value.text.replace(" ", "%20")}` : "";
    return `${text}/bg=${value?.bg}/fontsize=${value.font.size}/fontcolor=${value.font.color}`;
  }
}
