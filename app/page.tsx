import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Trucks | AM Truck Market",
  description: "Browse available trucks for sale",
}

export default function TrucksPage() {
  return (
    <main className="min-h-screen px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">
        Available Trucks
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="border p-4 rounded-lg shadow">
          <h2 className="font-semibold">Sample Truck</h2>
          <p className="text-sm text-muted-foreground">
            This is placeholder content.
          </p>
        </div>
      </div>
    </main>
  )
}