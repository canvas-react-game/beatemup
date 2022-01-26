import { FormInstance } from "antd";

export type FormElement = {
    isEdit: boolean;
    setIsEdit: Function;
    form: FormInstance;
    onFinish: Function;
};
