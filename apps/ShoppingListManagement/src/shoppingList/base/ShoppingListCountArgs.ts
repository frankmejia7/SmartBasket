/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ShoppingListWhereInput } from "./ShoppingListWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ShoppingListCountArgs {
  @ApiProperty({
    required: false,
    type: () => ShoppingListWhereInput,
  })
  @Field(() => ShoppingListWhereInput, { nullable: true })
  @Type(() => ShoppingListWhereInput)
  where?: ShoppingListWhereInput;
}

export { ShoppingListCountArgs as ShoppingListCountArgs };
