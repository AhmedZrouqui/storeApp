export const flexStyles = {
    //style object for base or default style
    baseStyle: {},
    //styles for different sizes ("sm", "md", "lg")
    sizes: {},
    //styles for different visual variants ("outline", "solid" ...)
    variants: {
        mobileMenu: (props) => ({
            w: "100vw",
            h: '100vh',
            bg: 'red',
            zIndex: "20",
            pos:"fixed",
            top: "0",
            left:"0",
            overflowY: 'auto',
            flexDir: "column"
        })
    },
    defaultProps: {},
} 