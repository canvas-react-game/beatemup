import { useCallback, useState } from "react";
import { useForm } from "antd/lib/form/Form";

import { routes } from "@/config/routes/routes";

import Input from "@/components/Input";
import Password from "@/components/Password";

import { ProfileValue } from "./Profile.types";

export const useProfileForm = () => {
  const currentPath = `/#${routes.profile.path}`;

  const onFinish = useCallback(
    () => (values: ProfileValue[]) => console.log(values),
    []
  );
  const onFinishFailed = useCallback(
    () => (errorInfo: any) => console.log("Failed:", errorInfo),
    []
  );

  const [isPreviewVisible, setIsPreviewVisible] = useState<boolean>(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const [avatar] = useState<string | undefined>("");
  const [initialValues] = useState({
    name: "Андрей",
    surname: "Иванов",
    email: "test@mail.ru",
    phone: "+77758662255",
    login: "test",
    password: "12345",
  });
  const [form] = useForm();
  const [fields] = useState<ProfileValue[]>([
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
  ]);

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
