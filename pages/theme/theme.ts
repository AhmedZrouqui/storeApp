import { extendTheme } from '@chakra-ui/react'
import { buttonStyle as Button } from './components/button'
import { textStyles as Text } from './components/text'
import "@fontsource/exo"

const theme = extendTheme({
    fonts: {
        heading: "Exo",
        body: 'Exo',
    },
    colors: {
        blackish: "#2D2D2B",
        powder: "#F0E4D8",
        offWhite: "#F6F5F0",
        supple: "#C39E9E",
        fadedPink: "#F6F0F1"
    },
    components: {
        Button,
        Text
    }
})

export default theme