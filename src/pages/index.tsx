import { Head } from "minista"
import Link from "@/components/base/link"
import Image from "@/components/base/image"

import StormImage from "/assets/images/storm.png"

export default function () {
  return (
    <>
      <Head>
        <title>Hello!</title>
      </Head>
      <h1>Hello!</h1>
      <Link href="/markdown/test01">MarkDownのページへのリンク</Link>
      <Image src={StormImage} />
    </>
  )
}
