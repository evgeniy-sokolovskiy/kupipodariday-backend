import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm'
import { IsUrl } from 'class-validator'
import { User } from '../../users/entities/user.entity'

@Entity()
export class Offer {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  @CreateDateColumn()
  createdAt: Date

  @Column()
  @UpdateDateColumn()
  updatedAt: Date

  @Column()
  @ManyToOne(() => User, (user) => user.offers)
  user: User

  @Column()
  @IsUrl()
  item: string

  @Column({
    type: 'decimal',
    scale: 2,
    transformer: {
      to: (value: number): number => {
        return parseFloat(value.toFixed(2))
      },
      from: (value: string): number => {
        return parseFloat(value)
      },
    },
  })
  amount: number

  @Column({
    type: 'boolean',
    default: false,
  })
  hidden: boolean
}
