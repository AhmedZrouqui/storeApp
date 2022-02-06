import { extendTheme } from '@chakra-ui/react'
import { buttonStyle as Button } from './components/button'
import { textStyles as Text } from './components/text'
import { flexStyles as Flex } from './components/flex'
import {createBreakpoints} from "@chakra-ui/theme-tools"
import "@fontsource/exo"
import "@fontsource/kanit"

const breakpoints = createBreakpoints({
    sm: '40em',
    md: '52em',
    lg: '64em',
    xl: '80em',
})

const theme = extendTheme({
    fonts: {
        heading: "Kanit",
        body: 'Exo',
    },
    breakpoints,
    colors: {
        blackish: "#2D2D2B",
        powder: "#F0E4D8",
        offWhite: "#F6F5F0",
        supple: "#C39E9E",
        fadedPink: "#F6F0F1"
    },
    components: {
        Button,
        Text, 
        Flex
    }
})

export default theme