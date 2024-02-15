import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands, icon } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

document.body.appendChild(<p>Hi</p>);
document.body.appendChild(<FontAwesomeIcon icon={regular("coffee")} />);
