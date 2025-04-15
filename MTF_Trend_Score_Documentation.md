# MTF Trend Score Documentation

## Color Scheme Implementation

The indicator uses a gradient color scheme based on price distance from moving averages. Colors indicate both direction (above/below) and strength of the trend.

### Color Definitions

| Color Name      | RGB Value       | Hex Code   | Appearance  | Meaning                     |
|-----------------|-----------------|------------|-------------|-----------------------------|
| StrongAbove     | 0, 100, 0       | #006400    | Dark Green  | Strong bullish (>2% daily, >1% intraday) |
| MildAbove       | 144, 238, 144   | #90EE90    | Light Green | Mild bullish (0.5-2% daily, 0.25-1% intraday) |
| Neutral         | 128, 128, 128   | #808080    | Gray        | Neutral (±0.5% daily, ±0.25% intraday) |
| MildBelow       | 255, 182, 193   | #FFB6C1    | Light Red   | Mild bearish (-0.5 to -2% daily, -0.25 to -1% intraday) |
| StrongBelow     | 139, 0, 0       | #8B0000    | Dark Red    | Strong bearish (<-2% daily, <-1% intraday) |

### Thresholds by Timeframe

#### Daily Timeframe (D5, D8, D21, D200)
- **StrongAbove**: Price > MA + 2%
- **MildAbove**: MA + 0.5% < Price ≤ MA + 2%
- **Neutral**: MA - 0.5% ≤ Price ≤ MA + 0.5%
- **MildBelow**: MA - 2% ≤ Price < MA - 0.5%
- **StrongBelow**: Price < MA - 2%

#### Intraday Timeframes (4H, 1H, 15M, 5M)
- **StrongAbove**: Price > MA + 1%
- **MildAbove**: MA + 0.25% < Price ≤ MA + 1%
- **Neutral**: MA - 0.25% ≤ Price ≤ MA + 0.25%
- **MildBelow**: MA - 1% ≤ Price < MA - 0.25%
- **StrongBelow**: Price < MA - 1%

### Score Coloring
The trend score uses similar coloring:
- **StrongAbove**: Score > 3
- **MildAbove**: 0 < Score ≤ 3
- **MildBelow**: -3 ≤ Score < 0
- **StrongBelow**: Score < -3

### VWAP Coloring
- Uses same thresholds as daily timeframe
- Gray when VWAP is disabled

## Implementation Notes
1. Percentage distance calculated as: `((price - MA)/MA)*100`
2. Colors defined using `DefineGlobalColor()` for consistency
3. Neutral zone helps identify consolidation periods
4. Strong colors highlight significant trends
