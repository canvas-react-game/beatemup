import { routes } from "@/config/routes/routes";

export type Component = "Input" | "Password";

export type FormItem = {
  name: string;
  required: boolean;
  disabled?: boolean;
  message?: string;
  placeholder: string;
  component: string;
};

interface ProfileValues {
  name: string;
  surname: string;
  email: string;
  phone: string;
  login: string;
  password: string;
}

export const form: FormItem[] = [
  {
    name: "name",
    required: false,
    placeholder: "Имя",
    component: "Input",
  },
  {
    name: "surname",
    required: false,
    placeholder: "Фамилия",
    component: "Input",
  },
  {
    name: "email",
    required: true,
    message: "Введите эл. почту",
    placeholder: "Эл. почта",
    component: "Input",
  },
  {
    name: "phone",
    required: false,
    placeholder: "Телефон",
    component: "Input",
  },
  {
    name: "login",
    disabled: true,
    required: true,
    message: "Введите логин",
    placeholder: "Логин",
    component: "Input",
  },
  {
    name: "password",
    required: true,
    message: "Введите пароль",
    placeholder: "Пароль",
    component: "Password",
  },
];

export const useProfileForm = () => {
  const currentPath = `/#${routes.profile.path}`;

  const onFinish = (values: ProfileValues) => console.log(values);
  const onFinishFailed = (errorInfo: any) => console.log("Failed:", errorInfo);

  return {
    currentPath,
    onFinish,
    onFinishFailed,
  };
};

export function getBase64(file: File, cb: Function) {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    cb(reader.result);
  };
  reader.onerror = function (error) {
    console.log("Error: ", error);
  };
}
