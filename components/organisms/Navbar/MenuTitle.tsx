import { MenuTypes } from "../../../services/data-types";
import Menu from "./Menu";

interface MenuTitleProps{
    id: number;
    title: string;
    listMenu?: MenuTypes[];

}
export default function MenuTitle(props: Partial<MenuTitleProps>) {
    const {id, title, listMenu=[]} = props;

    return (
      <>
        <li className="menu-title"><span data-key="t-menu">{title}</span></li>
        {listMenu.map((item: MenuTypes) => (
          (item.parent_id === id && item.is_parent_menu) ? 
              <Menu key={item.id} id={item.id} title={item.menu_name} dataKey="t-dashboards" dataFeather="home" classIcon="icon-dual" 
                  ariaControl={`sidebar-${item.id}`} href={`#sidebar-${item.id}`} listMenu={listMenu} />
            : (item.parent_id === id && !item.is_parent_menu) ? 
              <Menu key={item.id} id={item.id} title={item.menu_name} dataKey="t-dashboards" dataFeather="home" classIcon="icon-dual" 
                  href={item.url} />
            : ""
        ))}
      </>
    )
}
