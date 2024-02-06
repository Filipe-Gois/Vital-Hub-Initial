import { LogoStyle } from "./style"

export const LogoComponent = ({ path = "../../assets/logo.png", source = '' }) => {
    return (
        <LogoStyle source={source} />
    )
}