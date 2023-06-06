type LinkType = {
  children: React.ReactNode
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

const Link = ({ children, ...otherProps }: LinkType) => {
  return (
    <a {...otherProps} className="b_link">
      {children}
    </a>
  )
}

export default Link
