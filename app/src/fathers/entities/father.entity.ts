import { Timestamp } from "node_modules/rxjs/dist/types";
import { Column, CreateDateColumn, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Children } from "../../childrens/entities/children.entity";

@Entity('fathers')
export class Father {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    characteristics: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToMany(() => Children, children => children.father,{
        cascade:['insert']
        ,onDelete:'CASCADE'
    })
    childrens: Children[]

    
}