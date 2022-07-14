type Props = {
  svgProps: React.SVGProps<SVGSVGElement>;
  pathProps: React.SVGProps<SVGPathElement>;
  height: number;
  width: number;
};

export const BaseIcon = (props: Props) => {
  return (
    <svg {...props.svgProps} height={props.height} width={props.width}>
      <path {...props.pathProps} />
    </svg>
  );
};
