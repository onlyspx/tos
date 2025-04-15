# spx_volume_highlight_simple
# Displays option volume and highlights background based on simplified volume tiers.
# Tiers: >=10k: Yellow, >=1k: Cyan
# Default background for < 1k is Black.

declare lower;

input highVol = 10000;
input medVol = 1000;

def v = volume;

plot Data = v;
Data.SetDefaultColor(Color.GRAY); # Set default text color

AssignBackgroundColor(
    if v >= highVol then Color.YELLOW else
    if v >= medVol then Color.CYAN else
    Color.BLACK # Explicit default background color
);
