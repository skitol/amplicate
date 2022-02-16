/*
//------------------------------------------------------------------------------ 
// This code was generated by Amplication. 
// 
// Changes to this file will be lost if the code is regenerated. 
//
// There are other ways to to customize your code, see this doc to learn more
// https://docs.amplication.com/docs/how-to/custom-code
//
//------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumTagClassName } from "./EnumTagClassName";
import { IsEnum, IsOptional, ValidateNested } from "class-validator";
import { PredictionWhereUniqueInput } from "../../prediction/base/PredictionWhereUniqueInput";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
@InputType()
class TagUpdateInput {
  @ApiProperty({
    required: false,
    enum: EnumTagClassName,
  })
  @IsEnum(EnumTagClassName)
  @IsOptional()
  @Field(() => EnumTagClassName, {
    nullable: true,
  })
  className?:
    | "Pylon"
    | "Tower"
    | "Tank"
    | "Building"
    | "Building_Steeple"
    | "Bridge"
    | "Sign"
    | "Windmill"
    | "Storage_Structure"
    | "Tank_WaterTower"
    | "SmokeStack"
    | "Industrial_Plant"
    | "Crane";

  @ApiProperty({
    required: false,
    type: () => PredictionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PredictionWhereUniqueInput)
  @IsOptional()
  @Field(() => PredictionWhereUniqueInput, {
    nullable: true,
  })
  prediction?: PredictionWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}
export { TagUpdateInput };
