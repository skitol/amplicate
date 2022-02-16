import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { PredictionController } from "../prediction.controller";
import { PredictionService } from "../prediction.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  className: "exampleClassName",
  createdAt: new Date(),
  geometry: "exampleGeometry",
  id: "exampleId",
  imageName: "exampleImageName",
  lat: 42.42,
  lon: 42.42,
  score: 42.42,
  tileName: "exampleTileName",
  updatedAt: new Date(),
  x: 42.42,
  xmax1: 42.42,
  xmin1: 42.42,
  y: 42.42,
  ymax: 42.42,
  ymin: 42.42,
};
const CREATE_RESULT = {
  className: "exampleClassName",
  createdAt: new Date(),
  geometry: "exampleGeometry",
  id: "exampleId",
  imageName: "exampleImageName",
  lat: 42.42,
  lon: 42.42,
  score: 42.42,
  tileName: "exampleTileName",
  updatedAt: new Date(),
  x: 42.42,
  xmax1: 42.42,
  xmin1: 42.42,
  y: 42.42,
  ymax: 42.42,
  ymin: 42.42,
};
const FIND_MANY_RESULT = [
  {
    className: "exampleClassName",
    createdAt: new Date(),
    geometry: "exampleGeometry",
    id: "exampleId",
    imageName: "exampleImageName",
    lat: 42.42,
    lon: 42.42,
    score: 42.42,
    tileName: "exampleTileName",
    updatedAt: new Date(),
    x: 42.42,
    xmax1: 42.42,
    xmin1: 42.42,
    y: 42.42,
    ymax: 42.42,
    ymin: 42.42,
  },
];
const FIND_ONE_RESULT = {
  className: "exampleClassName",
  createdAt: new Date(),
  geometry: "exampleGeometry",
  id: "exampleId",
  imageName: "exampleImageName",
  lat: 42.42,
  lon: 42.42,
  score: 42.42,
  tileName: "exampleTileName",
  updatedAt: new Date(),
  x: 42.42,
  xmax1: 42.42,
  xmin1: 42.42,
  y: 42.42,
  ymax: 42.42,
  ymin: 42.42,
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

describe("Prediction", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PredictionService,
          useValue: service,
        },
      ],
      controllers: [PredictionController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /predictions", async () => {
    await request(app.getHttpServer())
      .post("/predictions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /predictions", async () => {
    await request(app.getHttpServer())
      .get("/predictions")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /predictions/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/predictions"}/${nonExistingId}`)
      .expect(404)
      .expect({
        statusCode: 404,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /predictions/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/predictions"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
