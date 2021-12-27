import React, { FC } from "react";
import { Statistic as CustomStatistic, StatisticProps } from "antd";

import styles from "./Statistic.module.scss";

interface Props extends StatisticProps {}

const Statistic: FC<Props> = ({ title, value, style, children }) => {
  return (
    <CustomStatistic
      className={styles.antStatistic}
      title={title}
      value={value}
      style={style}
      children={children}
    />
  );
};

export default Statistic;
