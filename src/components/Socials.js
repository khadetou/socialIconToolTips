import React from 'react'
import {useStyles} from '../styles/tooltipStyle';

const Socials = ( {icon, tip, toolTip} ) => {
    const {socialContent, socialIcon, socialTooltip} = useStyles();

    return (
    
        <div className={socialContent}>
                <i className={`${icon} ${socialIcon}`}></i>
                <div className={`${socialTooltip} ${toolTip}`}>{tip}</div>
        </div>
    )
}

export default Socials;
