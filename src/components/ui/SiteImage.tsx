import Image, { type ImageProps } from "next/image";
import type { ImgHTMLAttributes } from "react";

type SiteImageProps = Omit<ImageProps, "alt"> & {
  alt: string;
  title?: string;
};

type SiteImgProps = ImgHTMLAttributes<HTMLImageElement> & {
  alt: string;
  title?: string;
};

function imageTitleProps(alt: string, title?: string) {
  if (!alt) {
    return {};
  }

  return { title: title ?? alt };
}

export function SiteImage({ alt, title, ...props }: SiteImageProps) {
  return <Image alt={alt} {...imageTitleProps(alt, title)} {...props} />;
}

export function SiteImg({ alt, title, ...props }: SiteImgProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- native img used where next/image layout or priority behavior is not required
    <img alt={alt} {...imageTitleProps(alt, title)} {...props} />
  );
}
