import { SvgComponent } from "@components";
import SvgController from "@utils/SvgController";

export default function Home({
  params,
}: {
  params: { props: string[] };
}): JSX.Element {
  const { props } = params;
  const svgController = new SvgController();
  const getPropSvg = svgController.get(props);

  return <SvgComponent props={getPropSvg} />;
}
