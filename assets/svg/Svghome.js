import Svg, { Path } from 'react-native-svg';

function SvgHome(props) {
    const home1 = <Svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M5 12.5L15 3.75L25 12.5L25 25H18.75V20C18.75 19.0054 18.3549 18.0516 17.6517 17.3483C16.9484 16.6451 15.9946 16.25 15 16.25C14.0054 16.25 13.0516 16.6451 12.3484 17.3483C11.6451 18.0516 11.25 19.0054 11.25 20V25H5.00001L5 12.5Z" fill="#634800" />
    </Svg>;
    const home2 = <Svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M5 12.5L15 3.75L25 12.5L25 25H18.75V20C18.75 19.0054 18.3549 18.0516 17.6517 17.3483C16.9484 16.6451 15.9946 16.25 15 16.25C14.0054 16.25 13.0516 16.6451 12.3484 17.3483C11.6451 18.0516 11.25 19.0054 11.25 20V25H5.00001L5 12.5Z" stroke="#634800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>
    if (props.activeBtn == 1) {
        return home1;
    } else {
        return home2;
    }
}

export default SvgHome;