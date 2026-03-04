"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, Sphere, Text3D, Center, Float, PresentationControls } from "@react-three/drei";
import { Mesh } from "three";

interface FootPartProps {
  position: [number, number, number];
  label: string;
  onClick: () => void;
}

function FootPart({ position, label, onClick }: FootPartProps) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <group position={position}>
      <Sphere
        args={[0.15, 16, 16]}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial
          color={hovered ? "#ff6b6b" : "#4dabf7"}
          emissive={hovered ? "#ff6b6b" : "#4dabf7"}
          emissiveIntensity={hovered ? 0.5 : 0.2}
        />
      </Sphere>
      {hovered && (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <Center position={[0, 0.5, 0]}>
            <Text3D
              font="/fonts/helvetiker_regular.typeface.json"
              size={0.15}
              height={0.05}
              curveSegments={12}
            >
              {label}
              <meshStandardMaterial color="white" />
            </Text3D>
          </Center>
        </Float>
      )}
    </group>
  );
}

function FootModel3D() {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  const footParts = [
    { position: [0, 1.5, 0.5] as [number, number, number], label: "Achilles Tendon", link: "/patient-education/common-disorders/achilles-tendonitis-flat-feet" },
    { position: [-0.8, -1.2, 0.5] as [number, number, number], label: "Bunions", link: "/patient-education/common-disorders/bunions" },
    { position: [0, -1.5, 0.5] as [number, number, number], label: "Heel Pain", link: "/patient-education/common-disorders/heel-pain-bone-spurs-plantar-fasciitis" },
    { position: [0.5, -0.5, 0.8] as [number, number, number], label: "Hammertoes", link: "/patient-education/common-disorders/hammertoes" },
    { position: [-0.5, -0.5, 0.8] as [number, number, number], label: "Neuromas", link: "/patient-education/common-disorders/neuromas" },
  ];

  return (
    <group ref={meshRef}>
      {/* Simplified foot shape using basic geometries */}
      <group>
        {/* Main foot body */}
        <Box args={[2, 0.8, 4]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#f8f9fa" opacity={0.8} transparent />
        </Box>
        
        {/* Heel */}
        <Box args={[1.8, 1.2, 1.5]} position={[0, -0.5, -1.5]}>
          <meshStandardMaterial color="#e9ecef" opacity={0.8} transparent />
        </Box>
        
        {/* Toes */}
        {[-0.8, -0.4, 0, 0.4, 0.8].map((x, i) => (
          <Box key={i} args={[0.3, 0.4, 0.8]} position={[x, 0.2, 2.2]}>
            <meshStandardMaterial color="#dee2e6" opacity={0.8} transparent />
          </Box>
        ))}
        
        {/* Ankle */}
        <Box args={[1.2, 2, 1.2]} position={[0, 1.5, -1]}>
          <meshStandardMaterial color="#e9ecef" opacity={0.8} transparent />
        </Box>
      </group>

      {/* Interactive hotspots */}
      {footParts.map((part, index) => (
        <FootPart
          key={index}
          position={part.position}
          label={part.label}
          onClick={() => window.location.href = part.link}
        />
      ))}
    </group>
  );
}

export function InteractiveFootModel() {
  return (
    <div className="w-full h-[600px] bg-gradient-to-b from-blue-50 to-white rounded-lg shadow-xl">
      <Canvas camera={{ position: [5, 3, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <PresentationControls
          global
          zoom={0.8}
          rotation={[0, -Math.PI / 4, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        >
          <FootModel3D />
        </PresentationControls>
      </Canvas>
      <div className="text-center mt-4 text-gray-600">
        <p className="text-sm">Interactive 3D Foot Model - Click on highlighted areas to learn more</p>
      </div>
    </div>
  );
}
