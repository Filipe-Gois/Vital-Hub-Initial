import { LeftArrowAndXStyle } from './style';
import { AntDesign } from '@expo/vector-icons'; //import para os ícones leftarrow e close X


export const LeftArrowAOrXComponent = ({ size = 26, color = "#34898f", isLefArrow = true }) => {

    return (
        // <GreenCircleComponent>
        //     <LeftArrowStyle source={require('../../assets/leftarrowback.svg')} />
        // </GreenCircleComponent>

        <LeftArrowAndXStyle >
            {isLefArrow ?
                <AntDesign name="arrowleft" size={size} color={color} />
                :
                <AntDesign name="close" size={size} color={color} />
            }

        </LeftArrowAndXStyle>
    )
}
