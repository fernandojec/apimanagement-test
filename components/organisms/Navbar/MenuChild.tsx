import Link from "next/link";

interface MenuChildProps{
    id: number;
    title: string;
    dataKey: string;
    href?: string;
}

export default function MenuChild(props: Partial<MenuChildProps>) {
  const {id, title, dataKey, href="/"} = props;
  return (
    <li className="nav-item">
      <Link href={href} legacyBehavior>
          <a className="nav-link" data-key={dataKey}>{title}</a>
      </Link>
  </li>
  )
}
