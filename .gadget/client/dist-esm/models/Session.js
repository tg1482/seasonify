import {
  findManyRunner,
  findOneRunner,
  findOneByFieldRunner
} from "@gadgetinc/api-client-core";
const DefaultSessionSelection = {
  "id": true,
  "__typename": true,
  "createdAt": true,
  "updatedAt": true,
  "roles": {
    "key": true,
    "name": true
  },
  "shopifySID": true
};
;
;
;
;
;
class SessionManager {
  constructor(connection) {
    this.connection = connection;
    this.findOne = Object.assign(async (id, options) => {
      return await findOneRunner(this, "session", id, DefaultSessionSelection, "session", options);
    }, {
      type: "findOne",
      findByVariableName: "id",
      operationName: "session",
      modelApiIdentifier: "session",
      defaultSelection: DefaultSessionSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null
    });
    this.maybeFindOne = Object.assign(async (id, options) => {
      const record = await findOneRunner(this, "session", id, DefaultSessionSelection, "session", options, false);
      return record.isEmpty() ? null : record;
    }, {
      type: "maybeFindOne",
      findByVariableName: "id",
      operationName: "session",
      modelApiIdentifier: "session",
      defaultSelection: DefaultSessionSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null
    });
    this.findMany = Object.assign(async (options) => {
      return await findManyRunner(this, "sessions", DefaultSessionSelection, "session", options);
    }, {
      type: "findMany",
      operationName: "sessions",
      modelApiIdentifier: "session",
      defaultSelection: DefaultSessionSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null
    });
    this.findFirst = Object.assign(async (options) => {
      const list = await findManyRunner(this, "sessions", DefaultSessionSelection, "session", { ...options, first: 1, last: void 0, before: void 0, after: void 0 }, true);
      return list[0];
    }, {
      type: "findFirst",
      operationName: "sessions",
      modelApiIdentifier: "session",
      defaultSelection: DefaultSessionSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null
    });
    this.maybeFindFirst = Object.assign(async (options) => {
      const list = await findManyRunner(this, "sessions", DefaultSessionSelection, "session", { ...options, first: 1, last: void 0, before: void 0, after: void 0 }, false);
      return list?.[0] ?? null;
    }, {
      type: "maybeFindFirst",
      operationName: "sessions",
      modelApiIdentifier: "session",
      defaultSelection: DefaultSessionSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null
    });
    this.findById = Object.assign(async (value, options) => {
      return await findOneByFieldRunner(this, "sessions", "id", value, DefaultSessionSelection, "session", options);
    }, {
      type: "findOne",
      findByVariableName: "id",
      operationName: "sessions",
      modelApiIdentifier: "session",
      defaultSelection: DefaultSessionSelection,
      selectionType: {},
      optionsType: {},
      schemaType: null
    });
  }
}
export {
  DefaultSessionSelection,
  SessionManager
};
//# sourceMappingURL=Session.js.map
