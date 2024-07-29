import Image from "next/image"
import jsIcon from "../../public/icon/js_white.svg"
import cssIcon from "../../public/icon/css_white.svg"
import tailwindIcon from "../../public/icon/tailwind_white.svg"
import phpIcon from "../../public/icon/php_white.svg"
import reactIcon from "../../public/icon/react_white.svg"
import mysqlIcon from "../../public/icon/mysql_white.svg"

export default function CarrosselExp() {
    return (
        <div>
            <Image
                src={jsIcon}
                alt="Javascript"
                height={30}
                width={30}
            />
            <Image
                src={cssIcon}
                alt="CSS"
                height={30}
                width={30}
            />
            <Image
                src={tailwindIcon}
                alt="Tailwind"
                height={30}
                width={30}
            />
            <Image
                src={phpIcon}
                alt="PHP"
                height={30}
                width={30}
            />
            <Image
                src={reactIcon}
                alt="React"
                height={30}
                width={30}
            />
            <Image
                src={mysqlIcon}
                alt="Mysql"
                height={30}
                width={30}
            />
            
        </div>
    )
}