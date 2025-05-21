import React, { useState } from 'react';
import { holdings } from '../../utils/dataSource';
import './index.css';

const HoldingsTable = ({ selectedHoldings, setSelectedHoldings }) => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  const handleCheckboxChange = (holding) => {
    const isSelected = selectedHoldings.some((h) => h === holding);
    if (isSelected) {
      setSelectedHoldings(selectedHoldings.filter((h) => h !== holding));
    } else {
      setSelectedHoldings([...selectedHoldings, holding]);
    }
  };

  const visibleHoldings = showAll ? holdings : holdings.slice(0, 5);

  const isChecked = (holding) =>
    selectedHoldings.some((h) => h === holding);

  return (
    <div className="holdings-container">
      <h2>Holdings</h2>
      <div className="table-wrapper">

      
      <table className="holdings-table">
        <thead>
          <tr>
            <th></th>
            <th>Asset<br /><span className="sub">Current Market Rate</span></th>
            <th>Holdings</th>
            <th>Total Current Value</th>
            <th>Short-term</th>
            <th>Long-term</th>
            <th>Amount to Sell</th>
          </tr>
        </thead>
        <tbody>
          {visibleHoldings.map((item, idx) => (
            <tr key={idx} className={isChecked(item) ? 'active-row' : ''}>
              <td>
                <input
                  type="checkbox"
                  checked={isChecked(item)}
                  onChange={() => handleCheckboxChange(item)}
                />
              </td>
              <td className="asset">
                <img src={item.logo} alt={item.coin} />
                <div>
                  <strong>{item.coin}</strong><br />
                  <span className="sub">{item.coinName}</span>
                </div>
              </td>
              <td>
                {item.totalHolding} {item.coin}<br />
                <span className="sub">${item.currentPrice.toFixed(2)}/{item.coin}</span>
              </td>
              <td>${(item.currentPrice * item.totalHolding).toFixed(2)}</td>
              <td className={item.stcg.gain < 0 ? 'red' : 'green'}>
                ${item.stcg.gain.toFixed(2)}<br />
                <span className="sub">{item.stcg.qty} {item.coin}</span>
              </td>
              <td className={item.ltcg.gain < 0 ? 'red' : 'green'}>
                ${item.ltcg.gain.toFixed(2)}<br />
                <span className="sub">{item.ltcg.qty} {item.coin}</span>
              </td>
              <td>
                {isChecked(item) ? `${item.totalHolding} ${item.coin}` : '-'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      {holdings.length > 5 && (
        <div className="view-all" onClick={toggleShowAll}>
          {showAll ? 'View less' : 'View more'}
        </div>
      )}
    </div>
  );
};


export default HoldingsTable;
