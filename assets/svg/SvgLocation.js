import { Svg, Path, } from "react-native-svg";

function SvgLocation(props) {
    const location1 = <Svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M15 17.5C17.0711 17.5 18.75 15.8211 18.75 13.75C18.75 11.6789 17.0711 10 15 10C12.9289 10 11.25 11.6789 11.25 13.75C11.25 15.8211 12.9289 17.5 15 17.5Z" fill="#634800" />
        <Path d="M15 26.25C20.5228 23.75 25 19.2728 25 13.75C25 8.22715 20.5228 3.75 15 3.75C9.47715 3.75 5 8.22715 5 13.75C5 19.2728 9.47715 23.75 15 26.25Z" fill="#634800" />
    </Svg>;
    const location2 = <Svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M15 17.5C17.0711 17.5 18.75 15.8211 18.75 13.75C18.75 11.6789 17.0711 10 15 10C12.9289 10 11.25 11.6789 11.25 13.75C11.25 15.8211 12.9289 17.5 15 17.5Z" stroke="#634800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M15 26.25C20.5228 23.75 25 19.2728 25 13.75C25 8.22715 20.5228 3.75 15 3.75C9.47715 3.75 5 8.22715 5 13.75C5 19.2728 9.47715 23.75 15 26.25Z" stroke="#634800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>;
    if (props.activeBtn == 2) {
        return location1;
    } else {
        return location2;
    }
}

export default SvgLocation;