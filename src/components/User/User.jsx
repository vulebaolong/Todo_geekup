import { Select } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setListUserMID } from "../../redux/slices/userSlice";
import { setIdUserREDU, setListTaskUserMID } from "../../redux/slices/taskSlice";

function User() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setListUserMID());
    }, []);

    const { listUser } = useSelector((state) => state.userSlice);
    const { listTaskUser } = useSelector((state) => state.taskSlice);

    const handleChange = (value) => {
        dispatch(setIdUserREDU(value));

        //  nếu chauw có dữ liệu thì mới call API còn có rồi sẽ không làm gì hêt
        if (listTaskUser[value] === undefined) {
            dispatch(setListTaskUserMID(value));
        }
    };

    const options = listUser.map((user) => {
        return {
            value: user.id,
            label: user.name,
        };
    });

    return (
        <div className="space-y-5">
            <div className="flex items-center gap-5">
                <h2 className="text-base font-medium">User</h2>
                <div className="h-[1px] flex-1 dark:bg-slate-700 bg-slate-200"></div>
            </div>
            <Select
                placeholder="Select a user"
                style={{
                    width: 200,
                }}
                onChange={handleChange}
                options={options}
            />
        </div>
    );
}
export default User;
