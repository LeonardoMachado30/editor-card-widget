"use client";

import { useContext, useEffect, useState } from "react";
import { SvgContext } from "@utils/Context";
import { SvgComponent } from "@components";
import TextField from "@mui/material/TextField";
import { IProps } from "@models";
import SvgController from "@controller/SvgController";
import Slider from "@mui/material/Slider";
import CopyAllOutlinedIcon from "@mui/icons-material/CopyAllOutlined";
import BackspaceIcon from "@mui/icons-material/Backspace";

export default function Form(): JSX.Element {
  const svgController = new SvgController();
  const { ...context } = useContext(SvgContext);
  const { state, setState } = context;

  const handleSlider = (e: Event) => {
    {
      let calc;

      if (
        state.font.size >= 12 &&
        state.font.size <= 21 &&
        state._shape?.width >= 132
      ) {
        calc = state._shape?.width - 4;
      } else if (
        state.font.size >= 21 &&
        state.font.size <= 30 
        // && state._shape?.width <= 300
      ) {
        calc = state._shape?.width + 4;
      }else{
        calc = state._shape?.width;
      }

      setState({
        ...state,
        font: { ...state.font, size: e?.target?.value },
        _shape: {
          width: calc,
          height: state._shape?.height,
        },
      });
    }
  };

  return (
    <div className="flex gap-2 flex-wrap items-center justify-center">
      <div className="rounded border-blue-400 border-1 max-w-sm w-full shadow-xl border-b-2 flex justify-center items-center h-64 my-10">
        <SvgComponent state={state} />
      </div>

      <div className="relative rounded-lg border-x-violet-800 bg-violet-600 p-4 text-white font-bold w-full !pr-12">
        <div className="relative overflow-x-scroll overflow-y-hidden w-full">
          {svgController.url(state)}
        </div>

        <CopyAllOutlinedIcon
          className="absolute top-4 right-4"
          // onClick={() => handleCopy(svgController.url())}
        />
      </div>

      <div className="relative w-full">
        <TextField
          autoComplete="off"
          required
          className="w-full"
          id="outlined-required"
          label="Titulo"
          value={state.text}
          defaultValue=""
          onChange={(e: any) =>
            setState({
              ...state,
              text: `${e.target.value}`.toLocaleUpperCase(),
            })
          }
        />
        <div className="flex">
          <h2>Fonte</h2>
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

        {/* <Slider
          getAriaLabel={() => "Minimum distance shift"}
          value={state.font.size}
          onChange={handleSlider}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          disableSwap
        /> */}
        <Slider
          valueLabelDisplay="auto"
          aria-label="Default"
          defaultValue={16}
          marks
          min={12}
          max={30}
          onChange={handleSlider}
        />
      </div>
    </div>
  );
}
