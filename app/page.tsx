import Image from "next/image"

export default function Home() {
  // Local image path - replace with your actual image path
  const imagePath = "/routine.jpg"

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8 lg:p-10">
      {/* Frame container */}
      <div className="relative w-full max-w-5xl aspect-[4/3] bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 lg:p-10">
        {/* Image container with padding for the frame effect */}
        <div className="relative w-full h-full overflow-hidden rounded">
          <Image
            src={imagePath}
            alt="Daily routine"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            style={{
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        </div>
      </div>
    </main>
  )
}
