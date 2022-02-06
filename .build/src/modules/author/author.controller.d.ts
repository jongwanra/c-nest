import { AuthorService } from './author.service';
import { CrudController } from '@nestjsx/crud';
import { Author } from '../../entity';
export declare class AuthorController implements CrudController<Author> {
    readonly service: AuthorService;
    constructor(service: AuthorService);
}
