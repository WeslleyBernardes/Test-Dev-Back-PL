import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Father } from "../../fathers/entities/father.entity";

@Entity('childrens')
export class Children {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string;

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @ManyToOne(()=> Father, father => father.id, {
         eager: true
        ,onDelete: 'CASCADE' 
    })
    father: string
}

