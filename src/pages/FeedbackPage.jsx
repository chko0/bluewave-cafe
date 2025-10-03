export default function FeedbackPage() {
  return (
    <main className="px-6 py-12 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-900 mb-4">
        We Value Your Feedback
      </h2>
      <form className="space-y-4">
        <textarea
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          rows="5"
          placeholder="Share your thoughts with us..."
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
