/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ShoppingListProductWhereInput } from "./ShoppingListProductWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ShoppingListProductListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ShoppingListProductWhereInput,
  })
  @ValidateNested()
  @Type(() => ShoppingListProductWhereInput)
  @IsOptional()
  @Field(() => ShoppingListProductWhereInput, {
    nullable: true,
  })
  every?: ShoppingListProductWhereInput;

  @ApiProperty({
    required: false,
    type: () => ShoppingListProductWhereInput,
  })
  @ValidateNested()
  @Type(() => ShoppingListProductWhereInput)
  @IsOptional()
  @Field(() => ShoppingListProductWhereInput, {
    nullable: true,
  })
  some?: ShoppingListProductWhereInput;

  @ApiProperty({
    required: false,
    type: () => ShoppingListProductWhereInput,
  })
  @ValidateNested()
  @Type(() => ShoppingListProductWhereInput)
  @IsOptional()
  @Field(() => ShoppingListProductWhereInput, {
    nullable: true,
  })
  none?: ShoppingListProductWhereInput;
}
export { ShoppingListProductListRelationFilter as ShoppingListProductListRelationFilter };
