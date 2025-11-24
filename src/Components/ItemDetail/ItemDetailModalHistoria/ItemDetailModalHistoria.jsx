export default function ItemDetailModalHistoria({ videoHistoria, setMostrarHistoria }) {
  const getEmbedUrl = (url) => (url ? url.replace("watch?v=", "embed/") : null);

  return (
    <div onClick={() => setMostrarHistoria(false)} className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div onClick={(e) => e.stopPropagation()} className="bg-white dark:bg-gray-800 rounded-2xl p-4 max-w-3xl w-full shadow-2xl">
        <div className="flex justify-end mb-2">
          <button onClick={() => setMostrarHistoria(false)} className="text-gray-500 hover:text-red-500 text-2xl font-bold">
            ✕
          </button>
        </div>
        <iframe
          width="100%"
          height="480"
          src={getEmbedUrl(videoHistoria)}
          title="Historia del producto"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-xl"
        ></iframe>
      </div>
    </div>
  );
}
