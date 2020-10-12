import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

import User from './User';

// vai criar o model a partir de Entity do typeorm
@Entity('appointments') // usado para linkar a classe com a tabela do banco de dados
class Appointment {
    @PrimaryGeneratedColumn('uuid')  // coluna que é chave primária e gerada automaticamente. passou uuid, pois quer gerar valores unicos universais para essa coluna da tabela, e não IDs sequenciais
    id: string;

    @Column() // sem passar nada já é varchar
    provider_id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'provider_id' })
    provider: User;

    @Column('timestamp with time zone')  // mesmo tipo la do banco de dados
    date: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Appointment;