export interface Theme {
    background: string;
    color: string;
    primary: string;
    secondary: string;
    lightGray: string;
    spacing: {
        unit: number;
    };
}

export const themes: Record<string, Theme> = {
    dark: {
        background: '#141e26',
        color: '#fff',
        primary: "#31393b",
        secondary: "blue",
        lightGray: "#737578",
        spacing: {
            unit: 8
        }
    },
    light: {
        background: '#fff',
        color: '#333',
        primary: "#f0f0f0",
        secondary: "deepskyblue",
        lightGray: "#e0e0e0",
        spacing: {
            unit: 8
        }
    }
};
