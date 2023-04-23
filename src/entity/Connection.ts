import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  Relation,
  ManyToMany,
  CreateDateColumn,
} from "typeorm";
import { Student } from "./Student";

export enum ConnectionStatus {
  PENDING_ACCEPT = "PENDING_ACCEPT",
  ACTIVE = "ACTIVE",
}

@Entity("connection")
export class Connection {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Student, (student: Student) => student.connections, {
    nullable: false,
  })
  requester: Relation<Student>;

  @ManyToOne(() => Student, (student: Student) => student.connections, {
    nullable: false,
  })
  acceptor: Relation<Student>;

  @CreateDateColumn()
  requestDate: Date;

  @Column({ nullable: true })
  acceptDate: Date;

  @Column({ nullable: true })
  end_date: Date;

  @Column({ nullable: true })
  ended_by: number;

  @Column({ default: 0 })
  strength: number;

  @Column({ nullable: true })
  blocked_date: Date;

  @Column({ nullable: true })
  blocked_by: number;

  @Column({
    type: "enum",
    enum: ConnectionStatus,
  })
  status: Relation<ConnectionStatus>;
}
