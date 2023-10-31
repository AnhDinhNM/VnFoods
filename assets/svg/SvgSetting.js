import { Svg, Path } from "react-native-svg";

function SvgSetting(props) {
    const sett1 = <Svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M14.0834 3.75H16.5834C17.2737 3.75 17.8334 4.30964 17.8334 5V5.71098C17.8334 6.24573 18.1923 6.71031 18.6861 6.91536C19.1802 7.12048 19.7555 7.0423 20.1337 6.66403L20.6366 6.16114C21.1248 5.67298 21.9162 5.67298 22.4044 6.16114L24.1722 7.9289C24.6603 8.41706 24.6603 9.20851 24.1722 9.69667L23.6693 10.1995C23.291 10.5778 23.2129 11.1531 23.418 11.6472C23.6231 12.1411 24.0877 12.5 24.6224 12.5H25.3334C26.0237 12.5 26.5834 13.0596 26.5834 13.75V16.25C26.5834 16.9404 26.0237 17.5 25.3334 17.5H24.6224C24.0877 17.5 23.6231 17.8589 23.418 18.3528C23.2129 18.8469 23.2911 19.4221 23.6693 19.8004L24.1722 20.3033C24.6603 20.7914 24.6603 21.5829 24.1722 22.071L22.4044 23.8388C21.9163 24.327 21.1248 24.327 20.6366 23.8388L20.1338 23.336C19.7555 22.9577 19.1802 22.8795 18.6862 23.0846C18.1923 23.2897 17.8334 23.7543 17.8334 24.289V25C17.8334 25.6904 17.2737 26.25 16.5834 26.25H14.0834C13.393 26.25 12.8334 25.6904 12.8334 25V24.2891C12.8334 23.7543 12.4745 23.2897 11.9806 23.0846C11.4865 22.8795 10.9112 22.9577 10.5329 23.336L10.03 23.8388C9.54187 24.327 8.75041 24.327 8.26226 23.8388L6.49449 22.071C6.00633 21.5829 6.00633 20.7914 6.49449 20.3033L6.99741 19.8004C7.37568 19.4221 7.45385 18.8468 7.24873 18.3528C7.04368 17.8589 6.57911 17.5 6.04436 17.5H5.33337C4.64302 17.5 4.08337 16.9404 4.08337 16.25V13.75C4.08337 13.0596 4.64302 12.5 5.33337 12.5L6.04433 12.5C6.5791 12.5 7.04369 12.1411 7.24874 11.6472C7.45387 11.1531 7.37569 10.5779 6.99741 10.1996L6.49451 9.69667C6.00635 9.20852 6.00635 8.41706 6.49451 7.92891L8.26228 6.16114C8.75043 5.67298 9.54189 5.67298 10.03 6.16114L10.5329 6.66404C10.9112 7.04232 11.4865 7.1205 11.9806 6.91537C12.4745 6.71031 12.8334 6.24572 12.8334 5.71095V5C12.8334 4.30964 13.393 3.75 14.0834 3.75Z" fill="#634800" />
        <Path d="M17.8334 15C17.8334 16.3807 16.7141 17.5 15.3334 17.5C13.9527 17.5 12.8334 16.3807 12.8334 15C12.8334 13.6193 13.9527 12.5 15.3334 12.5C16.7141 12.5 17.8334 13.6193 17.8334 15Z" fill="#634800" />
    </Svg>;
    const sett2 = <Svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M13.75 3.75H16.25C16.9404 3.75 17.5 4.30964 17.5 5V5.71098C17.5 6.24573 17.8589 6.71031 18.3528 6.91536C18.8468 7.12048 19.4221 7.0423 19.8004 6.66403L20.3033 6.16114C20.7914 5.67298 21.5829 5.67298 22.071 6.16114L23.8388 7.9289C24.3269 8.41706 24.3269 9.20851 23.8388 9.69667L23.336 10.1995C22.9577 10.5778 22.8795 11.1531 23.0846 11.6472C23.2897 12.1411 23.7543 12.5 24.2891 12.5L25 12.5C25.6904 12.5 26.25 13.0596 26.25 13.75V16.25C26.25 16.9404 25.6904 17.5 25 17.5H24.289C23.7543 17.5 23.2897 17.8589 23.0846 18.3528C22.8795 18.8469 22.9577 19.4222 23.336 19.8004L23.8388 20.3033C24.327 20.7914 24.327 21.5829 23.8388 22.071L22.071 23.8388C21.5829 24.327 20.7914 24.327 20.3033 23.8388L19.8004 23.336C19.4221 22.9577 18.8469 22.8795 18.3528 23.0846C17.8589 23.2897 17.5 23.7543 17.5 24.289V25C17.5 25.6904 16.9404 26.25 16.25 26.25H13.75C13.0596 26.25 12.5 25.6904 12.5 25V24.2891C12.5 23.7543 12.1411 23.2897 11.6472 23.0846C11.1531 22.8795 10.5778 22.9577 10.1995 23.336L9.69665 23.8388C9.20849 24.327 8.41704 24.327 7.92888 23.8388L6.16111 22.071C5.67296 21.5829 5.67296 20.7914 6.16111 20.3033L6.66403 19.8004C7.0423 19.4221 7.12048 18.8468 6.91536 18.3528C6.71031 17.8589 6.24573 17.5 5.71098 17.5H5C4.30964 17.5 3.75 16.9404 3.75 16.25V13.75C3.75 13.0596 4.30964 12.5 5 12.5L5.71096 12.5C6.24572 12.5 6.71031 12.1411 6.91537 11.6472C7.1205 11.1531 7.04232 10.5779 6.66404 10.1996L6.16114 9.69667C5.67298 9.20852 5.67298 8.41706 6.16114 7.92891L7.9289 6.16114C8.41706 5.67298 9.20851 5.67298 9.69667 6.16114L10.1996 6.66404C10.5779 7.04232 11.1531 7.1205 11.6472 6.91537C12.1411 6.71031 12.5 6.24572 12.5 5.71095V5C12.5 4.30964 13.0596 3.75 13.75 3.75Z" stroke="#634800" stroke-width="2" />
        <Path d="M17.5 15C17.5 16.3807 16.3807 17.5 15 17.5C13.6193 17.5 12.5 16.3807 12.5 15C12.5 13.6193 13.6193 12.5 15 12.5C16.3807 12.5 17.5 13.6193 17.5 15Z" stroke="#634800" stroke-width="2" />
    </Svg>;
    if (props.activeBtn == 3) {
        return sett1;
    } else {
        return sett2;
    }
}

export default SvgSetting;