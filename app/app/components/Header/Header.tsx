import Link from "next/link"

export default function Header() {
  return (
    <div className="w-screen h-24 flex gap-40 justify-center items-center">
        <ul className="flex gap-10">
            <li>
                <Link href="https://github.com/NicholasHellmers" target="_blank">
                  <p>GitHub</p>
                </Link>
            </li>
            <li>
                <Link href="https://www.linkedin.com/in/nicholas-hellmers/" target="_blank">
                  <p>LinkedIn</p>
                </Link>
            </li>
            <li>
                <Link href="/resume.pdf" target="_blank">
                    <p>Resume</p>
                </Link>
            </li>
        </ul>
    </div>
  )
}
