import classNames from "classnames";
import { PosterSize, ProfileSize } from "tmdb";

const Img: React.FC<
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > & { size: string }
> = ({ src, alt, size }) => {
  return (
    <img
      alt={alt}
      src={`https://image.tmdb.org/t/p/${size}` + src}
      className={classNames(["w-full h-auto"])}
    />
  );
};

export const PosterImg: React.FC<{
  src: string | undefined;
  alt: string;
  size: PosterSize;
}> = ({ alt, src, size = "w185" }) => {
  return <Img alt={alt} src={src} size={size} />;
};

export const ProfileImg: React.FC<{
  src: string | undefined;
  alt: string;
  size: ProfileSize;
}> = ({ alt, src, size = "w185" }) => {
  return <Img alt={alt} src={src} size={size} />;
};
