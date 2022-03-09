import {
    AllowNull, AutoIncrement, Column,
    DataType, Length, Model, PrimaryKey, Table,
} from "sequelize-typescript";

const MAX_LENGTH = 512;

@Table({
    timestamps: true,
    createdAt: "created_at",
    updatedAt: false,
    tableName: "topics",
})
export class Topic extends Model<Topic> {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
        id: number;

    @Length({ max: MAX_LENGTH })
    @AllowNull(false)
    @Column(DataType.STRING)
        title: string;

    @AllowNull(false)
    @Column(DataType.STRING)
        body: string;

    @AllowNull(true)
    @Column(DataType.INTEGER)
        user_id: number;

    @AllowNull(true)
    @Column(DataType.INTEGER)
        comments_count: number;
}
