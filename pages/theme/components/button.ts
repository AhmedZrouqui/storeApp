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
        icon: (props) => ({
            bg:"transparent",
            color: "blackish",
            border: "none",
            fontWeight: "500",
            outline:"none",
            fontSize: ["xl", "2xl"],
            padding: "0",
            _hover: {
                bg: "transparent",
                color: "supple",
                transform: "scale(1.2)"
            },
            _focus: {
                outline: "none",
                boxShadow: "none",
                bg:"transparent"
            },
            _active: {
                bg:"transparent"
            }

        }),
        ghost: (props) => ({
            bg:"transparent",
            color: "blackish",
            border: "none",
            fontWeight: "500",
            outline:"none",
            _hover: {
                bg: "transparent",
                color: "supple",
            },
            _focus: {
                outline: "none",
                boxShadow: "none",
                bg:"transparent"
            },
            _active: {
                bg:"transparent"
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
        }),

    },
    //default values for "size" and "variant"
    defaultProps: {},
}