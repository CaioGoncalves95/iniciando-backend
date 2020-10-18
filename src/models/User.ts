import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

// vai criar o model a partir de Entity do typeorm
@Entity('users') // usado para linkar a classe com a tabela do banco de dados
class User {
    @PrimaryGeneratedColumn('uuid')  // coluna que é chave primária e gerada automaticamente. passou uuid, pois quer gerar valores unicos universais para essa coluna da tabela, e não IDs sequenciais
    id: string;

    @Column() // sem passar nada já é varchar
    name: string;

    @Column() // sem passar nada já é varchar
    email: string;

    @Column() // sem passar nada já é varchar
    password: string;

    @Column() // sem passar nada já é varchar
    avatar: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default User;