import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Relation,
  ManyToMany,
} from "typeorm";
import { Student } from "./Student";

@Entity("interests")
export class Interest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @ManyToMany(() => Student, (student: Student) => student.interests)
  students: Relation<Student>;
}
