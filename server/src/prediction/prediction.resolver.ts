import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { PredictionResolverBase } from "./base/prediction.resolver.base";
import { Prediction } from "./base/Prediction";
import { PredictionService } from "./prediction.service";

@graphql.Resolver(() => Prediction)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PredictionResolver extends PredictionResolverBase {
  constructor(
    protected readonly service: PredictionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
