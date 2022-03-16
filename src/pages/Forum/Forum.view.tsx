import React, { FC, useCallback } from "react";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";

import Container from "@/components/Container";
import PageMeta from "@/components/PageMeta";
import Header from "@/components/Header";
import { routes } from "@/config/routes/routes";
import Button from "@/components/Button";

import styles from "./Forum.module.scss";
import { useForum } from "./Forum.helpers";

interface ForumRecord {
    id: number,
    title: string,
    comments_count: number
}

const Forum: FC = () => {
    const {
        data,
        isLoading,
        table,
        history,
    } = useForum();

    const columns: ColumnsType<ForumRecord> = [
        {
            title: "Заголовок",
            dataIndex: ["data", "title"],
            render: (value: string, item: ForumRecord) => {
                return (
                    <div className={styles.title}>
                        {item?.title}
                    </div>
                );
            },
        },
        {
            title: "Кол-во сообщений",
            dataIndex: ["data", "messagesCount"],
            render: (value: string, item: ForumRecord) => {
                return (
                    <div className={styles.counter}>
                        {item?.comments_count ?? 0}
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
        (record: ForumRecord) => ({ onClick: () => history.push(routes.topic.path.replace(
            ":id", record?.id.toString())),
        }), []);

    const getRowKey = useCallback(
        (record: ForumRecord) => record?.id, []);

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
                        y: 400,
                    }}
                    pagination={false}
                />
            </div>
            <div className={styles.buttonContainer}>
                <Button type='primary' >Создать</Button>
            </div>
        </Container>
    );
};

export default Forum;
