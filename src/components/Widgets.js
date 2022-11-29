import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {newsArticle('Medium clone app', 'Top news - 9999 readers')}
            {newsArticle("World's largest active volcano erupting for first time in nearly 40 years", 'Top news - 999 readers')}
            {newsArticle('Dua Lipa has been granted Albanian citizenship', 'Top news - 99 readers')}
        </div>
    )
}

export default Widgets
