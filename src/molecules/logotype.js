import React from "react"
import LogoType from "../atoms/svg/logotype.svg"
import LogoStyle from "../atoms/css/logotype.module.css"

const Logo = () => {
    return <LogoType className={`${LogoStyle.fill} ${LogoStyle.size}`} />
}

export default Logo