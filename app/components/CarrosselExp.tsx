import Image from "next/image"
import jsIcon from "../../public/icon/js_white.svg"
import cssIcon from "../../public/icon/css_white.svg"
import tailwindIcon from "../../public/icon/tailwind_white.svg"
import phpIcon from "../../public/icon/php_white.svg"
import reactIcon from "../../public/icon/react_white.svg"
import mysqlIcon from "../../public/icon/mysql_white.svg"

export default function CarrosselExp() {
    return (
        <div className="bg-[#393994] flex justify-between px-6 p-2 rounded-2xl">
            <Image
                src={jsIcon}
                alt="Javascript"
                height={28}
                width={28}
            />
            <Image
                src={cssIcon}
                alt="CSS"
                height={28}
                width={28}
            />
            <Image
                src={tailwindIcon}
                alt="Tailwind"
                height={28}
                width={28}
            />
            <Image
                src={phpIcon}
                alt="PHP"
                height={28}
                width={28}
            />
            <Image
                src={reactIcon}
                alt="React"
                height={28}
                width={28}
            />
            <Image
                src={mysqlIcon}
                alt="Mysql"
                height={28}
                width={28}
            />
            
        </div>
    )
}