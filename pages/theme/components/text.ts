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
            fontSize: ['18px', '24px'],
            fontWeight: '900',
            lineHeight: '110%',
            textTransform: 'uppercase',
            color: "blackish",
            letterSpacing:["4px", "5px"],
            fontFamily: "kanit"
        },

        link: {
            fontSize: "16px",
            textDecoration: "underline",
            color:"blackish",
            fontFamily: "kanit",
            lineHeight: '110%',
            cursor: "pointer",
            fontWeight:"400 "
        }
    },
    //default values for "size" and "variant"
    defaultProps: {},
} 