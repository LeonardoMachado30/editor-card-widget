"use client";

import { MouseEventHandler, useContext, useState } from "react";
import { SvgContext } from "@utils/Context";
import { SvgComponent } from "@components";
import TextField from "@mui/material/TextField";
import SvgController from "@controller/SvgController";
import CopyAllOutlinedIcon from "@mui/icons-material/CopyAllOutlined";
import BackspaceIcon from "@mui/icons-material/Backspace";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Switch from "@mui/material/Switch";
import { FormControlLabel } from "@mui/material";
import { svgDefaultProps } from "@models/IParamsSvg";

export default function Form(): JSX.Element {
  const [imgHidden, setImgHidden] = useState<boolean>(false); // Declare a state variable...
  const svgController = new SvgController();
  const { ...context } = useContext(SvgContext);
  const { state, setState } = context;

  const handleShapeSize = (e: any) => {
    setState({ ...state, shape: { size: e.target.value } });
  };

  const handleFontSize = (e: any) => {
    const value = e.target.value;

    const svgState = {
      ...state,
      font: { ...state.font, size: value },
    };

    setState(svgState);
  };

  const handleImgHidden = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target?.checked;
    const svgState = {
      ...state,
      img: { hidden: value },
    };
    console.log(value);

    setState(svgState);
    return;
  };

  const handleDisabledShapeLess = (value: string) => {
    if ((value === "md" || value === "sm") && state.font.size === "24")
      return true;

    return false;
  };

  const handleClassNameButtonsHover = (_state: any, value: string): string => {
    return `${
      _state === value
        ? "bg-violet-800 text-white hover:bg-violet-800 hover:text-white"
        : ""
    }`;
  };

  const buttonsShape = svgDefaultProps.shapeSize.map((size) => {
    return (
      <Button
        key={size}
        onClick={handleShapeSize}
        value={size}
        className={handleClassNameButtonsHover(state.shape.size, size)}
        disabled={handleDisabledShapeLess(size)}
      >
        {size}
      </Button>
    );
  });

  const buttonsFont = svgDefaultProps.fontSize.map((size) => {
    return (
      <Button
        key={size}
        onClick={handleFontSize}
        value={size}
        className={handleClassNameButtonsHover(state.font.size, size)}
      >
        {size}
      </Button>
    );
  });

  return (
    <div className="flex gap-2 flex-wrap items-center justify-center">
      <div className="rounded border-blue-400 border-1 max-w-sm w-full shadow-xl border-b-2 flex justify-center items-center h-64 my-10">
        <SvgComponent state={state} />
      </div>

      <div className="relative rounded-lg border-x-violet-800 bg-violet-600 p-4 text-white font-bold w-full !pr-12">
        <div className="relative overflow-x-scroll overflow-y-hidden w-full">
          {svgController.url(state)}
        </div>

        <CopyAllOutlinedIcon className="absolute top-4 right-4" />
      </div>

      <div className="relative w-full">
        <TextField
          inputProps={{ maxLength: 14 }}
          autoComplete="off"
          required
          className="w-full"
          id="outlined-required"
          label="Titulo"
          value={state?.text}
          onChange={({ target }: any) =>
            setState({ ...state, text: `${target.value}`.toLocaleUpperCase() })
          }
        />

        <BackspaceIcon
          className="absolute top-4 right-4 cursor-pointer fill-black hover:fill-violet-700 active:fill-violet-700 focus-within:fill-violet-700"
          onClick={() =>
            setState({
              ...state,
              text: "",
            })
          }
        />
      </div>

      <div className="flex justify-between w-full">
        <div className="flex flex-col ">
          <h2>Corpo</h2>

          <ButtonGroup variant="outlined" aria-label="outlined button group">
            {buttonsShape}
          </ButtonGroup>
        </div>

        <div className="flex flex-col ">
          <h2>Fonte</h2>

          <ButtonGroup variant="outlined" aria-label="outlined button group">
            {buttonsFont}
          </ButtonGroup>
        </div>
      </div>

      <FormControlLabel
        className="w-full"
        control={
          <Switch checked={state?.img?.hidden} onChange={handleImgHidden} />
        }
        label="Ocutar imagem"
      />
    </div>
  );
}
