import { Author } from '../../entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
export declare class AuthorService extends TypeOrmCrudService<Author> {
    constructor(repo: any);
}
