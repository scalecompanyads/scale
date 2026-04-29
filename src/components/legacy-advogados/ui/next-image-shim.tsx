import type { CSSProperties, ImgHTMLAttributes } from "react";

type NextImageLikeProps = ImgHTMLAttributes<HTMLImageElement> & {
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
};

export default function NextImageShim({ fill, style, ...props }: NextImageLikeProps) {
  const mergedStyle: CSSProperties = fill
    ? { position: "absolute", inset: 0, width: "100%", height: "100%", ...style }
    : { ...style };

  return (
    <img
      {...props}
      loading={props.priority ? "eager" : "lazy"}
      decoding={props.priority ? "sync" : "async"}
      fetchPriority={props.priority ? "high" : "auto"}
      style={mergedStyle}
    />
  );
}
