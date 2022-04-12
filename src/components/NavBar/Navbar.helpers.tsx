import { useDispatch } from "react-redux";
import { useSelector } from "@/hooks/useSelector";
import { Theme } from "@/api/Theme/Theme.api";
import { updateTheme, createTheme } from "@/actions/theme.actions";

export const useTheme = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme);

    const changeTheme = (theme: Theme | null) => {
        if (theme === "light") {
            dispatch(updateTheme("dark"));
        } else if (theme === "dark") {
            dispatch(updateTheme("light"));
        } else {
            dispatch(createTheme("dark"));
        }
    };

    return {
        theme,
        changeTheme,
    };
};
