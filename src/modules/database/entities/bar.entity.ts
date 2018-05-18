import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Bar {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string
}
