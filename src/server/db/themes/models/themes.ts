import {
    AllowNull, AutoIncrement, Column,
    DataType, Model, PrimaryKey, Table,
} from "sequelize-typescript";

@Table({
    timestamps: false,
    tableName: "themes",
})
export class Theme extends Model<Theme> {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
        id: number;

    @AllowNull(true)
    @Column(DataType.STRING)
        theme: string;

    @AllowNull(true)
    @Column(DataType.INTEGER)
        user_id: number;
}
