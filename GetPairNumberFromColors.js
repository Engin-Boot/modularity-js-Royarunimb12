var MajorColors=require("./Colors.js").MajorColors;
var MinorColors=require("./Colors.js").MinorColors;

function getMajorIndex(majorColor){
    let majorIndex;
    for(majorIndex = MajorColors.length; majorIndex >= 0; majorIndex--) {
        if(MajorColors[majorIndex] == majorColor) {
            break;
        }
    }
    return majorIndex;
       
}

function getMinorIndex(minorColor){
    let minorIndex;
    for(minorIndex = MinorColors.length; minorIndex >= 0; minorIndex--) {
        if(MinorColors[minorIndex] == minorColor) {
            break;
        }
    }
    return minorIndex;
}

function GetPairNumberFromColors(majorColor, minorColor) {
    let majorIndex=getMajorIndex(majorColor);
    let minorIndex=getMinorIndex(minorColor);
    return majorIndex * MinorColors.length + minorIndex + 1;
}

module.exports=GetPairNumberFromColors;
