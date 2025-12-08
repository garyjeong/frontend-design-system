export type ThemeColorKey = 'purple' | 'orange' | 'green' | 'blue' | 'custom';
export type ColorScale = {
    50?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
    950?: string;
    [key: string]: string | undefined;
};
export interface ThemePreset {
    name: ThemeColorKey;
    primary: ColorScale;
    foreground?: string;
}
export declare const themePresets: Record<ThemeColorKey, ThemePreset>;
export default themePresets;
