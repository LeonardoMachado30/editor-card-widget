"use client"
import { SvgComponent } from "@components";
import SvgController from "@controller/SvgController";

export default function Home({
  params,
}: {
  params: { props: string[] };
}): JSX.Element {
  const { props } = params;
  const svgController = new SvgController();
  const getPropSvg = svgController.convertUrlInObject();

  return <SvgComponent state={getPropSvg} />;
}
