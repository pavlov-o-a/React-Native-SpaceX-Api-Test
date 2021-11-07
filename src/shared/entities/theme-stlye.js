export default class ThemeStyle {
  constructor(
    fontSizeSmall: Number = 12,
    fontSizeMedium: Number = 14,
    fontSizeLarge: Number = 16,
    primaryColor: String,
    secondaryColor: String,
    fontPrimaryColor: String,
    fontSecondaryColor: String,
    background: String,
  ) {
    this.fontSizeSmall = fontSizeSmall;
    this.fontSizeMedium = fontSizeMedium;
    this.fontSizeLarge = fontSizeLarge;
    this.primaryColor = primaryColor;
    this.secondaryColor = secondaryColor;
    this.fontPrimaryColor = fontPrimaryColor;
    this.fontSecondaryColor = fontSecondaryColor;
    this.background = background;
  }
}
