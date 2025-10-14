import React, { useState, useEffect } from "react";
import { UseCreateInterviewShedule } from "../../../../../hooks/useInterview.js";
import toast from "react-hot-toast";

const ScheduleInterviewForm = ({ candidateId, jobId, onSuccess }) => {
  const [scheduledAt, setScheduledAt] = useState("");
  const [mode, setMode] = useState("Online");
  const [locationOrLink, setLocationOrLink] = useState("");
  const [notes, setNotes] = useState("");

  const {
    mutate: scheduleInterview,
    isLoading: isPending,
    isSuccess,
    isError,
    error,
  } = UseCreateInterviewShedule();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!scheduledAt || !mode || !locationOrLink) {
      alert("Please fill all fields");
      return;
    }

    const interviewData = {
      candidateId,
      jobId,
      scheduledAt,
      mode,
      locationOrLink,
      notes,
    };

    scheduleInterview(interviewData, {
      onSuccess: () => {
        if (onSuccess) onSuccess();
        toast.success("schedule done")
      },
    });


  };

  useEffect(() => {
    if (isSuccess) {
      setScheduledAt("");
      setMode("Online");
      setLocationOrLink("");
      setNotes("");
    }
  }, [isSuccess]);

  return (
    <div className=" p-6  mx-auto mt-6  ">
      <h2 className="text-xl font-semibold mb-4">Schedule Interview</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Date & Time</label>
          <input
            type="datetime-local"
            value={scheduledAt}
            onChange={(e) => setScheduledAt(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Mode</label>
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value)}
            className="select select-bordered w-full"
            required
          >
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
            <option value="Phone">Phone</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">Location / Link</label>
          <input
            type="text"
            value={locationOrLink}
            onChange={(e) => setLocationOrLink(e.target.value)}
            placeholder="Google Meet link or Office Address"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Notes (Optional)</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Any extra notes for the candidate"
            className="textarea textarea-bordered w-full"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={isPending}
        >
          {isPending ? "Scheduling..." : "Schedule Interview"}
        </button>

        {isSuccess && (
          <div className="text-green-600 text-sm mt-2">
            ✅ Interview scheduled successfully!
          </div>
        )}

        {isError && (
          <div className="text-red-600 text-sm mt-2">
            ❌ {error?.response?.data?.message || "Something went wrong"}
          </div>
        )}
      </form>
    </div>
  );
};

export default ScheduleInterviewForm;
