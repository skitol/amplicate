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
import { registerEnumType } from "@nestjs/graphql";

export enum EnumTagObservedValue {
  Pylon = "Pylon",
  Tower = "Tower",
  Tank = "Tank",
  Building = "Building",
  BuildingSteeple = "Building_Steeple",
  Bridge = "Bridge",
  Sign = "Sign",
  Windmill = "Windmill",
  StorageStructure = "Storage_Structure",
  TankWatertower = "Tank_WaterTower",
  Smokestack = "SmokeStack",
  IndustrialPlant = "Industrial_Plant",
  Crane = "Crane",
}

registerEnumType(EnumTagObservedValue, {
  name: "EnumTagObservedValue",
});
