import { AntDesign } from '@expo/vector-icons';
import { LeftArrowStyle } from './style';
import { GreenCircleComponent } from '../GreenCircle';


export const LeftArrowComponent = ({ size = 24, color = "black" }) => {

    return (
        // <GreenCircleComponent>
        //     <LeftArrowStyle source={require('../../assets/leftarrowback.svg')} />
        // </GreenCircleComponent>

        <LeftArrowStyle source={require('../../assets/leftarrowback.svg')} />
    )
}
