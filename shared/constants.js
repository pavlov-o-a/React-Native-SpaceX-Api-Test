import ThemeStyle from './entities/theme-stlye';
import AppColors from './styles/app-colors';

export const DayTheme = new ThemeStyle(
  12,
  14,
  16,
  AppColors.blue,
  AppColors.yellow,
  AppColors.black,
  AppColors.grey,
  AppColors.white,
);

export const NightTheme = new ThemeStyle(
  12,
  14,
  16,
  AppColors.blue,
  AppColors.yellow,
  AppColors.white,
  AppColors.grey,
  AppColors.black,
);
