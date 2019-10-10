import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, ManyToOne} from "typeorm";
import { EventEntity } from "./event.entity";

@Entity()
export class TicketEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string
    
    @Column()
    lastName: string

    @Column()
    purchaseCode: string;

    @ManyToOne(type => EventEntity, event => event.tickets)
    event: EventEntity;
    
    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}