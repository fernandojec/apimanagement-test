import Link from "next/link";
import { useEffect, useState } from "react";
//import { useMenu } from "../../../assets/use/useMenu";

interface PageTitleProps {
    title: string;
    parent: string;
    parentLink?: string;
    parentList: [];
}

export default function Index(props: Partial<PageTitleProps>) {
    const {title, parent, parentLink="/", parentList=[]} = props;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [parentListData, setParentListData] = useState([]);
    //const {listMenu, titleMenu} = useMenu()
    //const [listMenu, setListMenu] = useState<any>([]);
    //const titleMenu = '';
    useEffect(() =>{
        if (parentList.length > 0){
            setParentListData(parentList);
        }
    }, [parentList])
    
    return (
        <div className="row">
            <div className="col-12">
                    <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 className="mb-sm-0">{title}</h4>

                        <div className="page-title-right">
                            <ol className="breadcrumb m-0">
                                {parentListData.map((item: {parentTitle:string, parentLink:string}) => (
                                    <li key={item.parentTitle} className="breadcrumb-item">
                                        <Link key={item.parentTitle} href={item.parentLink} legacyBehavior><a >{item.parentTitle}</a></Link>
                                    </li>
                                ))}
                                <li className="breadcrumb-item active">{title}</li>
                            </ol>
                        </div>

                    </div>
            </div>
        </div>
    )
}
