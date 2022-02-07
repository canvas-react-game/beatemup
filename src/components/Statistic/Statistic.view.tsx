import React, { FC } from "react";
import { Statistic as CustomStatistic, StatisticProps } from "antd";

interface Props extends StatisticProps {}

const Statistic: FC<Props> = ({
    title, value, style, children,
}) => (
    <CustomStatistic
        title={title}
        value={value}
        style={style}
        children={children}
    />
);

export default Statistic;
