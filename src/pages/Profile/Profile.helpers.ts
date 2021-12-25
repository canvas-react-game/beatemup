import { routes } from "@/config/routes/routes";

export type Component = "Input" | "Password";

export type FormItem = {
  value?: string;
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
