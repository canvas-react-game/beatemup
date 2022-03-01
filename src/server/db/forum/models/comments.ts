import { AllowNull, AutoIncrement, Column, 
    DataType, ForeignKey, Model, PrimaryKey, Table 
} from 'sequelize-typescript';
import { Topic } from './topic';

@Table({
    timestamps: true,
    createdAt: "created_at",
    updatedAt: false,
    tableName: 'comments'    
})
export class Comment extends Model<Comment> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  message: string;
  
  @AllowNull(true)
  @Column(DataType.INTEGER)
  parent_id: number;

  @AllowNull(true)
  @Column(DataType.INTEGER)
  user_id: number;

  @ForeignKey(() => Topic)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  topic_id: number;
} 