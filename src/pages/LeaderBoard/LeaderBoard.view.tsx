import React, { FC, useCallback } from "react";
import { Table, TablePaginationConfig } from "antd";
import { ColumnsType } from "antd/es/table";
import { FilterValue, SorterResult, TableCurrentDataSource } from "antd/lib/table/interface";

import Header from "@/components/Header";
import Container from "@/components/Container";

import { routes } from "@/config/routes/routes";

import styles from "./LeaderBoard.module.scss";
import { useLeaderBoard } from "./LeaderBoard.helpers";
import { LeaderBoardRecord, TEAM_SCORE } from "@/config/leaderboard"
import Pagination from "./components/Pagination";

// Колонки таблицы
const columns: ColumnsType<{data: LeaderBoardRecord}> = [
    {
        title: "Логин",
        dataIndex: ["data", "login"],
        render: (value: string, item: {data: LeaderBoardRecord}) => {
            const score = item.data[TEAM_SCORE]
            return <div
                className={
                    `${styles.nameContainer} ${
                        score > 100
                            ? styles.nameActive
                            : styles.nameBanned}`
                }
            >
                {value}
            </div>
        },
    },
    {
        title: "Очки",
        dataIndex: ["data", TEAM_SCORE],
    },
];

// Дефолтный колбэк при сортировке/пагинации/фильтрации
const onChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<{data: LeaderBoardRecord}> | SorterResult<any>[],
    extra: TableCurrentDataSource<any>,
) => {
    console.log("params", pagination, filters, sorter, extra);
};

const LeaderBoard: FC<{}> = () => {

    const {
        data,
        isLoading,
        canMoveLeft,
        onMoveLeft,
        canMoveRight,
        onMoveRight
    } = useLeaderBoard()

    const getRowKey = useCallback(
        (record: {data: LeaderBoardRecord}) => {
            return record.data.login
        },
        []
    )

    return (
        <Container>
            <Header currentPath={routes.leaderboard.path}/>
            <div className={styles.leaderBoardContainer}>
                <Table
                    className={styles.leaderBoardTable}
                    columns={columns}
                    dataSource={data}
                    onChange={onChange}
                    rowKey={getRowKey}
                    loading={{
                        size: "large",
                        spinning: isLoading
                    }}
                    pagination={false}
                />
            </div>
            <Pagination
                onMoveLeft={onMoveLeft}
                canMoveLeft={canMoveLeft}
                onMoveRight={onMoveRight}
                canMoveRight={canMoveRight}
                isLoading={isLoading}
           />
        </Container>
    )
};

export default LeaderBoard;
