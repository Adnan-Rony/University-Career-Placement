
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import styles

const JobDescriptionEditor = ({ value, onChange }) => {
  return (
    <div className="w-full">
      <label className="block text-lg font-semibold">Job description</label>
      <p className="text-sm text-gray-500 mb-2">
        This will be visible to anyone who views your job post.
      </p>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        placeholder="Write job details here..."
        modules={{
          toolbar: [
            ["bold", "italic"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ align: [] }],
          ],
        }}
        className="bg-white"
      />
      <p className="text-gray-400 text-sm text-right mt-1">{value.length}/10,000</p>
    </div>
  );
};

export default JobDescriptionEditor;
