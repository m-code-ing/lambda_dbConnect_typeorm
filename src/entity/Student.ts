import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  Relation,
  ManyToMany,
  JoinTable,
  JoinColumn,
} from "typeorm";
import { Country } from "./Country";
import { University } from "./University";
import { Interest } from "./Interest";
import { Goal } from "./Goal";
import { Connection } from "./Connection";

@Entity("students")
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  // TODO: this should be unique.. uncomment below line
  // { unique: true }
  email: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => Country, (country: Country) => country.students)
  country: Relation<Country>;

  @Column({ type: "date", nullable: true })
  graduation_date: string;

  @Column({ type: "text", nullable: true })
  profile_pic: string;

  @ManyToMany(() => University, (university: University) => university.students)
  @JoinTable({ name: "student_university" })
  universities: University[];

  @ManyToMany(() => Interest, (interest: Interest) => interest.students)
  @JoinTable({ name: "student_interests" })
  interests: Relation<Interest[]>;

  @ManyToMany(() => Goal, (goal: Goal) => goal.students)
  @JoinTable({ name: "student_goal" })
  goals: Goal[];

  @OneToMany(() => Connection, (connection: Connection) => connection.requester)
  connections: Connection[];

  @OneToMany(() => Connection, (connection: Connection) => connection.requester)
  requested_connections: Connection[];

  @OneToMany(() => Connection, (connection: Connection) => connection.acceptor)
  accepted_connections: Connection[];

  @OneToMany(
    () => Connection,
    (connection: Connection) => connection.requester,
    {
      nullable: true,
    }
  )
  active_connections: Connection[];

  @OneToMany(
    () => Connection,
    (connection: Connection) => connection.requester,
    {
      nullable: true,
    }
  )
  pending_connection_requests: Connection[];

  @OneToMany(
    () => Connection,
    (connection: Connection) => connection.acceptor,
    {
      nullable: true,
    }
  )
  pending_connection_accepts: Connection[];
}
