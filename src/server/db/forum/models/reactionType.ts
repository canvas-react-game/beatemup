import { AllowNull, AutoIncrement, Column, 
    DataType, Length, Model, PrimaryKey, Table 
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

  @Length({max: 255})
  @AllowNull(false)
  @Column(DataType.STRING)
  type: string;
} 