import { styled } from "../../../../themes";
import { BaseIcon } from "../BaseIcon";

type Props = {
  height: number;
  width: number;
};

export const AddIcon = (props: Props) => (
  <Icon
    svgProps={{
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-6 w-6",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      strokeWidth: 2,
    }}
    pathProps={{
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z",
    }}
    {...props}
  />
);

const Icon = styled(BaseIcon, {
  color: "$white",
});
