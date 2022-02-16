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
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreatePredictionArgs } from "./CreatePredictionArgs";
import { UpdatePredictionArgs } from "./UpdatePredictionArgs";
import { DeletePredictionArgs } from "./DeletePredictionArgs";
import { PredictionFindManyArgs } from "./PredictionFindManyArgs";
import { PredictionFindUniqueArgs } from "./PredictionFindUniqueArgs";
import { Prediction } from "./Prediction";
import { TagFindManyArgs } from "../../tag/base/TagFindManyArgs";
import { Tag } from "../../tag/base/Tag";
import { PredictionService } from "../prediction.service";

@graphql.Resolver(() => Prediction)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PredictionResolverBase {
  constructor(
    protected readonly service: PredictionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Prediction",
    action: "read",
    possession: "any",
  })
  async _predictionsMeta(
    @graphql.Args() args: PredictionFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Prediction])
  @nestAccessControl.UseRoles({
    resource: "Prediction",
    action: "read",
    possession: "any",
  })
  async predictions(
    @graphql.Args() args: PredictionFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Prediction[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Prediction",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Prediction, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Prediction",
    action: "read",
    possession: "own",
  })
  async prediction(
    @graphql.Args() args: PredictionFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Prediction | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Prediction",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Prediction)
  @nestAccessControl.UseRoles({
    resource: "Prediction",
    action: "create",
    possession: "any",
  })
  async createPrediction(
    @graphql.Args() args: CreatePredictionArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Prediction> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Prediction",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Prediction"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Prediction)
  @nestAccessControl.UseRoles({
    resource: "Prediction",
    action: "update",
    possession: "any",
  })
  async updatePrediction(
    @graphql.Args() args: UpdatePredictionArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Prediction | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Prediction",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Prediction"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Prediction)
  @nestAccessControl.UseRoles({
    resource: "Prediction",
    action: "delete",
    possession: "any",
  })
  async deletePrediction(
    @graphql.Args() args: DeletePredictionArgs
  ): Promise<Prediction | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Tag])
  @nestAccessControl.UseRoles({
    resource: "Prediction",
    action: "read",
    possession: "any",
  })
  async tags(
    @graphql.Parent() parent: Prediction,
    @graphql.Args() args: TagFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Tag[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Tag",
    });
    const results = await this.service.findTags(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }
}