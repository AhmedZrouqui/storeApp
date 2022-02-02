export const textStyles = {
    //style object for base or default style
    baseStyle: {},
    //styles for different sizes ("sm", "md", "lg")
    sizes: {},
    //styles for different visual variants ("outline", "solid" ...)
    variants: {
        h1: {
            // you can also use responsive styles
            fontSize: ['48px', '72px'],
            fontWeight: 'bold',
            lineHeight: '110%',
            letterSpacing: '-2%',
        },
        
        h2: {
            fontSize: ['36px', '48px'],
            fontWeight: 'semibold',
            lineHeight: '110%',
            letterSpacing: '-1%',
            color: "blackish"
        },

        h3: {
            fontSize: ['24px', '36px'],
            fontWeight: 'semibold',
            lineHeight: '110%',
            letterSpacing: '-1%',
            color: "blackish"
        },

        h4: {
            fontSize: ['16px', '24px'],
            fontWeight: 'semibold',
            lineHeight: '110%',
            color: "blackish"
        },

        logo: {
            fontSize: ['16px', '24px'],
            fontWeight: 'bold',
            lineHeight: '110%',
            color: "blackish"
        }
    },
    //default values for "size" and "variant"
    defaultProps: {},
} 