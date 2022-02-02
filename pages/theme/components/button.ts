import { darken, mode, whiten } from "@chakra-ui/theme-tools";

export const buttonStyle = {
    //style object for base or default style
    baseStyle: {},
    //styles for different sizes ("sm", "md", "lg")
    sizes: {},
    //styles for different visual variants ("outline", "solid" ...)
    variants: {
        primary: (props) => ({
            bg: "primary",
            color: "white",
            _hover :{
               bg: mode(darken('primary', 20), whiten('primary', 20))(props)
            }
        }),
        secondary: (props) => ({
            bg: "secondary",
            color: "white",
            _hover :{
               bg: mode(darken('secondary', 20), whiten('secondary', 20))(props)
            }
        }),
        primaryOutline: (props) => ({
            bg: "transparent",
            color: "primary",
            border: '1px solid',
            borderColor: "primary",
            _hover :{
                boxShadow:"md",
                bg: "primary",
                color: "white"
            }
        })
    },
    //default values for "size" and "variant"
    defaultProps: {},
}