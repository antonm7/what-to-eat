import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Food(props:any) {
  const { nodes, materials }:any = useGLTF("/models/food_set.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group
            position={[-200.61, 344.72, -3.79]}
            rotation={[-1.48, 0, 0]}
            scale={81.98}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["������������_����������_����������_������������_0"]
                  .geometry
              }
              material={materials.material}
            />
          </group>
          <group
            position={[-200.61, 391.78, 0.8]}
            rotation={[-1.48, 0, 0]}
            scale={110.56}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["��������������_����������������_0"].geometry}
              material={materials.material_1}
            />
          </group>
          <group
            position={[-200.61, 370.42, -1.22]}
            rotation={[-1.48, 0, 0]}
            scale={81.98}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["��������������_������������������_0"].geometry}
              material={materials.material_2}
            />
          </group>
          <group
            position={[-200.61, 361.28, -2.22]}
            rotation={[-1.48, 0, 0]}
            scale={76.45}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["��������������������_����������_0"].geometry}
              material={materials.material_3}
            />
          </group>
          <group
            position={[-200.61, 376.44, -5.59]}
            rotation={[-1.48, 0, 0]}
            scale={110.56}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������������������_������_0"].geometry}
              material={materials.material_4}
            />
          </group>
          <group
            position={[-200.61, 404, 1.82]}
            rotation={[-1.48, 0, 0]}
            scale={76.45}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["��������������������001_����������_0"].geometry}
              material={materials.material_3}
            />
          </group>
          <group
            position={[-200.61, 426.31, 3.93]}
            rotation={[-1.48, 0, 1.03]}
            scale={110.56}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["����������_����������_������������_0"].geometry}
              material={materials.material}
            />
          </group>
          <group
            position={[-241.4, 444.76, 27.7]}
            rotation={[0.61, -0.76, 0.46]}
            scale={8.84}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������������001_������������_0"].geometry}
              material={materials.material_5}
            />
          </group>
          <group
            position={[-153.67, 445.73, 13.53]}
            rotation={[1.58, 1.18, -1.43]}
            scale={8.84}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������������002_������������_0"].geometry}
              material={materials.material_5}
            />
          </group>
          <group
            position={[-162.09, 449.81, 0.03]}
            rotation={[2.77, 0.96, -2.65]}
            scale={8.84}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������������003_������������_0"].geometry}
              material={materials.material_5}
            />
          </group>
          <group
            position={[-236.47, 449.59, -23.29]}
            rotation={[1.44, -1.28, 1.59]}
            scale={8.84}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������������004_������������_0"].geometry}
              material={materials.material_5}
            />
          </group>
          <group
            position={[-155.22, 434.64, 47.4]}
            rotation={[1.23, 0.92, -0.79]}
            scale={8.84}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������������005_������������_0"].geometry}
              material={materials.material_5}
            />
          </group>
          <group
            position={[-202.14, 445.56, 44.89]}
            rotation={[0.39, -1.04, 0.02]}
            scale={8.84}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������������006_������������_0"].geometry}
              material={materials.material_5}
            />
          </group>
          <group
            position={[-183.05, 444.75, -53.01]}
            rotation={[2.57, 0.4, -2.96]}
            scale={8.84}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������������007_������������_0"].geometry}
              material={materials.material_5}
            />
          </group>
          <group
            position={[-187.74, 448.38, 34.5]}
            rotation={[0.36, 0.75, -0.11]}
            scale={8.84}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������������008_������������_0"].geometry}
              material={materials.material_5}
            />
          </group>
          <group
            position={[-154.39, 428.99, 54.39]}
            rotation={[0.07, -0.84, -0.79]}
            scale={8.84}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������������009_������������_0"].geometry}
              material={materials.material_5}
            />
          </group>
          <group
            position={[-200.33, 454.62, -10.98]}
            rotation={[-3.14, -0.33, -3.14]}
            scale={8.84}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������������010_������������_0"].geometry}
              material={materials.material_5}
            />
          </group>
          <group
            position={[-222.5, 433.16, 63.03]}
            rotation={[3.05, -1.28, 2.34]}
            scale={8.84}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������������011_������������_0"].geometry}
              material={materials.material_5}
            />
          </group>
          <group
            position={[-219.3, 451.31, 17.79]}
            rotation={[0.22, -0.5, 0.12]}
            scale={8.84}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������������012_������������_0"].geometry}
              material={materials.material_5}
            />
          </group>
          <group
            position={[-247.67, 435.6, 43.8]}
            rotation={[2.65, -1.04, 2.07]}
            scale={8.84}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������������013_������������_0"].geometry}
              material={materials.material_5}
            />
          </group>
          <group
            position={[-261.16, 437.31, 19.17]}
            rotation={[1.23, -0.87, 1.09]}
            scale={8.84}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������������014_������������_0"].geometry}
              material={materials.material_5}
            />
          </group>
          <group
            position={[-149.39, 444.97, -13.29]}
            rotation={[2.86, 0.36, -2.65]}
            scale={8.84}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������������015_������������_0"].geometry}
              material={materials.material_5}
            />
          </group>
          <group
            position={[-230.07, 450.19, -29.7]}
            rotation={[2.69, -0.81, 2.8]}
            scale={8.84}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������������016_������������_0"].geometry}
              material={materials.material_5}
            />
          </group>
          <group
            position={[-174.93, 433.31, 61.47]}
            rotation={[0.66, -0.07, -0.25]}
            scale={8.84}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������������017_������������_0"].geometry}
              material={materials.material_5}
            />
          </group>
          <group
            position={[-215.01, 452.95, 7.86]}
            rotation={[-3.08, -0.54, 3.05]}
            scale={8.84}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������������018_������������_0"].geometry}
              material={materials.material_5}
            />
          </group>
          <group
            position={[-179.5, 434.69, -65.85]}
            rotation={[0.28, 1.31, -1.12]}
            scale={8.84}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������������019_������������_0"].geometry}
              material={materials.material_5}
            />
          </group>
          <group
            position={[-202.18, 450.93, -41.5]}
            rotation={[2.86, 0.65, 3.13]}
            scale={8.84}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������������020_������������_0"].geometry}
              material={materials.material_5}
            />
          </group>
          <group
            position={[0.72, 405.45, 3.92]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={56.74}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["����������_����������_����������������_0"].geometry
              }
              material={materials.material_6}
            />
          </group>
          <group
            position={[0.19, 426.53, 18.48]}
            rotation={[-Math.PI / 2, 0.09, 0]}
            scale={64.42}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������006_��������������������_0"].geometry}
              material={materials.material_7}
            />
          </group>
          <group
            position={[186.18, 358.45, 2.5]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={56.27}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["����������_����������_0"].geometry}
              material={materials.material_8}
            />
          </group>
          <group
            position={[186.18, 422.94, 2.5]}
            rotation={[-Math.PI / 2, 0, 0.33]}
            scale={56.27}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["������������������_������������������_0"].geometry
              }
              material={materials.material_9}
            />
          </group>
          <group
            position={[184.9, 474.21, 41.61]}
            rotation={[2.81, 0.95, -3.04]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������001_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[154.56, 428.17, -50.19]}
            rotation={[-1.35, 1.48, -1.34]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������002_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[158.7, 446.26, -39.65]}
            rotation={[-2.83, 0.13, 3.05]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������003_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[148.75, 474.21, -8.87]}
            rotation={[1.02, -0.6, 2.5]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������004_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[189.2, 489.33, 25.55]}
            rotation={[-1.99, 0.36, -0.45]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������005_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[195.44, 446.26, 51.96]}
            rotation={[2.14, 1, -0.64]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������006_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[157.5, 414.24, -51.17]}
            rotation={[0.07, 0.47, 0.2]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������007_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[229.31, 443.01, 26.43]}
            rotation={[-2.9, -1.53, -1.92]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������008_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[160.39, 475.94, 31.31]}
            rotation={[1.74, 0.47, -3.13]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������009_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[237.86, 414.24, 34.63]}
            rotation={[2.97, -0.15, -0.61]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������010_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[220.04, 472.13, 21.29]}
            rotation={[2.89, 0.03, -3.12]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������011_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[226.25, 416.74, 49.24]}
            rotation={[2.58, 1, 0.85]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������012_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[143.95, 444.21, -23.76]}
            rotation={[-1.19, -1.19, 0.44]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������013_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[171.09, 419.69, 62.92]}
            rotation={[1.82, -0.85, 0]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������014_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[153.02, 432.94, 50.95]}
            rotation={[-0.09, -1, -0.23]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������015_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[202.53, 488.86, -18.14]}
            rotation={[2.23, -0.62, -2.28]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������016_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[208.73, 428.17, -54.66]}
            rotation={[-0.01, 0.47, -1.29]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������017_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[132.68, 418.93, -8.63]}
            rotation={[2.15, 0.3, 2.39]}
            scale={34.76}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������018_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[170.1, 439.45, -45.51]}
            rotation={[-1.26, -0.45, 1.26]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������019_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[230.36, 428.17, 45.2]}
            rotation={[-1.48, 0.22, -2.28]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������020_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[198.23, 475.91, 39.32]}
            rotation={[1.42, 0.5, -0.4]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������021_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[160.32, 468.41, -25.12]}
            rotation={[0.26, -0.45, 1.34]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������022_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[142.01, 428.17, -40.21]}
            rotation={[-1.02, -0.47, -0.12]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������023_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[220.96, 416.74, -48.3]}
            rotation={[1.01, 1.4, -2.11]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������024_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[230.41, 437.14, -29.19]}
            rotation={[2.79, -0.31, -0.34]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������025_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[226.59, 464.14, -9.06]}
            rotation={[-2.43, 0.76, 2.65]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������026_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[218.11, 441.99, 39.74]}
            rotation={[-0.57, 0.5, -2.65]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������027_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[172.86, 468.41, -32.91]}
            rotation={[-1.98, -0.1, -1.19]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������028_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[153.72, 482.7, -10.46]}
            rotation={[-1.33, -0.89, -3.1]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������029_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[187.67, 498.9, -6.93]}
            rotation={[1.3, -0.56, 1.03]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������030_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[209.65, 462.95, -35.23]}
            rotation={[2.17, -0.72, -2.98]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������031_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[171.93, 487.87, 21.6]}
            rotation={[2.33, 0.32, -2.99]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������032_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[158.24, 485.89, 6.88]}
            rotation={[1, 1, -2.96]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������033_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[140.82, 451.15, 26.74]}
            rotation={[0.15, -1.01, 0.5]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������034_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[209.94, 477.93, 32.41]}
            rotation={[-0.85, -1.2, 2.78]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������035_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[159.63, 432.94, 54.87]}
            rotation={[-2.23, -0.24, 2.66]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������036_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[184.2, 431.11, 62.96]}
            rotation={[-1.85, 0.16, -2.55]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������037_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[204.86, 448.67, -44.85]}
            rotation={[1.01, -1.19, -1.6]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������038_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[154.26, 475.93, -19.4]}
            rotation={[2.05, -1.25, 0.72]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������039_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[246.65, 431.11, 4.48]}
            rotation={[1.01, 0.79, 2.49]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������040_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[198.98, 491.37, -15.49]}
            rotation={[-0.77, 0.78, 0.11]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������041_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[196.94, 495.04, 13.72]}
            rotation={[2.91, -0.41, -2.82]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������042_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[196.58, 488.62, -21.88]}
            rotation={[1.01, -0.43, -2.56]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������043_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[133.5, 428.17, 34.12]}
            rotation={[2.22, 0.46, -1.88]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������044_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[222.07, 467.03, 15.13]}
            rotation={[1.77, -0.04, -0.57]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������045_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[208.97, 474.21, 34.31]}
            rotation={[-1.36, -0.14, 1.82]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������046_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[204.12, 440.23, 48.75]}
            rotation={[3.08, -1.06, 1.64]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������047_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[218.64, 475.91, -18.66]}
            rotation={[-1.29, -1.31, -2.93]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������048_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[162.73, 486.7, -11.68]}
            rotation={[0.91, 0.99, 2.25]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������049_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group
            position={[230.36, 428.17, 45.2]}
            rotation={[-1.45, 0.65, -0.98]}
            scale={37.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes[
                  "����������������_����������050_����������_����_������������������_0"
                ].geometry
              }
              material={materials.material_10}
            />
          </group>
          <group position={[-203.03, 159.32, -0.1]} scale={75.23}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������������_������������_0"].geometry}
              material={materials.material_11}
            />
          </group>
          <group position={[-203.03, 159.32, -0.1]} scale={75.23}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["��������������_��������������_����_��������������_0"]
                  .geometry
              }
              material={materials.material_12}
            />
          </group>
          <group
            position={[-253.01, 167.3, 34.79]}
            rotation={[-Math.PI / 2, 1.02, 0]}
            scale={62.15}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["����������������_����������_����_��������������_0"]
                  .geometry
              }
              material={materials.material_13}
            />
          </group>
          <group
            position={[-272, 198.57, 20.74]}
            rotation={[0.41, 0.41, -2.2]}
            scale={62.15}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["����������������001_����������_����_��������������_3_0"]
                  .geometry
              }
              material={materials.material_14}
            />
          </group>
          <group
            position={[-243.21, 204.54, 32.45]}
            rotation={[Math.PI / 2, 0.94, Math.PI]}
            scale={62.15}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["����������������002_����������_����_��������������_4_0"]
                  .geometry
              }
              material={materials.material_15}
            />
          </group>
          <group
            position={[-229.73, 236.66, 16.83]}
            rotation={[-2.42, 0.32, -0.67]}
            scale={62.15}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["����������������003_����������_����_��������������_0"]
                  .geometry
              }
              material={materials.material_13}
            />
          </group>
          <group
            position={[-207.85, 208.26, 34.78]}
            rotation={[-Math.PI / 2, 1.02, 0]}
            scale={62.15}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["����������������004_����������_����_��������������_3_0"]
                  .geometry
              }
              material={materials.material_14}
            />
          </group>
          <group
            position={[-169.22, 192.9, 34.39]}
            rotation={[1.57, 1.57, 3.14]}
            scale={62.15}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["����������������005_����������_����_��������������_0"]
                  .geometry
              }
              material={materials.material_13}
            />
          </group>
          <group
            position={[-159.91, 166.37, 32.9]}
            rotation={[-Math.PI / 2, 0.91, 0]}
            scale={62.15}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["����������������006_����������_����_��������������_2_0"]
                  .geometry
              }
              material={materials.material_16}
            />
          </group>
          <group
            position={[-131.73, 186.93, 27.76]}
            rotation={[2.5, 0.86, 1.9]}
            scale={62.15}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["����������������007_����������_����_��������������_3_0"]
                  .geometry
              }
              material={materials.material_14}
            />
          </group>
          <group
            position={[-148.96, 218.12, 19.33]}
            rotation={[-2.75, 0.19, 0.39]}
            scale={62.15}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["����������������008_����������_����_��������������_4_0"]
                  .geometry
              }
              material={materials.material_15}
            />
          </group>
          <group
            position={[-185.27, 232.55, 23.92]}
            rotation={[-2.42, -0.61, 0.88]}
            scale={62.15}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["����������������009_����������_����_��������������_2_0"]
                  .geometry
              }
              material={materials.material_16}
            />
          </group>
          <group
            position={[-0.98, 171.33, 4.25]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={65.78}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["������������������_������������������_0_1"].geometry
              }
              material={materials.material_17}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["������������������_������������������_��������������_0"]
                  .geometry
              }
              material={materials.material_18}
            />
          </group>
          <group
            position={[-4.18, 209.03, 4.25]}
            rotation={[-Math.PI / 2, 0.13, 0]}
            scale={81.78}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["����������������_����������������_0"].geometry}
              material={materials.material_19}
            />
          </group>
          <group
            position={[-18.61, 252.17, 33.47]}
            rotation={[-1.69, -0.76, -0.4]}
            scale={61.71}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������009_������_0"].geometry}
              material={materials.material_20}
            />
          </group>
          <group
            position={[11.52, 258.99, -26.71]}
            rotation={[-2.14, -0.55, -1.12]}
            scale={61.71}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������010_������_0"].geometry}
              material={materials.material_20}
            />
          </group>
          <group
            position={[-14.74, 261.24, -14.35]}
            rotation={[2.85, -0.6, -1.62]}
            scale={61.71}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������011_������_0"].geometry}
              material={materials.material_20}
            />
          </group>
          <group
            position={[-36.94, 255.58, 9.88]}
            rotation={[-2.96, -0.48, -1.61]}
            scale={61.71}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������012_������_0"].geometry}
              material={materials.material_20}
            />
          </group>
          <group
            position={[11.44, 255.58, 36.84]}
            rotation={[-2.96, -0.48, -1.61]}
            scale={61.71}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������013_������_0"].geometry}
              material={materials.material_20}
            />
          </group>
          <group
            position={[33.17, 250.79, 20.54]}
            rotation={[-2.96, -0.48, -1.61]}
            scale={61.71}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������014_������_0"].geometry}
              material={materials.material_20}
            />
          </group>
          <group
            position={[33.21, 253.62, -8.58]}
            rotation={[-3, -0.29, -1.27]}
            scale={61.71}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������015_������_0"].geometry}
              material={materials.material_20}
            />
          </group>
          <group
            position={[-6.08, 3.94, 4.89]}
            rotation={[0.85, 0, 0]}
            scale={30.19}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["������������������_������������������_0_2"].geometry
              }
              material={materials.material_21}
            />
          </group>
          <group
            position={[-6.08, -23.03, 16.51]}
            rotation={[1.03, 0, 0]}
            scale={37.44}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["����������_������-������_2_����������_������������_0"]
                  .geometry
              }
              material={materials.material}
            />
          </group>
          <group
            position={[-6.08, 28.24, 23.9]}
            rotation={[-0.9, 0, 0]}
            scale={37.44}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["����������������_��������������_0"].geometry}
              material={materials.material_22}
            />
          </group>
          <group position={[193.9, 88.45, 8]} scale={50.85}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["��������_����������_������������_0"].geometry}
              material={materials.material}
            />
          </group>
          <group
            position={[157.99, 145.47, 24.66]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={126.44}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["����������������_2_����������������_����_����������_0"]
                  .geometry
              }
              material={materials.material_23}
            />
          </group>
          <group
            position={[221.89, 208.24, 23.42]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={116.99}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes["����������������_1_����������������_����_����������_0"]
                  .geometry
              }
              material={materials.material_23}
            />
          </group>
          <group
            position={[159.71, 194.84, 26.42]}
            rotation={[-1.59, 0.1, 0]}
            scale={43.7}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������������_2_��������������_0"].geometry}
              material={materials.material_24}
            />
          </group>
          <group
            position={[218.17, 144.02, 27.4]}
            rotation={[-1.59, 0.68, 0]}
            scale={46.2}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������������_1_��������������_0"].geometry}
              material={materials.material_24}
            />
          </group>
          <group
            position={[204.12, 164.43, 24.26]}
            rotation={[-1.64, 0.44, 0.02]}
            scale={63.93}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������������_1_������������_0"].geometry}
              material={materials.material_25}
            />
          </group>
          <group
            position={[183.17, 234.39, 22.66]}
            rotation={[-1.64, -0.41, -0.02]}
            scale={63.01}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["������������_2_������������_0"].geometry}
              material={materials.material_25}
            />
          </group>
          <group position={[193.9, 88.45, 8]} scale={50.85}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["��������001_������_0"].geometry}
              material={materials.material_4}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/food_set.glb");