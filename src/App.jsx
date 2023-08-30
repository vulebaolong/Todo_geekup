import { useEffect } from "react";
import "./App.css";
import Task from "./components/Task/Task";
import User from "./components/User/User";
import { lcStorage } from "./helpers/localStorage";
import { THEME } from "./contants/configContants";
import { useDispatch, useSelector } from "react-redux";
import { darkThemeREDU, lightThemeREDU, toggleThemeREDU } from "./redux/slices/themeSlice";
import { ConfigProvider, theme } from "antd";
import { MdLightMode, MdNightlight } from "react-icons/md";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const theme = lcStorage.get(THEME);
        if (theme === "light") dispatch(lightThemeREDU());
        if (theme === "dark") dispatch(darkThemeREDU());
    }, []);

    const { themeSelect } = useSelector((state) => state.themeSlice);

    const themeAlgorithm = themeSelect === "dark" ? theme.darkAlgorithm : undefined;

    const toggleTheme = () => {
        dispatch(toggleThemeREDU());
    };
    return (
        <ConfigProvider
            theme={{
                algorithm: themeAlgorithm,
            }}
        >
            <div className="p-10 space-y-5">
                {/* TITLE and THEME */}
                <div className="flex items-baseline justify-center gap-5">
                    {/* TITLE */}
                    <h1 className="text-4xl font-black">Todo</h1>

                    {/* THEME */}
                    <div onClick={toggleTheme} className="btnLight text-2xl cursor-pointer">
                        <MdLightMode />
                    </div>
                    <div onClick={toggleTheme} className="btnNight text-2xl hidden cursor-pointer">
                        <MdNightlight />
                    </div>
                </div>
                <User />
                <Task />
            </div>
        </ConfigProvider>
    );
}

export default App;
