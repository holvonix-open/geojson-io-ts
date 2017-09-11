import * as io from 'io-ts';
import { Feature } from '../src';
export declare const geojsonLine: any;
export declare const geojsonMissingProperties: any;
export declare const f: Feature;
export declare const line: io.InterfaceOf<{
    type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
}> & io.PartialOf<{
    bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
}> & io.InterfaceOf<{
    type: io.LiteralType<"FeatureCollection">;
    features: io.ArrayType<io.IntersectionType<[io.IntersectionType<[io.InterfaceType<{
        type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
    }>, io.PartialType<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>], io.InterfaceOf<{
        type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
    }> & io.PartialOf<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>>, io.InterfaceType<{
        type: io.LiteralType<"Feature">;
        geometry: io.UnionType<[io.UnionType<[io.IntersectionType<[io.IntersectionType<[io.InterfaceType<{
            type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
        }>, io.PartialType<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>], io.InterfaceOf<{
            type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>>, io.InterfaceType<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }>], io.InterfaceOf<{
            type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }> & io.InterfaceOf<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }>>, io.IntersectionType<[io.InterfaceType<{
            type: io.LiteralType<"GeometryCollection">;
            geometries: io.ArrayType<io.IntersectionType<[io.IntersectionType<[io.InterfaceType<{
                type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
            }>, io.PartialType<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>], io.InterfaceOf<{
                type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
            }> & io.PartialOf<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>>, io.InterfaceType<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }>], io.InterfaceOf<{
                type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
            }> & io.PartialOf<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }> & io.InterfaceOf<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }>>>;
        }>, io.PartialType<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>], io.InterfaceOf<{
            type: io.LiteralType<"GeometryCollection">;
            geometries: io.ArrayType<io.IntersectionType<[io.IntersectionType<[io.InterfaceType<{
                type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
            }>, io.PartialType<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>], io.InterfaceOf<{
                type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
            }> & io.PartialOf<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>>, io.InterfaceType<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }>], io.InterfaceOf<{
                type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
            }> & io.PartialOf<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }> & io.InterfaceOf<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }>>>;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>>], (io.InterfaceOf<{
            type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }> & io.InterfaceOf<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }>) | (io.InterfaceOf<{
            type: io.LiteralType<"GeometryCollection">;
            geometries: io.ArrayType<io.IntersectionType<[io.IntersectionType<[io.InterfaceType<{
                type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
            }>, io.PartialType<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>], io.InterfaceOf<{
                type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
            }> & io.PartialOf<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>>, io.InterfaceType<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }>], io.InterfaceOf<{
                type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
            }> & io.PartialOf<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }> & io.InterfaceOf<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }>>>;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>)>, io.NullType], (io.InterfaceOf<{
            type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }> & io.InterfaceOf<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }>) | (io.InterfaceOf<{
            type: io.LiteralType<"GeometryCollection">;
            geometries: io.ArrayType<io.IntersectionType<[io.IntersectionType<[io.InterfaceType<{
                type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
            }>, io.PartialType<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>], io.InterfaceOf<{
                type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
            }> & io.PartialOf<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>>, io.InterfaceType<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }>], io.InterfaceOf<{
                type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
            }> & io.PartialOf<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }> & io.InterfaceOf<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }>>>;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>) | null>;
        properties: io.UnionType<[io.DictionaryType<io.StringType, io.AnyType>, io.NullType], {
            [key: string]: any;
        } | null>;
    }>, io.PartialType<{
        id: io.UnionType<[io.StringType, io.NumberType], string | number>;
    }>], io.InterfaceOf<{
        type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
    }> & io.PartialOf<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }> & io.InterfaceOf<{
        type: io.LiteralType<"Feature">;
        geometry: io.UnionType<[io.UnionType<[io.IntersectionType<[io.IntersectionType<[io.InterfaceType<{
            type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
        }>, io.PartialType<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>], io.InterfaceOf<{
            type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>>, io.InterfaceType<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }>], io.InterfaceOf<{
            type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }> & io.InterfaceOf<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }>>, io.IntersectionType<[io.InterfaceType<{
            type: io.LiteralType<"GeometryCollection">;
            geometries: io.ArrayType<io.IntersectionType<[io.IntersectionType<[io.InterfaceType<{
                type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
            }>, io.PartialType<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>], io.InterfaceOf<{
                type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
            }> & io.PartialOf<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>>, io.InterfaceType<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }>], io.InterfaceOf<{
                type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
            }> & io.PartialOf<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }> & io.InterfaceOf<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }>>>;
        }>, io.PartialType<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>], io.InterfaceOf<{
            type: io.LiteralType<"GeometryCollection">;
            geometries: io.ArrayType<io.IntersectionType<[io.IntersectionType<[io.InterfaceType<{
                type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
            }>, io.PartialType<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>], io.InterfaceOf<{
                type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
            }> & io.PartialOf<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>>, io.InterfaceType<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }>], io.InterfaceOf<{
                type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
            }> & io.PartialOf<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }> & io.InterfaceOf<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }>>>;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>>], (io.InterfaceOf<{
            type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }> & io.InterfaceOf<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }>) | (io.InterfaceOf<{
            type: io.LiteralType<"GeometryCollection">;
            geometries: io.ArrayType<io.IntersectionType<[io.IntersectionType<[io.InterfaceType<{
                type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
            }>, io.PartialType<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>], io.InterfaceOf<{
                type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
            }> & io.PartialOf<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>>, io.InterfaceType<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }>], io.InterfaceOf<{
                type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
            }> & io.PartialOf<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }> & io.InterfaceOf<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }>>>;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>)>, io.NullType], (io.InterfaceOf<{
            type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }> & io.InterfaceOf<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }>) | (io.InterfaceOf<{
            type: io.LiteralType<"GeometryCollection">;
            geometries: io.ArrayType<io.IntersectionType<[io.IntersectionType<[io.InterfaceType<{
                type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
            }>, io.PartialType<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>], io.InterfaceOf<{
                type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
            }> & io.PartialOf<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }>>, io.InterfaceType<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }>], io.InterfaceOf<{
                type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
            }> & io.PartialOf<{
                bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
            }> & io.InterfaceOf<{
                type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
                coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
            }>>>;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>) | null>;
        properties: io.UnionType<[io.DictionaryType<io.StringType, io.AnyType>, io.NullType], {
            [key: string]: any;
        } | null>;
    }> & io.PartialOf<{
        id: io.UnionType<[io.StringType, io.NumberType], string | number>;
    }>>>;
}>;
export declare const missingProperties: io.ValidationError[];
export declare const feature: io.InterfaceOf<{
    type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
}> & io.PartialOf<{
    bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
}> & io.InterfaceOf<{
    type: io.LiteralType<"Feature">;
    geometry: io.UnionType<[io.UnionType<[io.IntersectionType<[io.IntersectionType<[io.InterfaceType<{
        type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
    }>, io.PartialType<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>], io.InterfaceOf<{
        type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
    }> & io.PartialOf<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>>, io.InterfaceType<{
        type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
        coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
    }>], io.InterfaceOf<{
        type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
    }> & io.PartialOf<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }> & io.InterfaceOf<{
        type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
        coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
    }>>, io.IntersectionType<[io.InterfaceType<{
        type: io.LiteralType<"GeometryCollection">;
        geometries: io.ArrayType<io.IntersectionType<[io.IntersectionType<[io.InterfaceType<{
            type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
        }>, io.PartialType<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>], io.InterfaceOf<{
            type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>>, io.InterfaceType<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }>], io.InterfaceOf<{
            type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }> & io.InterfaceOf<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }>>>;
    }>, io.PartialType<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>], io.InterfaceOf<{
        type: io.LiteralType<"GeometryCollection">;
        geometries: io.ArrayType<io.IntersectionType<[io.IntersectionType<[io.InterfaceType<{
            type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
        }>, io.PartialType<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>], io.InterfaceOf<{
            type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>>, io.InterfaceType<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }>], io.InterfaceOf<{
            type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }> & io.InterfaceOf<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }>>>;
    }> & io.PartialOf<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>>], (io.InterfaceOf<{
        type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
    }> & io.PartialOf<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }> & io.InterfaceOf<{
        type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
        coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
    }>) | (io.InterfaceOf<{
        type: io.LiteralType<"GeometryCollection">;
        geometries: io.ArrayType<io.IntersectionType<[io.IntersectionType<[io.InterfaceType<{
            type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
        }>, io.PartialType<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>], io.InterfaceOf<{
            type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>>, io.InterfaceType<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }>], io.InterfaceOf<{
            type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }> & io.InterfaceOf<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }>>>;
    }> & io.PartialOf<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>)>, io.NullType], (io.InterfaceOf<{
        type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
    }> & io.PartialOf<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }> & io.InterfaceOf<{
        type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
        coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
    }>) | (io.InterfaceOf<{
        type: io.LiteralType<"GeometryCollection">;
        geometries: io.ArrayType<io.IntersectionType<[io.IntersectionType<[io.InterfaceType<{
            type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
        }>, io.PartialType<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>], io.InterfaceOf<{
            type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }>>, io.InterfaceType<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }>], io.InterfaceOf<{
            type: io.UnionType<[io.UnionType<[io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">, io.LiteralType<"GeometryCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection">, io.UnionType<[io.LiteralType<"Feature">, io.LiteralType<"FeatureCollection">], "Feature" | "FeatureCollection">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString" | "GeometryCollection" | "Feature" | "FeatureCollection">;
        }> & io.PartialOf<{
            bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
        }> & io.InterfaceOf<{
            type: io.UnionType<[io.LiteralType<"Point">, io.LiteralType<"Polygon">, io.LiteralType<"LineString">, io.LiteralType<"MultiPoint">, io.LiteralType<"MultiPolygon">, io.LiteralType<"MultiLineString">], "Point" | "Polygon" | "LineString" | "MultiPoint" | "MultiPolygon" | "MultiLineString">;
            coordinates: io.UnionType<[io.ArrayType<io.NumberType>, io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>, io.ArrayType<io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>>], number[] | number[][] | number[][][] | number[][][][]>;
        }>>>;
    }> & io.PartialOf<{
        bbox: io.UnionType<[io.ArrayType<io.ArrayType<io.NumberType>>, io.ArrayType<io.ArrayType<io.ArrayType<io.NumberType>>>], number[][] | number[][][]>;
    }>) | null>;
    properties: io.UnionType<[io.DictionaryType<io.StringType, io.AnyType>, io.NullType], {
        [key: string]: any;
    } | null>;
}> & io.PartialOf<{
    id: io.UnionType<[io.StringType, io.NumberType], string | number>;
}>;
