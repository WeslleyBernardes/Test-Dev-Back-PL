import { IsString } from "class-validator";
import { Children } from "src/childrens/entities/children.entity";

export class CreateFatherDto {
    @IsString()
    readonly name: string;
    @IsString()
    readonly characteristics: string
}
