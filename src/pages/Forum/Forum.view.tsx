import React, { FC, useCallback } from "react";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";

import Container from "@/components/Container";
import PageMeta from "@/components/PageMeta";
import Header from "@/components/Header";
import { routes } from "@/config/routes/routes";
import styles from "./Forum.module.scss";
import { useForum } from "./Forum.helpers";

interface ForumRecord {
    id: number,
    title: string,
    messagesCount: number
}

const Forum: FC = () => {
    const {
        data,
        isLoading,
        table,
        history,
    } = useForum();

    const columns: ColumnsType<{ data: ForumRecord }> = [
        {
            title: "Заголовок",
            dataIndex: ["data", "title"],
            render: (value: string, item: { data: ForumRecord }) => {
                return (
                    <div className={styles.title}>
                        {item.data.title}
                    </div>
                );
            },
        },
        {
            title: "Кол-во сообщений",
            dataIndex: ["data", "messagesCount"],
            render: (value: string, item: { data: ForumRecord }) => {
                return (
                    <div className={styles.counter}>
                        {item.data.messagesCount}
                    </div>
                );
            },
        },
        {
            title: "Действия",
            // todo кнопки
        },
    ];

    const handleRowClick = useCallback(
        (record: { data: ForumRecord }) => ({ onClick: () => history.push(routes.topic.path.replace(
            ":id", record.data.id.toString())),
        }), []);

    const getRowKey = useCallback(
        (record: { data: ForumRecord }) => record.data.id, []);

    return (
        <Container>
            <PageMeta title="Forum" description="Game forum" />
            <Header currentPath={routes.forum.path} />
            <div className={styles.tableContainer}>
                <Table
                    ref={table}
                    className={styles.leaderBoardTable}
                    columns={columns}
                    dataSource={data}
                    rowKey={getRowKey}
                    onRow={handleRowClick}
                    loading={{
                        size: "large",
                        spinning: isLoading,
                    }}
                    scroll={{
                        y: 500,
                    }}
                    pagination={false}
                />
            </div>
        </Container>
    );
};

export default Forum;
