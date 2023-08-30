import { useSelector } from "react-redux";
import ItemTask from "./ItemTask";
import { Empty } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

function Task() {
    const { listTaskUser } = useSelector((state) => state.taskSlice);

    const { idUser } = useSelector((state) => state.taskSlice);

    const { isLoadingTask } = useSelector((state) => state.loadingSlice);

    // Tạo mảng mới để lưu các đối tượng có completed là false và true
    const completedFalse = [];
    const completedTrue = [];

    // Phân loại các đối tượng vào mảng tương ứng
    listTaskUser[idUser]?.forEach((item) => {
        if (item.completed === false) {
            completedFalse.push(item);
        } else {
            completedTrue.push(item);
        }
    });

    // Kết hợp mảng đã phân loại sao cho các đối tượng completed=false lên trước
    const sortedData = completedFalse.concat(completedTrue);

    const renderEmpty = () => {
        if (idUser === null) {
            return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
        }
    };

    const renderLoading = () => {
        if (isLoadingTask) {
            return (
                <div className="flex justify-center py-5">
                    <LoadingOutlined />
                </div>
            );
        }
    };

    return (
        <div className="">
            {/* TITLE */}
            <div className="flex items-center gap-5 ">
                <h2 className="text-base font-medium">Task</h2>
                <div className="h-[1px] flex-1 dark:bg-slate-700 bg-slate-200"></div>
            </div>

            {/* BODY */}
            <div className="h-[500px] mb-2 mt-5 rounded-lg border dark:border-slate-700 border-slate-200 overflow-y-scroll overflow-x-hidden divide-y dark:divide-slate-700 divide-slate-200">
                {renderEmpty()}
                {renderLoading()}
                {sortedData.map((task) => {
                    return (
                        <div key={task.id} className="flex items-center justify-between px-10 py-2">
                            <ItemTask task={task} />
                        </div>
                    );
                })}
            </div>

            {/* FOOTER */}
            <span className="mt-5">
                Done {completedFalse.length} / {listTaskUser[idUser] ? listTaskUser[idUser].length : "0"} tasks
            </span>
        </div>
    );
}
export default Task;
