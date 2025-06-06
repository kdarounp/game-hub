import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: "dark",
   
    };  

const theme = extendTheme({
    config,
    colors: {
        gray: {
            50:'#f9f9f9',
            100: '#ededed',
            200: '#d3d3d3',
            300: '#b8b8b8',
            400: '#a0a0a0',
            500: '#898989',
            600: '#6c6c6c',
            700: '#202020',
            800: '#121212',
            900: '#111',
}}});

export default theme;