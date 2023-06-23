import Link from 'next/link'
import { MenuTypes } from '@/services/data-types';
import MenuChild from './MenuChild';


interface MenuProps{
    id: number;
    title: string;
    dataKey: string;
    dataFeather: string;
    classIcon: string;
    ariaControl?: string;
    href?: string;
    listMenu?: MenuTypes[];
}

export default function Menu(props: Partial<MenuProps>) {
    const {
        id
        , title
        , dataKey
        , dataFeather
        , classIcon
        , ariaControl
        , href='/'
        , listMenu=[]
        } = props;

  if (ariaControl != undefined){
    return (
        <li className="nav-item">
            {/* <Link href={href}>
                
            </Link> */}
            
            <Link href={href} legacyBehavior>                
                <a className="nav-link menu-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls={ariaControl}>
                    <i data-feather={dataFeather} className={classIcon}></i> <span data-key={dataKey}>{title}</span>
                </a>
            </Link>
            <div className="collapse menu-dropdown" id={ariaControl}>
                <ul className="nav nav-sm flex-column">
                    {listMenu.map((item: MenuTypes) => (
                        (item.parent_id === id) ? 
                        <MenuChild key={item.id} id={item.id} title={item.menu_name} dataKey="t-dashboards" href={item.url} />
                        : ""
                    ))}
                </ul>
            </div>
        </li>
      )
  }else{
    return (
        <li className="nav-item">
            <Link href={href} legacyBehavior>
                <a className="nav-link menu-link" href={href} role="button" aria-expanded="false">
                    <i data-feather={dataFeather} className={classIcon}></i> <span data-key={dataKey}>{title}</span>
                </a>
            </Link>
        </li>
      )
  }
  
}
