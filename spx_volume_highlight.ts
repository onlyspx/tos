# spx_volume_highlight
# Displays option volume and highlights background based on volume tiers.
# Tiers: >=1k: Lt Gray, >=5k: Cyan, >=10k: Yellow, >=20k: Red, >=40k: Pink, >=60k: Violet, >=100k: White
# Default background for < 1k is Black.

declare lower; # Indicates it's a lower study/column

input minVol1 = 1000;
input minVol2 = 5000;
input minVol3 = 10000;
input minVol4 = 20000;
input minVol5 = 40000;
input minVol6 = 60000;
input minVol7 = 100000;

def v = volume;

# Plot the volume value in the column
plot Data = v;
Data.SetDefaultColor(Color.GRAY); # Set default text color

# Assign background color directly
AssignBackgroundColor(
    if v >= minVol7 then Color.WHITE else
    if v >= minVol6 then Color.VIOLET else
    if v >= minVol5 then Color.PINK else
    if v >= minVol4 then Color.RED else
    if v >= minVol3 then Color.YELLOW else
    if v >= minVol2 then Color.CYAN else
    if v >= minVol1 then Color.LIGHT_GRAY else
    Color.BLACK # Explicit default background color
);

# Text color assignment removed to simplify.

# Optional: Tooltip for clarity (commented out)
# AddChartBubble(no, low, "Vol: " + v, (if v >= minVol7 then Color.WHITE else if v >= minVol6 then Color.VIOLET else if v >= minVol5 then Color.PINK else if v >= minVol4 then Color.RED else if v >= minVol3 then Color.YELLOW else if v >= minVol2 then Color.CYAN else if v >= minVol1 then Color.LIGHT_GRAY else Color.BLACK), no);
