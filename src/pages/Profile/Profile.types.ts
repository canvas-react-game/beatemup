export type ProfileValue = {
  name: string;
  required: boolean;
  disabled?: boolean;
  message?: string;
  placeholder: string;
  component: any;
};

export type FormElement = {
  isEdit: boolean;
  setIsEdit: Function;
  form: any;
  onFinish: Function;
};
