import React, { useState } from 'react'
import Disclaimer from '../Disclaimer'
import './index.css'
import CapitalGainsCard from '../Harvesting'
import HoldingList from '../Holdings'


const Dashboard = () => {
    const [selectedHoldings, setSelectedHoldings] = useState([])

    return (
        <div className='dashboard-bg'>
            <div className='header'>
                <img src='/logo.png' className='logo' />
            </div>
            <div className='dashboard-content'>
                <div className='main-heading-container'>
                    <h1 className='main-heading'>Tax Harvesting</h1>
                    <p className='main-heading-para'>How it works?</p>
                </div>
                <Disclaimer />
                <CapitalGainsCard selectedHoldings={selectedHoldings} />
                <HoldingList
                    selectedHoldings={selectedHoldings}
                    setSelectedHoldings={setSelectedHoldings}
                />
            </div>
        </div>
    )
}

export default Dashboard
