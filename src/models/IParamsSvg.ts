export type IProps = {
  bg: "#000" | string;
  text: string;
  font: {
    size: number;
    color: "#fff" | string;
    _x: 320 | number;
  };
  _shape: { width: 100 | number; height: 28 | number };
};

export const svgDefaultValue = {
  bg: "#000",
  text: "Olá Mundo",
  font: { size: 16, color: "#fff", _x: 320 },
  _shape: { width: 132, height: 28 },
};
