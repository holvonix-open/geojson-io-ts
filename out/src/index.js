"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const io = require("io-ts");
exports.i = io.interface;
exports.u = io.union;
exports.l = io.literal;
exports.a = io.array;
exports.t = io.tuple;
exports.p = io.partial;
exports.DirectGeometryTypeIO = exports.u([
    exports.l('Point'),
    exports.l('Polygon'),
    exports.l('LineString'),
    exports.l('MultiPoint'),
    exports.l('MultiPolygon'),
    exports.l('MultiLineString'),
], 'DirectGeometryTypeIO');
exports.GeometryCollectionTypeIO = exports.l('GeometryCollection', 'GeometryCollectionTypeIO');
exports.GeometryTypeIO = exports.u([
    exports.DirectGeometryTypeIO,
    exports.GeometryCollectionTypeIO,
], 'GeometryTypeIO');
exports.GeoJsonTypeIO = exports.u([
    exports.GeometryTypeIO,
    exports.u([
        exports.l('Feature'),
        exports.l('FeatureCollection'),
    ]),
], 'GeoJsonTypeIO');
exports.BoundingBoxIO = exports.u([exports.a(exports.a(io.number)), exports.a(exports.a(exports.a(io.number)))], 'BoundingBoxIO');
exports.GeoJsonObjectIO = io.intersection([
    exports.i({
        type: exports.GeoJsonTypeIO,
    }),
    exports.p({
        bbox: exports.BoundingBoxIO,
    }),
], 'GeoJsonObjectIO');
exports.PositionIO = exports.a(io.number, 'PositionIO');
exports.CoordinatesIO = exports.u([
    exports.PositionIO,
    exports.a(exports.PositionIO),
    exports.a(exports.a(exports.PositionIO)),
    exports.a(exports.a(exports.a(exports.PositionIO))),
], 'CoordinatesIO');
exports.DirectGeometryObjectIO = io.intersection([
    exports.GeoJsonObjectIO,
    exports.i({
        type: exports.DirectGeometryTypeIO,
        coordinates: exports.CoordinatesIO,
    }),
], 'DirectGeometryObjectIO');
exports.PointIO = io.intersection([
    exports.DirectGeometryObjectIO,
    exports.i({
        type: exports.l('Point'),
        coordinates: exports.PositionIO,
    }),
], 'PointIO');
exports.MultiPointIO = io.intersection([
    exports.DirectGeometryObjectIO,
    exports.i({
        type: exports.l('MultiPoint'),
        coordinates: exports.a(exports.PositionIO),
    }),
], 'MultiPointIO');
exports.LineStringIO = io.intersection([
    exports.DirectGeometryObjectIO,
    exports.i({
        type: exports.l('LineString'),
        coordinates: exports.a(exports.PositionIO),
    }),
], 'LineStringIO');
exports.MultiLineStringIO = io.intersection([
    exports.DirectGeometryObjectIO,
    exports.i({
        type: exports.l('MultiLineString'),
        coordinates: exports.a(exports.a(exports.PositionIO)),
    }),
], 'MultiLineStringIO');
exports.PolygonIO = io.intersection([
    exports.DirectGeometryObjectIO,
    exports.i({
        type: exports.l('Polygon'),
        coordinates: exports.a(exports.a(exports.PositionIO)),
    }),
], 'PolygonIO');
exports.MultiPolygonIO = io.intersection([
    exports.DirectGeometryObjectIO,
    exports.i({
        type: exports.l('MultiPolygon'),
        coordinates: exports.a(exports.a(exports.a(exports.PositionIO))),
    }),
], 'MultiPolygonIO');
exports.GeometryCollectionIO = io.intersection([
    exports.i({
        type: exports.l('GeometryCollection'),
        geometries: exports.a(exports.DirectGeometryObjectIO),
    }),
    exports.p({
        bbox: exports.BoundingBoxIO,
    }),
]);
exports.GeometryObjectIO = exports.u([
    exports.DirectGeometryObjectIO,
    exports.GeometryCollectionIO,
], 'GeometryObjectIO');
exports.PropertiesIO = exports.u([io.dictionary(io.string, io.any), io.null], 'PropertiesIO');
exports.FeatureIO = io.intersection([
    exports.GeoJsonObjectIO,
    exports.i({
        type: exports.l('Feature'),
        geometry: exports.u([exports.GeometryObjectIO, io.null]),
        properties: exports.PropertiesIO,
    }),
    exports.p({
        id: exports.u([io.string, io.number]),
    }),
], 'FeatureIO');
exports.FeatureCollectionIO = io.intersection([
    exports.GeoJsonObjectIO,
    exports.i({
        type: exports.l('FeatureCollection'),
        features: exports.a(exports.FeatureIO),
    }),
], 'FeatureCollectionIO');
//# sourceMappingURL=index.js.map