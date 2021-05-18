import { makeStyles } from '@material-ui/core/styles';

//color variables

const firstColor = '#322FF2';
const firstColorLight = '#E3E2FD';
// const bodyColor = '#FAFAFF';



export const useStyles = makeStyles({
    social:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    },
    socialContainer:{display: 'flex'},
    
    socialContent:{
        display: 'flex',
        position:'relative',
        padding: '0.5rem',
        margin: '0 1rem',
        backgroundColor: firstColorLight,
        borderRadius: '1rem',
        boxShadow:' -2px -2px 8px #fafaff, 2px 2px 8px rgb(13, 12, 64, 0.2)',
        cursor: 'pointer',
        transition:'0.3s',
        '&:hover':{
            backgroundColor: firstColor
        },


        '&:hover $socialIcon':{
            color: firstColorLight
        },

        '&:hover $toolTipLeft':{
            opacity: '1',
            left: '-1rem'
        },
        '&:hover $toolTipTop':{
            opacity: '1',
            top: '-3.25rem'
        },

        '&:hover $toolTipBottom':{
            opacity: '1',
            bottom: '-1rem'
        },
        '&:hover $toolTipRight':{
            opacity: '1',
            right: '-1.25rem'
        },
    },
 
    socialIcon:{
        fontSize: '2rem',
        color: firstColor,
        transition:'0.3s',
    }, 

    socialTooltip:{
        opacity: "0",
        position: 'absolute',
        padding: '0.5rem 1rem',
        backgroundColor: firstColor,
        color: firstColorLight,
        fontSize: '1rem',
        whiteSpace: 'nowrap',
        fontWeight: '700',
        borderRadius: '0.5rem',
        pointerEvents: 'none',
        transition:'0.3s',

        '&::after':{
            content: '" "',
            position: 'absolute',
            width: '12px',
            height: '12px',
            backgroundColor: firstColor,
            borderRadius: '3px'
        }
    },
    toolTipLeft:{
        transform: 'translateX(-100%)',
        left: '0',

        '&::after':{
            top: '50%',
            transform: 'translate(50%, -50%) rotate(45deg)',
            right: '1px'
        }
    },
    
    toolTipTop:{
        transform: 'translateX(-50%)',
        left: '50%',
        top: '-2.25rem',

        '&::after':{
            bottom: '1px',
            transform: 'translate(-50%, 50%) rotate(45deg)',
            left: '50%'
        }
    },



    toolTipBottom:{
        transform: 'translate(-50%, 100%)',
        left: '50%',
        bottom: '0',

        '&::after':{
            top: '1px',
            transform: 'translate(-50%, -50%) rotate(45deg)',
            left: '50%'
        }
    },


    toolTipRight:{
        transform: 'translateX(100%)',
        right: '0',

        '&::after':{
            top: '50%',
            transform: 'translate(-50%, -50%) rotate(45deg)',
            left: '1px'
        }
    },
});


