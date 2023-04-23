import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  Relation,
} from "typeorm";
import { Student } from "./Student";

@Entity("country")
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Student, (student: Student) => student.country)
  students: Student[];
}
