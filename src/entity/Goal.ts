import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Relation,
  ManyToMany,
} from "typeorm";
import { Student } from "./Student";

@Entity("goals")
export class Goal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  achieved: boolean;

  @ManyToMany(() => Student, (student: Student) => student.goals)
  students: Relation<Student>;
}
