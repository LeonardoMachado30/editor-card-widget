"use client";

import { ReactNode, createContext, useState } from "react";
import { IProps, svgDefaultValue } from "@models";

interface IContext {
  state: IProps;
  setState: any;
}

export const SvgContext = createContext<IContext | null>(null);

interface IProp {
  children: ReactNode;
}

export default function SvgProvider({ children }: IProp): JSX.Element {
  const [state, setState] = useState(svgDefaultValue);

  return (
    <SvgContext.Provider value={{ state, setState }}>
      {children}
    </SvgContext.Provider>
  );
}
