# MTF Trend Score Documentation

## Color Scheme Implementation

The indicator uses a gradient color scheme based on price distance from moving averages. Colors indicate both direction (above/below) and strength of the trend.

### Color Definitions

| Color Name      | RGB Value       | Hex Code   | Appearance  | Meaning                     |
|-----------------|-----------------|------------|-------------|-----------------------------|
| StrongAbove     | 0, 100, 0       | #006400    | Dark Green  | Strong bullish (>2% daily, >1% intraday) |
| MildAbove       | 144, 238, 144   | #90EE90    | Light Green | Price above MA (≤2% daily, ≤1% intraday) |
| MildBelow       | 255, 182, 193   | #FFB6C1    | Light Red   | Price below MA (≥-2% daily, ≥-1% intraday) |
| StrongBelow     | 139, 0, 0       | #8B0000    | Dark Red    | Strong bearish (<-2% daily, <-1% intraday) |

### Thresholds by Timeframe

#### Daily Timeframe (D5, D8, D21, D200)
- **StrongAbove**: Price > MA + 2%
- **MildAbove**: Price > MA (≤2%)
- **MildBelow**: Price ≤ MA (≥-2%)
- **StrongBelow**: Price < MA - 2%

#### Intraday Timeframes (4H, 1H, 15M, 5M)
- **StrongAbove**: Price > MA + 1%
- **MildAbove**: Price > MA (≤1%)
- **MildBelow**: Price ≤ MA (≥-1%)
- **StrongBelow**: Price < MA - 1%

### Score Types

#### Simple Score (Score)
- Binary above/below scoring
- Range: -9 to +9
- Coloring:
  - **StrongAbove**: > 3
  - **MildAbove**: 0 < Score ≤ 3  
  - **MildBelow**: -3 ≤ Score ≤ 0
  - **StrongBelow**: < -3

#### Weighted Score (WScore) 
- Distance-based scoring
- Range: -9.5 to +9.5
- Scoring Rules:
  - Strong moves (>2% daily/>1% intraday): Full points (2/1/-2/-1)
  - Mild moves: Half points (1/0.5/-1/-0.5)
- Coloring:
  - **StrongAbove**: > 3
  - **MildAbove**: 0 < WScore ≤ 3
  - **MildBelow**: -3 ≤ WScore ≤ 0  
  - **StrongBelow**: < -3

### Score Comparison
- Simple Score: Good for quick trend assessment
- Weighted Score: Better for measuring trend strength
- Discrepancies indicate:
  - When prices are near MAs (weighted score less extreme)
  - When strong trends develop (weighted score more extreme)

### VWAP Coloring
- Uses same thresholds as daily timeframe
- Gray when VWAP is disabled

## Implementation Notes
1. Percentage distance calculated as: `((price - MA)/MA)*100`
2. Colors defined using `DefineGlobalColor()` for consistency
3. Neutral zone helps identify consolidation periods
4. Strong colors highlight significant trends
