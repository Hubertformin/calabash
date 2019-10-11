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

    @Column({unique: true})
    purchaseCode: string;

    @ManyToOne(type => EventEntity, event => event.tickets, {
        cascade: true,
    })
    event: EventEntity;
    
    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}