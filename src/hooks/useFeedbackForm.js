import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { WORKERS } from "../config";

const MIN_MESSAGE_LENGTH = 10;
const WORKER_ENDPOINT = WORKERS.feedbackEndpoint;

export function useFeedbackForm() {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({ rating: 0, message: "" });
  const [touched, setTouched] = useState({ rating: false, message: false });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const currentLength = formState.message.trim().replace(/\s/g, "").length;
  const isMessageValid = currentLength >= MIN_MESSAGE_LENGTH;
  const isValid = isMessageValid && formState.rating > 0;

  const handleSubmit = async (e) => {
    e.preventDefault();

    setTouched({ rating: true, message: true });
    if (!isValid) return;

    setLoading(true);
    setResult(""); // Clear previous results

    // Append fields for the Worker to process
    const formData = new FormData(e.target);
    formData.append("rating", formState.rating);

    // Submission Logic
    try {
      const response = await fetch(WORKER_ENDPOINT, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        navigate("/feedback/success");
      } else {
        // Display the error message returned by the Worker
        setResult(data.message || "A server error occurred.");
      }
    } catch (error) {
      console.error("Submission failed: ", error);
      setResult("Network error or failed to reach the server.");
    } finally {
      setLoading(false);
    }
  };
  return {
    formState,
    setFormState,
    touched,
    setTouched,
    loading,
    result,
    currentLength,
    isMessageValid,
    isValid,
    handleSubmit,
    MIN_MESSAGE_LENGTH,
  };
}
