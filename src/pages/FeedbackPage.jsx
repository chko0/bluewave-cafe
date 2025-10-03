import { MessageCircle } from "lucide-react";
import { useState } from "react";

export default function FeedbackPage() {
  // const [result, setResult] = useState("");

  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   setResult("Sending....");
  //   const formData = new FormData(event.target);

  //   formData.append("access_key", "1aa061e8-2830-4275-acb2-e9428d1523ec");

  //   const response = await fetch("https://api.web3forms.com/submit", {
  //     method: "POST",
  //     body: formData,
  //   });

  //   const data = await response.json();

  //   if (data.success) {
  //     setResult("Form Submitted Successfully");
  //     event.target.reset();
  //   } else {
  //     console.log("Error", data);
  //     setResult(data.message);
  //   }
  // };

  return (
    <main className="px-6 py-12 max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <MessageCircle className="w-12 h-12 mx-auto text-blue-500 mb-4" />
        <h2 className="text-3xl font-bold text-blue-900 mb-2">
          We Value Your Feedback
        </h2>
        <p className="text-blue-800 text-lg">
          Tell us what you loved or how we can improve. Every message helps us
          make BlueWave Café better!
        </p>
      </div>

      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="bg-white p-8 rounded-2xl shadow-md space-y-6"
      >
        <input
          type="hidden"
          name="access_key"
          value="1aa061e8-2830-4275-acb2-e9428d1523ec"
        />

        <input
          type="text"
          name="name"
          placeholder="Your name (optional)"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 border-gray-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email (optional)"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 border-gray-400"
        />
        <textarea
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 border-gray-400"
          rows="5"
          name="message"
          placeholder="Share your thoughts with us..."
          required
        />

        <input
          type="hidden"
          name="redirect"
          value="http://localhost:5173/feedback/success"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition font-semibold hover:cursor-pointer"
        >
          Submit Feedback
        </button>
      </form>
    </main>
  );
}
