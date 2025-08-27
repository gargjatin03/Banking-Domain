export default function Home() {
  const PBI_EMBED_URL = process.env.NEXT_PUBLIC_PBI_EMBED_URL;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">SafeLend Dashboard</h1>
      <iframe
        title="SafeLend Power BI Dashboard"
        width="1000"
        height="600"
        src={PBI_EMBED_URL}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </main>
  );
}
