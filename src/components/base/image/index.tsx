import { Picture } from "minista"
import React from "react"

type ImageType = React.ComponentProps<typeof Picture>

const Image = ({ src, alt, ...otherProps }: ImageType) => {
  return <Picture {...otherProps} className="b_image" src={src} alt={alt} />
}

export default Image
