import Image, { type ImageProps } from "next/image";

export type SiteImageProps = Omit<ImageProps, "alt"> & {
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

export function SiteImg(props: SiteImageProps) {
  return <SiteImage {...props} />;
}
