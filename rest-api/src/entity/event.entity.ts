import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, OneToMany} from "typeorm";
import { TicketEntity } from "./ticket.entity";


@Entity()
export class EventEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    startDate: Date;

    @Column()
    endDate: Date;

    @Column()
    name: string;

    @Column({
        nullable: true
    })
    description: string;

    @Column()
    venue: string;

    @Column()
    imageUrl: string;

    @Column({
        nullable: true,
    })
    ticketLimit: number;

    @Column({
        type: "simple-array",
        nullable: true,
    })
    artists: string[];

    @OneToMany(type => TicketEntity, ticket => ticket.event)
    tickets: TicketEntity[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}