<<<<<<< HEAD
import React, { FC } from "react";
import { Table } from "antd";
import { ColumnsType, TablePaginationConfig } from "antd/es/table";
import {
    FilterValue,
    SorterResult,
    TableCurrentDataSource,
} from "antd/lib/table/interface";
=======
import React, { FC, useCallback } from "react";
import { Table, TablePaginationConfig } from "antd";
import { ColumnsType } from "antd/es/table";
import { FilterValue, SorterResult, TableCurrentDataSource } from "antd/lib/table/interface";

>>>>>>> 4038294203ed64c632dbe509165bc6bbdc6809de
import Header from "@/components/Header";
import PageMeta from "@/components/PageMeta";
import Container from "@/components/Container";

import { routes } from "@/config/routes/routes";
<<<<<<< HEAD
=======

>>>>>>> 4038294203ed64c632dbe509165bc6bbdc6809de
import styles from "./LeaderBoard.module.scss";
import { useLeaderBoard } from "./LeaderBoard.helpers";
import { LeaderBoardRecord, TEAM_SCORE } from "@/config/leaderboard";
import Pagination from "./components/Pagination";

// Колонки таблицы
const columns: ColumnsType<{ data: LeaderBoardRecord }> = [
    {
<<<<<<< HEAD
        title: "Место",
        dataIndex: "position",
    },
    {
        title: "Имя",
        dataIndex: "name",
        sorter: (a: LeaderBoardUser, b: LeaderBoardUser) =>
            a.name.length - b.name.length,
        sortDirections: ["descend"],
        render: (value: string, item: LeaderBoardUser) => (
            <div
                className={`${styles.nameContainer} ${
                    item.is_banned ? styles.nameBanned : styles.nameActive
                }`}
=======
        title: "Логин",
        dataIndex: ["data", "login"],
        render: (value: string, item: { data: LeaderBoardRecord }) => {
            const score = item.data[TEAM_SCORE];
            return <div
                className={
                    `${styles.nameContainer} ${
                        score > 100
                            ? styles.nameActive
                            : styles.nameBanned}`
                }
>>>>>>> 4038294203ed64c632dbe509165bc6bbdc6809de
            >
                {value}
            </div>;
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
<<<<<<< HEAD
    sorter: SorterResult<LeaderBoardUser> | SorterResult<any>[],
    extra: TableCurrentDataSource<any>
=======
    sorter: SorterResult<{ data: LeaderBoardRecord }> | SorterResult<any>[],
    extra: TableCurrentDataSource<any>,
>>>>>>> 4038294203ed64c632dbe509165bc6bbdc6809de
) => {
    console.log("params", pagination, filters, sorter, extra);
};

<<<<<<< HEAD
const LeaderBoard: FC<{}> = () => (
    <Container>
        <PageMeta title="Leaderboard" description="Leaderboard page" />
        <Header currentPath={routes.leaderboard.path} />
        <div className={styles.leaderBoardContainer}>
            <Table
                className={styles.leaderBoardTable}
                columns={columns}
                dataSource={LeaderBoardData}
                onChange={onChange}
                showSorterTooltip={false}
=======
const LeaderBoard: FC<{}> = () => {
    const {
        data,
        isLoading,
        canMoveLeft,
        onMoveLeft,
        canMoveRight,
        onMoveRight,
        table,
        tableScroll,
    } = useLeaderBoard();

    const getRowKey = useCallback(
        (record: { data: LeaderBoardRecord }) => record.data.login,
        [],
    );

    return (
        <Container>
            <Header currentPath={routes.leaderboard.path}/>
            <div className={styles.leaderBoardContainer}>
                <Table
                    ref={table}
                    className={styles.leaderBoardTable}
                    columns={columns}
                    dataSource={data}
                    onChange={onChange}
                    rowKey={getRowKey}
                    loading={{
                        size: "large",
                        spinning: isLoading,
                    }}
                    scroll={{
                        y: tableScroll,
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
>>>>>>> 4038294203ed64c632dbe509165bc6bbdc6809de
            />
        </Container>
    );
};

export default LeaderBoard;
