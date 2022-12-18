import NextImage from "next/image";
import { getImagePrefix } from "../helpers/imagePrefix";

const prefix = getImagePrefix();
export default function Image(props: any) {
  const { src } = props;
  const isNotAbs = !src.startsWith("/");

  return <NextImage {...props} src={isNotAbs ? src : prefix + src} />;
}
