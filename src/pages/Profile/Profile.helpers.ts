import {useCallback, useState} from "react";
import { Input } from "antd";
import { useForm } from "antd/lib/form/Form";

import { routes } from "@/config/routes/routes";
import Password from "@/components/Password";
import { useSelector } from "@/helpers/useSelector";

import { ProfileValue } from "./Profile.types";

const currentPath = routes.profile.path;

const initialFieldsState = [
    {
        name: "name",
        disabled: true,
        required: false,
        placeholder: "Имя",
        component: Input,
    },
    {
        name: "surname",
        disabled: true,
        required: false,
        placeholder: "Фамилия",
        component: Input,
    },
    {
        name: "email",
        disabled: true,
        required: true,
        message: "Введите эл. почту",
        placeholder: "Эл. почта",
        component: Input,
    },
    {
        name: "phone",
        disabled: true,
        required: false,
        placeholder: "Телефон",
        component: Input,
    },
    {
        name: "login",
        disabled: true,
        required: true,
        message: "Введите логин",
        placeholder: "Логин",
        component: Input,
    },
    {
        name: "password",
        disabled: true,
        required: true,
        message: "Введите пароль",
        placeholder: "Пароль",
        component: Password,
    },
];

export const useProfileForm = () => {
    const profileData = useSelector(state => state.profile.profile);
    console.log('profile is: ', profileData);

    const [isPreviewVisible, setIsPreviewVisible] = useState<boolean>(false);
    const [isConfirmVisible, setIsConfirmVisible] = useState<boolean>(false);
    const [isEdit, setIsEdit] = useState<boolean>(false);

    const [avatar] = useState<string | undefined>("");
    const [initialValues] = useState({ ...profileData });
    const [form] = useForm();
    const [fields] = useState<ProfileValue[]>(initialFieldsState);

    const onFinish = useCallback(
        (values: ProfileValue[]) => console.log(values),
        [],
    );

    const onFinishFailed = useCallback(
        (errorInfo: any) => console.log("Failed:", errorInfo),
        [],
    );

    return {
        currentPath,
        onFinish,
        onFinishFailed,
        isPreviewVisible,
        setIsPreviewVisible,
        isConfirmVisible,
        setIsConfirmVisible,
        isEdit,
        setIsEdit,
        avatar,
        initialValues,
        form,
        fields,
    };
};
