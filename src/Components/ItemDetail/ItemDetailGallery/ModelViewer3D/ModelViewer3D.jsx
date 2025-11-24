export default function ModelViewer3D({ modelo3D, nombre, scale3D, style3D }) {
    if (!modelo3D) return null;

    return (
        <model-viewer
            bounds="tight"
            ar
            ar-scale="fixed"
            ar-modes="scene-viewer webxr quick-look"
            camera-controls
            environment-image="neutral"
            shadow-intensity="1"
            exposure="0.42"
            auto-rotate
            scale={scale3D}
            src={modelo3D}
            alt={nombre}
            style={{
                width: "100%",
                height: "520px",
                maxWidth: "700px",
                backgroundColor: "transparent",
                filter: "brightness(0.8 ) contrast(1.2)",

            }}
        ></model-viewer>
    );
}
