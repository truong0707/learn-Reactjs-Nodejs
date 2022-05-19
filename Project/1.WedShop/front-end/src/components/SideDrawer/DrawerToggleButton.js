import { FaBars } from "react-icons/fa";

export default function DrawerToggleButton(props) {

    return (
        <>
            <FaBars onClick={props.drawerToggleClick} className="icon-drawer" />
        </>
    );
}