var MajorColors=require("./Colors.js").MajorColors;
var MinorColors=require("./Colors.js").MinorColors;

function GetPairNumberFromColors(majorColor, minorColor) {
    let majorIndex;
    let minorIndex;
    for(majorIndex = MajorColors.length; majorIndex >= 0; majorIndex--) {
        if(MajorColors[majorIndex] == majorColor) {
            break;
        }
    }
    for(minorIndex = MinorColors.length; minorIndex >= 0; minorIndex--) {
        if(MinorColors[minorIndex] == minorColor) {
            break;
        }
    }
    return majorIndex * MinorColors.length + minorIndex + 1;
}

module.exports=GetPairNumberFromColors;
