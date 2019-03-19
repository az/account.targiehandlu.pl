
import Provider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import _get from 'lodash/get'

import {
  red100,
  red500,
  red700,
  grey200,
  grey300,
  grey500,
  grey700

} from 'material-ui/styles/colors';

//https://github.com/mui-org/material-ui/blob/master/src/styles/getMuiTheme.js

const appTheme = `${process.env.REACT_APP_THEME}`;

const customThemes = {

  black : {


    //  spacing: spacing,
      fontFamily: "'Lato', 'Helvetica', sans-serif",
      palette: {
        primary1Color: '#000000', /*table alternate rows!*/
        primary2Color: grey300,
        primary3Color: grey300,
        accent1Color: red500,
        accent2Color: grey700, /*pagination + table alt rows onHover  */
        accent3Color: grey700, /*table column names */
        // textColor: darkBlack,
        // alternateTextColor: white,
        // canvasColor: white,
        // borderColor: grey300,
        // disabledColor: fade(darkBlack, 0.3),
        // pickerHeaderColor: cyan500,
        // clockCircleColor: fade(darkBlack, 0.07),
        // shadowColor: fullBlack,
      },
    appBar: {
      color: '#fdd835',
      titleFontWeight: 300,
      textColor : '#000000'
    },

    tableRow: {
       hoverColor: grey300,
       stripeColor: grey200,
       // selectedColor: palette.borderColor,
       // textColor: palette.textColor,
       // borderColor: palette.borderColor,
       // height: 48,
     },

     card: {
        // titleColor: fade(palette.textColor, 0.87),
        // subtitleColor: fade(palette.textColor, 0.54),
        // fontWeight: typography.fontWeightMedium,
      },
      cardMedia: {
        // color: darkWhite,
        // overlayContentBackground: lightBlack,
        // titleColor: darkWhite,
        // subtitleColor: lightWhite,
      },
      cardText: {
        // textColor: palette.textColor,
      },

     flatButton: {
        // color: transparent,
        // buttonFilterColor: '#999999',
        // disabledTextColor: fade(palette.textColor, 0.3),
      //  textColor: '#ffffff',
      //  primaryColor: '#000000',
      //  secondaryTextColor: '#ffffff',
        // fontSize: typography.fontStyleButtonFontSize,
        // fontWeight: typography.fontWeightMedium,
      },

    raisedButton: {
        
      //  // color: palette.alternateTextColor,
      //   // textColor: palette.textColor,
      //   textColor: '#ffffff',
      //   primaryColor: '#000000',
      //   // primaryTextColor: palette.alternateTextColor,
        
      //   secondaryColor: palette.accent1Color,
      //   secondaryTextColor: palette.alternateTextColor,
        
        // disabledColor: darken(palette.alternateTextColor, 0.1),
        // disabledTextColor: fade(palette.textColor, 0.3),
        // fontSize: typography.fontStyleButtonFontSize,
        // fontWeight: typography.fontWeightMedium,
    },

    tabs: {
        backgroundColor: grey200,
        textColor: grey500,
        selectedTextColor: red700,
    },

    // card: {
    //    titleColor: fade(palette.textColor, 0.87),
    //    subtitleColor: fade(palette.textColor, 0.54),
    //    fontWeight: typography.fontWeightMedium,
    //  },
    //  cardMedia: {
    //    color: darkWhite,
    //    overlayContentBackground: lightBlack,
    //    titleColor: darkWhite,
    //    subtitleColor: lightWhite,
    //  },
    //  cardText: {
    //    textColor: palette.textColor,
    //  },


  },

  red : {


    //  spacing: spacing,
      fontFamily: "'Lato', 'Helvetica', sans-serif",
      palette: {
        // primary1Color: grey200, /*table alternate rows!*/
        primary2Color: grey300,
        primary3Color: grey300,
        accent1Color: red500,
        accent2Color: grey700, /*pagination + table alt rows onHover  */
        accent3Color: grey700, /*table column names */
        // textColor: darkBlack,
        // alternateTextColor: white,
        // canvasColor: white,
        // borderColor: grey300,
        // disabledColor: fade(darkBlack, 0.3),
        // pickerHeaderColor: cyan500,
        // clockCircleColor: fade(darkBlack, 0.07),
        // shadowColor: fullBlack,
      },
    appBar: {
      color: red500,
      titleFontWeight: 300,
    },

    tableRow: {
       hoverColor: grey300,
       stripeColor: grey200,
       // selectedColor: palette.borderColor,
       // textColor: palette.textColor,
       // borderColor: palette.borderColor,
       // height: 48,
     },

     card: {
        // titleColor: fade(palette.textColor, 0.87),
        // subtitleColor: fade(palette.textColor, 0.54),
        // fontWeight: typography.fontWeightMedium,
      },
      cardMedia: {
        // color: darkWhite,
        // overlayContentBackground: lightBlack,
        // titleColor: darkWhite,
        // subtitleColor: lightWhite,
      },
      cardText: {
        // textColor: palette.textColor,
      },

     flatButton: {
        // color: transparent,
        // buttonFilterColor: '#999999',
        // disabledTextColor: fade(palette.textColor, 0.3),
       textColor: red700,
        primaryTextColor: red700,
    //    secondaryTextColor: palette.accent1Color,
        // fontSize: typography.fontStyleButtonFontSize,
        // fontWeight: typography.fontWeightMedium,
      },

    raisedButton: {
        // color: palette.alternateTextColor,
        // textColor: palette.textColor,
        primaryColor: red700,
        // primaryTextColor: palette.alternateTextColor,
        // secondaryColor: palette.accent1Color,
        // secondaryTextColor: palette.alternateTextColor,
        // disabledColor: darken(palette.alternateTextColor, 0.1),
        // disabledTextColor: fade(palette.textColor, 0.3),
        // fontSize: typography.fontStyleButtonFontSize,
        // fontWeight: typography.fontWeightMedium,
    },

    tabs: {
        backgroundColor: grey200,
        textColor: grey500,
        selectedTextColor: red700,
    },

    // card: {
    //    titleColor: fade(palette.textColor, 0.87),
    //    subtitleColor: fade(palette.textColor, 0.54),
    //    fontWeight: typography.fontWeightMedium,
    //  },
    //  cardMedia: {
    //    color: darkWhite,
    //    overlayContentBackground: lightBlack,
    //    titleColor: darkWhite,
    //    subtitleColor: lightWhite,
    //  },
    //  cardText: {
    //    textColor: palette.textColor,
    //  },


  }

};


export const getTheme = () => getMuiTheme(appTheme && appTheme in customThemes ? customThemes[appTheme] : customThemes.red)

export const getColorsFromTheme = () => _get(getTheme(), "palette", {})

export {  Provider }
