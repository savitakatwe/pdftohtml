"use client";

import { ParamHTMLAttributes, PropsWithChildren, useMemo } from "react";
import styled from "styled-components";

const StyledTypography = styled.p<{
  size: string;
  color: string;
  fontWeight?: string;
  lineHeight?: string;
  textDecoration?: string;
  fontStyle?: string;
}>`
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight || 700};
  line-height: ${(props) => props.lineHeight};
  text-decoration: ${(props) => props.textDecoration};
  font-style: ${(props) => props.fontStyle};
`;
interface ITypographyProps extends ParamHTMLAttributes<HTMLParagraphElement> {
  variant:
    | "headLine"
    | "head"
    | "title1"
    | "title2"
    | "title3"
    | "body"
    | "small";
  color: string;
  as?: string;
  fontWeight?: string;
  lineHeight?: string;
  textDecoration?: string;
  fontStyle?: string;
}
const Typography = ({
  variant,
  children,
  color,
  fontWeight,
  lineHeight,
  textDecoration,
  fontStyle,
  as,
  ...otherProps
}: PropsWithChildren<ITypographyProps>) => {
  const typo = useMemo(() => {
    switch (variant) {
      case "headLine":
        return { size: "100px" };
      case "head":
        return { size: "40px" };
      case "title1":
        return { size: "32px" };
      case "title2":
        return { size: "20px" };
      case "title3":
        return { size: "24px" };
      case "body":
        return { size: "16px" };
      case "small":
        return { size: "12px" };
    }
  }, [variant]);

  return (
    <StyledTypography
      as={as}
      size={typo.size}
      color={color}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      textDecoration={textDecoration}
      fontStyle={fontStyle}
      {...otherProps}
    >
      {children}
    </StyledTypography>
  );
};

export default Typography;
