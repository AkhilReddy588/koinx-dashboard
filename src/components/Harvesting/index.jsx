import React from 'react'
import './index.css'

const data = {
  capitalGains: {
    stcg: {
      profits: 70200.88,
      losses: 1548.53,
    },
    ltcg: {
      profits: 5020,
      losses: 3050,
    },
  },
}

const CapitalGainsSummary = props => {
  const { selectedHoldings } = props

  const { stcg, ltcg } = data.capitalGains

  const formatCurrency = num =>
    `${num < 0 ? '- ' : ''}$${Math.abs(num).toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })}`

  const netCapitalGains = {
    stcg: stcg.profits - stcg.losses,
    ltcg: ltcg.profits - ltcg.losses,
  }

  const totalRealised = netCapitalGains.stcg + netCapitalGains.ltcg

  let updatedStcg = { profits: 0, losses: 0 }
  let updatedLtcg = { profits: 0, losses: 0 }

  selectedHoldings.forEach((holding) => {
  if (holding.stcg?.gain) {
    if (holding.stcg.gain >= 0) {
      updatedStcg.profits += holding.stcg.gain;
    } else {
      updatedStcg.losses += Math.abs(holding.stcg.gain);
    }
  }
  if (holding.ltcg?.gain) {
    if (holding.ltcg.gain >= 0) {
      updatedLtcg.profits += holding.ltcg.gain;
    } else {
      updatedLtcg.losses += Math.abs(holding.ltcg.gain);
    }
  }
});


  const afterHarvesting = {
    stcg: {
      profits: updatedStcg.profits + stcg.profits,
      losses: stcg.losses + updatedStcg.losses,
    },
    ltcg: {
      profits: updatedLtcg.profits + ltcg.profits,
      losses: ltcg.losses + updatedLtcg.losses,
    },
  }

  const netAfterHarvesting = {
    stcg: afterHarvesting.stcg.profits - afterHarvesting.stcg.losses,
    ltcg: afterHarvesting.ltcg.profits - afterHarvesting.ltcg.losses,
  }

  const effectiveGains = netAfterHarvesting.stcg + netAfterHarvesting.ltcg

  const savings = totalRealised - effectiveGains

  return (
    <div className="summary-container">
      {/* Pre Harvesting */}
      <div className="summary-card pre">
        <h3>Pre Harvesting</h3>
        <div className="summary-grid">
          <div></div>
          <div>Short-term</div>
          <div>Long-term</div>
          <div>Profits</div>
          <div>{formatCurrency(stcg.profits)}</div>
          <div>{formatCurrency(ltcg.profits)}</div>
          <div>Losses</div>
          <div>- {formatCurrency(stcg.losses)}</div>
          <div>- {formatCurrency(ltcg.losses)}</div>
          <div>Net Capital Gains</div>
          <div>{formatCurrency(netCapitalGains.stcg)}</div>
          <div>{formatCurrency(netCapitalGains.ltcg)}</div>
        </div>
        <div className="summary-footer">
          <span>Realised Capital Gains:</span>
          <strong>{formatCurrency(totalRealised)}</strong>
        </div>
      </div>

      {/* After Harvesting */}
      <div className="summary-card post">
        <h3>After Harvesting</h3>
        <div className="summary-grid">
          <div></div>
          <div>Short-term</div>
          <div>Long-term</div>
          <div>Profits</div>
          <div>{formatCurrency(afterHarvesting.stcg.profits)}</div>
          <div>{formatCurrency(afterHarvesting.ltcg.profits)}</div>
          <div>Losses</div>
          <div>- {formatCurrency(afterHarvesting.stcg.losses)}</div>
          <div>- {formatCurrency(afterHarvesting.ltcg.losses)}</div>
          <div>Net Capital Gains</div>
          <div>{formatCurrency(netAfterHarvesting.stcg)}</div>
          <div>{formatCurrency(netAfterHarvesting.ltcg)}</div>
        </div>
        <div className="summary-footer">
          <span>Effective Capital Gains:</span>
          <strong className="loss">
            {effectiveGains < 0 ? '- ' : ''}{formatCurrency(Math.abs(effectiveGains))}
          </strong>
        </div>
        <div className="summary-savings">
          🎉 You are going to save upto <span>{formatCurrency(savings)}</span>
        </div>
      </div>
    </div>
  )
}

export default CapitalGainsSummary
