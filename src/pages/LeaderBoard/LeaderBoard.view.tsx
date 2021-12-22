import Header from "@/components/Header";
import Container from "@/components/Container";
import React, { FC } from "react";
import {Table} from "antd"
import { ColumnsType } from 'antd/es/table';

import styles from "./LeaderBoard.module.scss"
import { LeaderBoardData, LeaderBoardUser } from "@/mock/leaderboard";

const columns: ColumnsType<LeaderBoardUser> = [
    {
      title: 'N',
      dataIndex: 'position',
    },
    {
      title: 'Имя',
      dataIndex: 'name',
      sorter: (a: LeaderBoardUser, b: LeaderBoardUser) => a.name.length - b.name.length,
      sortDirections: ['descend'],
    },
    {
      title: 'Очки',
      dataIndex: 'score',
      defaultSortOrder: 'descend',
      sorter: (a: LeaderBoardUser, b: LeaderBoardUser) => a.score - b.score,
    },
];
  

  
function onChange(pagination: any, filters: any, sorter: any, extra: any) {
console.log('params', pagination, filters, sorter, extra);
}

const LeaderBoard: FC<{}> = () => {

    return (
        <Container>
            <Header />
            <div className={styles.leaderBoardContainer}>
                <Table 
                    className={styles.leaderBoardTable} 
                    rowClassName={styles.leaderBoardTableRow}
                    columns={columns} dataSource={LeaderBoardData} 
                    onChange={onChange} 
                />
            </div>
        </Container>
    )
}

export default LeaderBoard