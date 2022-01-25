import { useCallback, useEffect, useState } from "react";
import { Input } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useDispatch } from "react-redux";

import { PasswordData } from "api/Profile";
import { routes } from "@/config/routes/routes";
import Password from "@/components/Password";
import { useSelector } from "@/helpers/useSelector";
import { getProfile, setPassword, setProfile } from "@/actions/profile.actions";
import { SignUpData, UserInfo } from "@/api/Auth";

const currentPath = routes.profile.path;

const initialFields = [
    {
        name: "first_name",
        disabled: true,
        required: false,
        placeholder: "Имя",
        component: Input,
    },
    {
        name: "second_name",
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
];

const passwordFields = [
    {
        name: "oldPassword",
        disabled: true,
        required: false,
        message: "Введите старый пароль",
        placeholder: "Старый пароль",
        component: Password,
    },
    // todo добавить validationRules фнукцию, триггерит обязательность, если заполнен oldPassword
    {
        name: "newPassword",
        disabled: true,
        required: false,
        message: "Введите новый пароль",
        placeholder: "Новый пароль",
        component: Password,
    },
];

export const useProfileForm = () => {
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [avatar] = useState<string | undefined>("");
    const [form] = useForm();
    const dispatch = useDispatch();

    const { data, isLoading } = useSelector((state) => state.profile);

    useEffect(() => {
        dispatch(getProfile());
    }, []);

    useEffect(() => {
        form.setFieldsValue(data);
    }, [form, data]);

    const onFinish = useCallback((values: SignUpData & PasswordData) => {
        const { oldPassword, newPassword, ...rest } = values;
        dispatch(setProfile(rest));
        if (oldPassword && newPassword) {
            dispatch(setPassword({ oldPassword, newPassword }));
        }
    }, []);

    const onFinishFailed = useCallback(
        (errorInfo: UserInfo) => console.log("Failed:", errorInfo),
        [],
    );

    return {
        currentPath,
        onFinish,
        onFinishFailed,
        isEdit,
        setIsEdit,
        avatar,
        profile: data,
        form,
        fields: initialFields,
        passwordFields,
        isLoading,
    };
};
