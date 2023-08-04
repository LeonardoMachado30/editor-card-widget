export type IProps = {
  bg: string;
  text: string;
  font: {
    size: string;
    color: string;
    _x: number;
  };
  shape: { size: string };
  img: { hidden: boolean; size: Array<string> };
};

export const svgDefaultValue: IProps = {
  bg: "#000",
  text: "Olá Mundo",
  font: { size: "16", color: "#fff", _x: 320 },
  shape: { size: "md" },
  img: { hidden: false, size: ["100%", "calc(100% - 85%)"] },
};

export const svgDefaultProps = {
  shapeSize: ["sm", "md", "lg"],
  fontSize: ["16", "20", "24"],
  imgSize: [["5%", "100%"], "20", "24"],
};
