import SvgComponent from "../SvgComponent";
import Form from "./Form";
import SvgProvider from "@utils/Context";

export default function View(): JSX.Element {
  return (
    <>
      <SvgProvider>
        <Form />
      </SvgProvider>
    </>
  );
}
