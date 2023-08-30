import { Button } from "antd";
import IconDone from "../../assets/IconDone";
import IconNotDone from "../../assets/IconNotDone";
import { useState } from "react";
import { taskApi } from "../../api/taskApi";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setUpdateTaskUserREDU } from "../../redux/slices/taskSlice";

function ItemTask({ task }) {
    const dispatch = useDispatch();

    const [loadingBtn, setLoadingBtn] = useState(false);

    const handleMarkDone = async (idTask) => {
        try {
            setLoadingBtn(true);

            const { data, status } = await taskApi.markDoneTask(idTask, { completed: true });

            console.log("markDoneTask", { data, status });

            dispatch(setUpdateTaskUserREDU(data))
        } catch (error) {
            console.log(error);
        } finally {
            setLoadingBtn(false);
        }
    };
    return (
        <>
            <div className="flex items-center gap-2">
                {task.completed ? <IconDone /> : <IconNotDone />}
                <p>{task.title}</p>
            </div>
            {!task.completed && (
                <Button
                    onClick={() => {
                        handleMarkDone(task.id);
                    }}
                    className="flex items-center !cursor-pointer"
                    loading={loadingBtn}
                >
                    Mark done
                </Button>
            )}
        </>
    );
}

ItemTask.propTypes = {
    task: PropTypes.any,
};
export default ItemTask;
