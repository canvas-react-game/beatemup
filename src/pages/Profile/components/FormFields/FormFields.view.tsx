import React, { FC } from "react";

import { useProfileForm } from "../../Profile.helpers";
import { FormElement } from "../../Profile.types";
import {renderFieldSet} from "../../components/FormFields/FormFields.helpers";

const FormFields: FC<Pick<FormElement, "isEdit">> = ({ isEdit }) => {
    const { fields, passwordFields } = useProfileForm();
    return (
        <>
            {renderFieldSet(fields, isEdit)}
            {isEdit && renderFieldSet(passwordFields, isEdit)}
        </>
    );
};

export default FormFields;
