import { AllowNull, AutoIncrement, Column, 
    DataType, Model, PrimaryKey, Table 
} from 'sequelize-typescript';

@Table({
    timestamps: false,
    tableName: 'reaction_type'    
})
export class ReactionType extends Model<ReactionType> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  type: string;
} 