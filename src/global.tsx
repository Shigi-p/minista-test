// src/global.tsx
import type { GlobalProps } from "minista"
import { Head } from "minista"

import "./global.scss"

export default function ({ url, title, children }: GlobalProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="description" content="description" />
      </Head>
      {url === "/" ? (
        <div className="home">{children}</div>
      ) : (
        <div>{children}</div>
      )}
    </>
  )
}
