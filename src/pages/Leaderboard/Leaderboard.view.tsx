import React, { FC } from "react";
import { Table } from "antd";
import { ColumnsType, TablePaginationConfig } from "antd/es/table";
import { FilterValue, SorterResult, TableCurrentDataSource } from "antd/lib/table/interface";
import Header from "@/components/Header";
import Container from "@/components/Container";

import styles from "./LeaderBoard.module.scss";
import { LeaderBoardData, LeaderBoardUser } from "@/mock/leaderboard";

// Колонки таблицы
const columns: ColumnsType<LeaderBoardUser> = [
    {
        title: "Место",
        dataIndex: "position",
    },
    {
        title: "Имя",
        dataIndex: "name",
        sorter: (a: LeaderBoardUser, b: LeaderBoardUser) => a.name.length - b.name.length,
        sortDirections: ["descend"],
        render: (value: string, item: LeaderBoardUser) => (
            <div
                className={
                    `${styles.nameContainer} ${
                        item.is_banned
                            ? styles.nameBanned
                            : styles.nameActive}`
                }
            >
                {value}
            </div>
        ),
    },
    {
        title: "Очки",
        dataIndex: "score",
        defaultSortOrder: "descend",
        sorter: (a: LeaderBoardUser, b: LeaderBoardUser) => a.score - b.score,
    },
];

// Дефолтный колбэк при сортировке/пагинации/фильтрации
const onChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<LeaderBoardUser> | SorterResult<any>[],
    extra: TableCurrentDataSource<any>,
) => {
    console.log("params", pagination, filters, sorter, extra);
};

const LeaderBoard: FC<{}> = () => (
    <Container>
        <Header />
        <div className={styles.leaderBoardContainer}>
            <Table
                className={styles.leaderBoardTable}
                columns={columns}
                dataSource={LeaderBoardData}
                onChange={onChange}
            />
        </div>
    </Container>
);

export default LeaderBoard;
