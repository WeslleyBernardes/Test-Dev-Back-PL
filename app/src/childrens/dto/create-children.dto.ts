import { IsString } from "class-validator";

export class CreateChildrenDto {
    @IsString()
    readonly name: string;
    @IsString()
    readonly father: string;
}
