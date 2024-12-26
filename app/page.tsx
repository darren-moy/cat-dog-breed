import Link from 'next/link'

export default function HomePage() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <h1 className='text-4xl font-bold text-blue-600'>
        Find your perfect breed!
      </h1>
      <p className='text-lg text-gray-700 mb-6'>
        Answer a few questions about your preferences and we will recommend the best dog or cat breed for you!
      </p>
      <Link href="/questionaire">
        <button className='px-10 py-4 bg-blue-600 text-white rounded-lg shadow hover: bg-blue-700'>Start Questionaire</button>
      </Link>
    </div>
  );
}