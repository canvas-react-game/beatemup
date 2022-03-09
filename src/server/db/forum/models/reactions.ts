import {
    AllowNull, AutoIncrement, Column,
    DataType, ForeignKey, Model, PrimaryKey, Table,
} from "sequelize-typescript";
import { Comment } from "./comments";
import { ReactionType } from "./reactionType";

@Table({
    timestamps: true,
    createdAt: "created_at",
    updatedAt: false,
    tableName: "reactions",
})
export class Reaction extends Model<Reaction> {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
        id: number;

    @ForeignKey(() => Comment)
    @AllowNull(false)
    @Column(DataType.INTEGER)
        comment_id: number;

    @AllowNull(true)
    @Column(DataType.INTEGER)
        user_id: number;

    @ForeignKey(() => ReactionType)
    @AllowNull(false)
    @Column(DataType.INTEGER)
        reaction_type_id: number;
}
